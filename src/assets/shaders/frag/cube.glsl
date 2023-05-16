varying vec2 vUv;
varying vec2 vRand2d;

uniform sampler2D uMapTexture;

// fog
uniform vec3 uFogColor;
varying float vFogFactor;

const vec3 WHITE = vec3(1.0);

void main() {
	vec4 texture = texture2D(uMapTexture, vUv);
	vec3 uvColor = vec3(vUv, 1.0);
	vec3 mixColor = mix(uvColor, WHITE, .9);
	vec3 color = texture.rgb + mixColor;
	color.r = color.r - vRand2d.x;
	color.g = color.g - vRand2d.y;

	color = mix(uFogColor, color, vFogFactor);

	gl_FragColor = vec4(color, 1.0);
}