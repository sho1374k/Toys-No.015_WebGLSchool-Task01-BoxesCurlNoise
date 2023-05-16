attribute vec2 aUv;
attribute vec2 aRand2d;

varying vec2 vUv;
varying vec2 vRand2d;

uniform float uTime;
uniform float uProgress;
uniform float uScale;
uniform vec3 uCubeScale;
uniform sampler2D uPositionTexture;
// uniform sampler2D uPositionBeforeTexture;

// fog
varying float vFogFactor;
uniform vec3 uEyePosition;
uniform float uFogStart;
uniform float uFogEnd;

// fog
const float fogNear = 0.1;
const float fogFar  = 50.0;
const float fogLinerDepth = 1.0 / (fogFar - fogNear);

const float ENHANCE = 10.;

#include '../_inc/rotate.glsl'

void main() {
	vUv = uv;
	vRand2d = aRand2d;

	vec4 currentTexture = texture2D(uPositionTexture, aUv);
	// vec4 oldTextrue = texture2D(uPositionBeforeTexture, aUv);

	float alpha = currentTexture.a;
	float alphaEnhance = alpha * ENHANCE;
	float scale = clamp(alphaEnhance - 1., 0.0, 1.0);

	float csx = uCubeScale.x;
	float csy = uCubeScale.y;
	float csz = uCubeScale.z;

	float delay = vRand2d.x * 10.;
	float duration = (delay * -1.) + (delay * uScale) + uScale;
	float progress = clamp(duration, 0.0, 1.0);

	vec3 pos = position;
	pos = rotateX(pos, uTime * -1.);
  pos = rotateY(pos, uTime);
  pos = rotateZ(pos, uTime * -1.);
	pos *= vec3(
		(csx + (alpha / csx)) * progress,
		(csy + (alpha / csy)) * progress,
		(csz + (alpha / csz)) * progress
	);
	pos *= clamp(1.0 - currentTexture.w, 0.0, 1.0);

	vec4 instanceMatrixPosition = instanceMatrix * vec4(pos * scale, 1.0);
	vec3 lastPosition = currentTexture.xyz + instanceMatrixPosition.xyz;
	vec4 mvPosition = modelViewMatrix * vec4(lastPosition, 1.0);

  float fogLinerPos = length(uEyePosition - mvPosition.xyz) * fogLinerDepth;
  vFogFactor = clamp((uFogEnd - fogLinerPos) / (uFogEnd - uFogStart), 0.0, 1.0);

	gl_Position = projectionMatrix * mvPosition;
}