// Full-screen neon fog. The vertex shader emits clip-space positions directly
// (planeGeometry args [2,2] -> positions span -1..1) so the quad fills the
// viewport regardless of the camera.
export const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`

export const fragmentShader = /* glsl */ `
  precision highp float;

  varying vec2 vUv;

  uniform float uTime;
  uniform vec2  uResolution;
  uniform vec2  uMouse;   // 0..1, origin top-left
  uniform float uScroll;  // 0..1 page progress
  uniform float uMotion;  // 0 = frozen (reduced motion), 1 = full

  // --- value noise + fbm ------------------------------------------------
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 5; i++) {
      v += amp * noise(p);
      p *= 2.0;
      amp *= 0.5;
    }
    return v;
  }

  void main() {
    float aspect = uResolution.x / max(uResolution.y, 1.0);
    vec2 p = vUv;
    p.x *= aspect;

    float t = uTime * 0.04 * uMotion;

    // domain-warped flowing fog
    vec2 q = vec2(fbm(p * 1.6 + t), fbm(p * 1.6 + vec2(5.2, 1.3) - t));
    float f = fbm(p * 1.6 + q * 1.4 + vec2(0.0, uScroll * 1.6));
    f = pow(clamp(f, 0.0, 1.0), 1.4);

    // neon palette ramp (cyan -> magenta -> lime), drifting with scroll
    vec3 cyan    = vec3(0.024, 0.714, 0.831);
    vec3 magenta = vec3(0.878, 0.094, 0.784);
    vec3 lime    = vec3(0.608, 0.965, 0.039);

    float ramp = f + uScroll * 0.35;
    vec3 col = mix(cyan, magenta, smoothstep(0.15, 0.6, ramp));
    col = mix(col, lime, smoothstep(0.55, 0.95, f * 0.85 + sin(t + uScroll * 6.2831) * 0.12));

    // pointer glow
    vec2 m = uMouse;
    m.y = 1.0 - m.y; // uv origin is bottom-left here
    m.x *= aspect;
    float d = distance(p, m);
    float glow = exp(-d * 3.2) * 0.55;
    col += glow * mix(cyan, magenta, clamp(uMouse.x, 0.0, 1.0));

    // concentrate brightness into neon filaments
    float bright = pow(f, 2.0);
    col *= 0.28 + bright * 1.5;

    // vignette keeps edges dark for text contrast
    float vig = smoothstep(1.25, 0.25, length(vUv - 0.5) * 1.6);
    col *= vig;

    // film grain
    col += (hash(vUv * uResolution.xy * 0.5 + t) - 0.5) * 0.05;

    col = max(col, vec3(0.0));
    gl_FragColor = vec4(col, 1.0);
  }
`
