uniform float uTime;
uniform float uProgress;
uniform sampler2D uInitPositionTexture;

const float SPEED = 0.1;

#include '../_inc/simplex3d.glsl'
#include '../_inc/curl3d.glsl'

void main()	{
	vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 posTexture = texture2D(positionTexture, uv);
	vec3 pos = posTexture.xyz;

	float life = posTexture.w;
  life += 0.00225;
  if(life > 1.0) {
		vec4 initPosTexture = texture2D(uInitPositionTexture, uv);
		pos = initPosTexture.xyz;
		life = 0.0;
  };

  pos += curlNoise(pos * (0.1)) * SPEED;

	gl_FragColor = vec4(pos, life );
}