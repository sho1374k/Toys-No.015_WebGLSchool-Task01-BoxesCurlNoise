// --------------------------

// lib

// --------------------------
import { SetControls } from "./lib/SetControls";
import { SetStats } from "./lib/SetStats";
import { SetGui } from "./lib/SetGui";

// --------------------------

// module

// --------------------------
import { Stage } from "./Stage";
import { Mesh } from "./Mesh";

export class WebGL {
  constructor(body, params, bool) {
    // props
    this.body = body;
    this.params = params;
    this.bool = bool;

    // bool
    this.isInit = false;

    this.gui = null;
    this.stats = null;
    this.stage = null;
    this.mesh = null;
    this.controls = null;

    this.setModule();
  }

  setModule() {
    this.gui = new SetGui();
    this.stats = new SetStats(this.body);
    this.stage = new Stage(this.params, this.bool);
    this.mesh = new Mesh(this.body, this.params, this.bool, this.stage);
    this.controls = new SetControls(this.stage);
  }

  raf(time) {
    if (this.mesh != null) this.mesh.raf(time);
    if (this.stage != null) this.stage.raf();
    if (this.controls != null) this.controls.update();
    if (this.stats != null) this.stats.raf();
  }

  resize(props) {
    this.bool.isMatchMediaWidth = props.isMatchMediaWidth;
    this.params.w = props.w;
    this.params.h = props.h;
    this.params.aspect = props.aspect;
    this.params.shorter = props.shorter;
    this.params.longer = props.longer;
    if (this.mesh != null) this.mesh.resize(props);
    if (this.stage != null) this.stage.resize(props);
  }

  init() {
    console.log("🚀 ~ WebGL");
  }
}
