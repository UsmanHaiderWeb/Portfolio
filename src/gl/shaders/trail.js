// Cursor trail: a ring buffer of recent pointer positions drawn as additive
// glowing points. Positions are already in clip space (-1..1); aAge runs 0 at
// the head (newest) to 1 at the tail (oldest).
export const vertexShader = /* glsl */ `
  attribute float aAge;
  varying float vAge;

  uniform float uDpr;
  uniform float uSize;

  void main() {
    vAge = aAge;
    gl_Position = vec4(position.xy, 0.0, 1.0);
    // head is largest, tail shrinks to nothing
    gl_PointSize = uSize * uDpr * (1.0 - aAge);
  }
`

export const fragmentShader = /* glsl */ `
  precision highp float;

  varying float vAge;

  uniform vec3  uColorA; // head colour
  uniform vec3  uColorB; // tail colour
  uniform float uHover;  // 0..1 brightens on interactive hover

  void main() {
    // soft round point
    float d = length(gl_PointCoord - 0.5);
    float alpha = smoothstep(0.5, 0.0, d);
    alpha *= (1.0 - vAge); // fade the tail out

    vec3 col = mix(uColorA, uColorB, vAge);
    col += uHover * 0.6;

    gl_FragColor = vec4(col, alpha);
  }
`
