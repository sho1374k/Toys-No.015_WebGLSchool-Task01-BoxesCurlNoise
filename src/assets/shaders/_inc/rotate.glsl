// ふぉくるさん: https://qiita.com/nemutas/items/5b72de3ab7870cf2f414
vec3 rotateX(vec3 v, float angle){
  float s = sin(angle);
  float c = cos(angle);
  return vec3(
    v.x,
    c * v.y + -s * v.z,
    s * v.y + c * v.z
  );
}

vec3 rotateY(vec3 v, float angle){
  float s = sin(angle);
  float c = cos(angle);
  return vec3(
    c * v.x + s * v.z,
    v.y,
    -s * v.x + c * v.z
  );
}

vec3 rotateZ(vec3 v, float angle){
  float s = sin(angle);
  float c = cos(angle);
  return vec3(
    c * v.x + -s * v.y,
    s * v.x + c * v.y,
    v.z
  );
}