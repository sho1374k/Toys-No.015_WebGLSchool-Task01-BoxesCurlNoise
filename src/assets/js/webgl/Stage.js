import * as THREE from "three";

export class Stage {
  constructor(params, bool) {
    // props
    this.params = params;
    this.bool = bool;

    // init
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.stats = null;

    this.setRenderer();
    this.setScene();
    this.setCamera();
  }

  updateRenderer() {
    if (this.renderer != null) {
      this.renderer.setSize(this.params.w, this.params.h);
      this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    }
  }

  setRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.updateRenderer();

    const wrap = document.getElementById("world");
    if (wrap) wrap.appendChild(this.renderer.domElement);
  }

  setScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("#ebfbff");
    if (GUI != null) {
      const scene = GUI.addFolder("scene");
      scene
        .addColor(this.scene, "background")
        .name("background")
        .onChange((value) => {
          this.scene.background = new THREE.Color(value);
        });
    }

    // SceneHelper
    if (MODE) {
      this.scene.add(new THREE.GridHelper(1000, 100));
      this.scene.add(new THREE.AxesHelper(100));
    }
  }

  updateCamera() {
    if (this.camera != null) {
      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
      this.camera.aspect = this.params.w / this.params.h;
      this.camera.position.x = 0;
      this.camera.position.y = 0;
      this.camera.position.z = 16;
      this.camera.far = this.configCamera.far;
      this.camera.updateProjectionMatrix();
    }
  }

  setCamera() {
    this.configCamera = {
      fov: 60,
      aspect: this.params.w / this.params.h,
      near: 0.01,
      far: 100,
      // far: (this.params.h * 0.5) / Math.tan(60 * 0.5 * (Math.PI / 180)),
    };

    this.camera = new THREE.PerspectiveCamera(this.configCamera.fov, this.configCamera.aspect, this.configCamera.near, this.configCamera.far);

    this.updateCamera();
  }

  raf() {
    if (this.renderer != null) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  resize(props) {
    this.bool.isMatchMediaWidth = props.isMatchMediaWidth;
    this.params.w = props.w;
    this.params.h = props.h;
    this.params.aspect = props.aspect;
    this.params.shorter = props.shorter;
    this.params.longer = props.longer;

    this.updateRenderer();
    this.updateCamera();
  }
}
