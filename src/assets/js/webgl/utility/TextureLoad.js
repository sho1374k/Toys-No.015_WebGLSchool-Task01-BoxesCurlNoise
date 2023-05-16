import * as THREE from "three";

export function TextureLoad(src) {
  const texture = new THREE.TextureLoader().load(src);
  texture.encoding = THREE.sRGBEncoding;
  return texture;
}
