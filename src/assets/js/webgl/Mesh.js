// --------------------------

// lib

// --------------------------
import * as THREE from "three";

// --------------------------

// module

// --------------------------
import { Simulation } from "./Simulation";
import { TextureLoad } from "./utility/TextureLoad";

// --------------------------

// shader

// --------------------------
import fragmentShader from "../../shaders/frag/cube.glsl";
import vertexShader from "../../shaders/vert/cube.glsl";

export class Mesh {
  constructor(body, params, bool, stage) {
    this.body = body;
    this.stage = stage;
    this.params = params;
    this.bool = bool;

    this.simulation = null;
    this.mesh = null;

    this.config = {
      box: {
        x: 0.75,
        y: 0.75,
        z: 0.75,
      },
      size: {
        w: 16,
        h: 16,
      },
      amount: 0,
    };
    this.config.amount = this.config.size.w * this.config.size.h;

    this.isOnce = false;

    this.init();
  }

  init() {
    // 範囲ランダム生成
    const random = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    const WIDTH = this.config.size.w;
    const HEIGTH = this.config.size.h;
    const AMOUNT = this.config.amount;

    this.simulation = new Simulation(this.stage.renderer, WIDTH, HEIGTH);

    const uvList = [];
    const randomList = [];
    for (let i = 0; i < WIDTH; i++) {
      for (let j = 0; j < HEIGTH; j++) {
        uvList.push(i / WIDTH, j / HEIGTH);
        randomList.push(random(0, 1), random(0, 1));
      }
    }

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    geometry.setAttribute("aUv", new THREE.InstancedBufferAttribute(new Float32Array(uvList), 2));
    geometry.setAttribute("aRand2d", new THREE.InstancedBufferAttribute(new Float32Array(randomList), 2));

    const material = new THREE.ShaderMaterial({
      fragmentShader: fragmentShader,
      vertexShader: vertexShader,
      uniforms: {
        uTime: { type: "f", value: 0.0 },
        uProgress: { type: "f", value: 0.0 },
        uCubeScale: {
          type: "v3",
          value: new THREE.Vector3(this.config.box.x, this.config.box.y, this.config.box.z),
        },
        uPositionTexture: { type: "t", value: null },
        // uPositionBeforeTexture: { type: "t", value: null },
        uMapTexture: {
          type: "t",
          value: TextureLoad("assets/img/texture/map.webp"),
        },
        uScale: {
          type: "f",
          value: 0.0,
        },

        // fog
        uEyePosition: { type: "v3", value: this.stage.camera.position },
        uFogStart: { type: "f", value: 0.5 },
        uFogEnd: { type: "f", value: 1.0 },
        uFogColor: {
          type: "v3",
          value: new THREE.Color(this.stage.scene.background),
        },
      },
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
      blending: THREE.NormalBlending,
    });

    this.mesh = new THREE.InstancedMesh(geometry, material, AMOUNT);

    const matrix = new THREE.Matrix4();
    const dummy = new THREE.Object3D();
    for (let i = 0; i < AMOUNT; i++) {
      dummy.rotation.setFromVector3(new THREE.Vector3().random().multiplyScalar(Math.PI));
      dummy.updateMatrix();
      matrix.setPosition(0, 0, 0);
      this.mesh.setMatrixAt(i, dummy.matrix);
    }

    this.stage.scene.add(this.mesh);

    // debug
    if (GUI != null) {
      console.log(this.mesh.material);
      const bool = {
        isCheckBlending: false,
      };
      const InstancedMesh = GUI.addFolder("InstancedMesh");
      InstancedMesh.add(bool, "isCheckBlending")
        .name("MultiplyBlending")
        .onChange((value) => {
          this.mesh.material.blending = value ? 4 : 1;
        });
      InstancedMesh.add(this.mesh.material.uniforms.uProgress, "value", 0.0, 1.0)
        .name("uProgress")
        .onChange((value) => {
          this.mesh.material.uniforms.uProgress.value = value;
        });
    }
  }

  resize(props) {
    // this.bool.isMatchMediaWidth = props.isMatchMediaWidth;
    // this.params.w = props.w;
    // this.params.h = props.h;
    // this.params.aspect = props.aspect;
    // this.params.shorter = props.shorter;
    // this.params.longer = props.longer;
  }

  raf(time) {
    if (this.mesh != null && this.simulation != null) {
      this.simulation.raf(time);

      this.mesh.material.uniforms.uTime.value = time;
      this.mesh.material.uniforms.uPositionTexture.value = this.simulation.gpuCompute.getCurrentRenderTarget(this.simulation.position).texture;
      // this.mesh.material.uniforms.uPositionBeforeTexture.value =
      //   this.simulation.gpuCompute.getAlternateRenderTarget(
      //     this.simulation.position
      //   ).texture;

      // const add = 0.001;
      // this.mesh.rotation.x += add;
      // this.mesh.rotation.y += add;
      // this.mesh.rotation.z += add;

      if (!this.isOnce) {
        this.isOnce = true;
        this.body.classList.add("is-enter");

        GSAP.to(this.mesh.material.uniforms.uScale, {
          duration: 6,
          value: 1.0,
          ease: "power4.out",
        });
      }
    }
  }
}
