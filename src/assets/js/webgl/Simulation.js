import { GPUComputationRenderer } from "three/examples/jsm/misc/GPUComputationRenderer.js";
import positionFragmentShader from "../../shaders/frag/position.glsl";

export class Simulation {
  constructor(renderer, w, h) {
    this.renderer = renderer;
    this.w = w;
    this.h = h;

    this.init();
  }

  init() {
    // Step.01
    // 引数：オフスクリーンレンダリングで使用する | EX) WebGLRenderTarget
    this.gpuCompute = new GPUComputationRenderer(this.w, this.h, this.renderer);

    // Step.02
    // テクスチャ作成
    const texture = this.gpuCompute.createTexture();
    const textureArray = texture.image.data;

    // 範囲ランダム生成
    const random = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    /* --------------------------

    【 三角関数: https://ics.media/entry/10657/ 】
    phi: xθ(緯度)
    theta: yθ(経度)
    x座標 = 半径 * Cosθ * Cosθ
    y座標 = 半径 * Sinθ
    z座標 = 半径 * Cosθ * Sinθ

    -------------------------- */
    for (let i = 0; i < textureArray.length; i += 4) {
      const phi = Math.random() * 2 * Math.PI; // 緯度
      const theta = Math.random() * Math.PI; // 経度

      const radius = random(3, 5); // ラジアン(半径)

      const x = radius * Math.cos(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi);
      const z = radius * Math.cos(phi) * Math.sin(theta);

      const w = random(0, 1); // life: 寿命

      textureArray[i + 0] = x;
      textureArray[i + 1] = y;
      textureArray[i + 2] = z;
      textureArray[i + 3] = w;
    }

    // Step.03
    // データ格納用のオブジェクト生成
    // 引数：速度, フラグメント, テクスチャ
    this.position = this.gpuCompute.addVariable(
      "positionTexture", // ライブラリがuniform値としてshaderに渡してくれるテクスチャの名称になる
      positionFragmentShader,
      texture,
    );

    // Step.04
    // Step.03のテクスチャをshaderで扱えるように設定
    this.gpuCompute.setVariableDependencies(this.position, [this.position]);

    // uniform設定
    this.position.material.uniforms.uInitPositionTexture = {
      value: texture.clone(),
    };
    this.position.material.uniforms.uTime = { value: 0.0 };
    this.position.material.uniforms.uProgress = { value: 0.0 };

    // Step.05
    // WebGLRenderTargetのインスタンス生成(初期化)
    this.gpuCompute.init();
    // const error = this.gpuCompute.init();
    // if (error !== null) console.error(error);
  }

  raf(time) {
    // Step.06
    // テクスチャ更新
    this.gpuCompute.compute();

    // uniform更新
    this.position.material.uniforms.uTime.value = time;
  }
}
