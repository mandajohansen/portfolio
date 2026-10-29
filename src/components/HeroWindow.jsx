import { useEffect, useState } from 'react';

// The animated app window in the front-page hero.
// It loops through the four steps of a project, each drawing itself in while a cursor works on it.
// To change how long each step shows, change SCENE_MS (the CSS reads it, so they stay in sync).
const SCENE_MS = 5200;

// `file` is the name in the window's title bar, `label` the step in the side list.
const SCENES = [
  { id: 'research', label: 'Research', file: 'literature-review' },
  { id: 'design', label: 'Design', file: 'hierarchy.fig' },
  { id: 'test', label: 'Test', file: 'interviews-and-survey' },
  { id: 'iterate', label: 'Iterate', file: 'v3-build' },
];

// The start delay of an animated element, in seconds.
const at = (d) => ({ '--d': `${d}s` });

// For .hw-shift: the element starts in colour `from` and changes to its own colour at `t` seconds.
const shift = (t, from) => ({ '--t': `${t}s`, '--from': from });

// A text line drawn as a rounded bar.
function Bar({ x, y, w, h = 5, c = 'line', d, anim = 'gx' }) {
  return <rect className={`hw-${anim} hw-c-${c}`} style={at(d)} x={x} y={y} width={w} height={h} rx={h / 2} />;
}

// A circle that flashes where the cursor clicks.
function Click({ x, y, d }) {
  return <circle className="hw-ripple" style={at(d)} cx={x} cy={y} r="11" />;
}

// The mouse pointer. `end` is where it rests when motion is turned off.
function Cursor({ scene, end }) {
  return (
    <g className={`hw-cursor hw-cursor--${scene}`} transform={`translate(${end})`}>
      <path d="M0 0v17l4.6-4.2 3.2 6.8 2.8-1.3-3.1-6.6h6.3z" />
    </g>
  );
}

// A round profile picture for the interview chat.
function Avatar({ x, y, c, d }) {
  return (
    <g className="hw-pop" style={at(d)}>
      <circle className={`hw-c-${c}`} cx={x} cy={y} r="11" />
      <circle className="hw-c-white" cx={x} cy={y - 3} r="3.6" />
      <path className="hw-c-white" d={`M${x - 6.5} ${y + 7}a6.5 5.5 0 0 1 13 0z`} />
    </g>
  );
}

// 1. Research: search the literature, open a peer-reviewed paper, highlight the key finding and cite it.
function Research() {
  return (
    <>
      {/* Search bar */}
      <g className="hw-up" style={at(0)}>
        <rect className="hw-phone" x="20" y="20" width="132" height="22" rx="11" />
        <circle className="hw-stroke" cx="33" cy="30" r="4" />
        <path className="hw-stroke" d="M36 33l3.5 3.5" />
      </g>
      <Bar x={46} y={29} w={70} h={4} c="muted" d={1} />

      {/* Search results: papers with a "peer-reviewed" tag */}
      {[0, 1, 2].map((i) => {
        const y = 52 + i * 54;
        return (
          <g key={i} className="hw-up" style={at(1.2 + i * 0.15)}>
            <rect
              className={i === 0 ? 'hw-phone hw-shift hw-c-blue' : 'hw-phone'}
              style={i === 0 ? shift(1.9, 'var(--white)') : undefined}
              x="20"
              y={y}
              width="132"
              height="46"
              rx="8"
            />
            <rect className="hw-c-peach" x="30" y={y + 10} width="18" height="24" rx="2" />
            <rect className="hw-c-ink" x="56" y={y + 11} width={74 - i * 10} height="5" rx="2.5" />
            <rect className="hw-c-line" x="56" y={y + 21} width="50" height="4" rx="2" />
            <rect className="hw-c-sage" x="56" y={y + 31} width="36" height="7" rx="3.5" />
          </g>
        );
      })}

      {/* The opened paper */}
      <rect className="hw-up hw-phone" style={at(2)} x="166" y="20" width="176" height="204" rx="8" />
      <Bar x={180} y={34} w={112} h={7} c="ink" d={2.15} anim="up" />
      <Bar x={180} y={47} w={70} h={4} c="muted" d={2.2} anim="up" />
      <rect className="hw-gx hw-c-yellow" style={at(2.6)} x="177" y="113" width="126" height="11" rx="2" />
      <rect className="hw-gx hw-c-yellow" style={at(3.5)} x="177" y="149" width="112" height="11" rx="2" />
      {[
        [64, 140],
        [74, 132],
        [84, 100],
        [104, 150],
        [116, 120],
        [128, 146],
        [140, 136],
        [152, 104],
        [164, 140],
      ].map(([y, w]) => (
        <Bar key={y} x={180} y={y} w={w} h={4} d={2.25 + (y - 64) / 400} anim="up" />
      ))}

      <g className="hw-pop" style={at(3.8)}>
        <rect className="hw-c-peach" x="180" y="192" width="80" height="20" rx="10" />
        <text className="hw-quote" x="220" y="205.5" textAnchor="middle">
          Key finding
        </text>
      </g>
      <g className="hw-pop" style={at(4)}>
        <rect className="hw-c-accent" x="276" y="192" width="56" height="20" rx="10" />
        <text className="hw-label hw-label--light" x="304" y="205" textAnchor="middle">
          [1] cited
        </text>
      </g>

      <Click x={60} y={31} d={0.9} />
      <Click x={80} y={78} d={1.85} />
      <Cursor scene="research" end="318,226" />
    </>
  );
}

// One layout on a screen: picture, heading (H1), subheading (H2), body text and a button.
// `s` is the screen's layout: where each part sits and how big it is.
function Layout({ s, d }) {
  return (
    <>
      <rect className="hw-pop hw-c-blue" style={at(d)} {...s.image} rx={s.r} />
      <rect className="hw-gx hw-c-ink" style={at(d + 0.08)} {...s.h1} rx={s.h1.height / 2.6} />
      <rect className="hw-gx hw-c-muted" style={at(d + 0.15)} {...s.h2} rx={s.h2.height / 2} />
      {s.body.map((line, i) => (
        <rect key={i} className="hw-gx hw-c-line" style={at(d + 0.2 + i * 0.04)} {...line} rx={line.height / 2} />
      ))}
      <rect className="hw-pop hw-c-accent" style={at(d + 0.3)} {...s.button} rx={s.button.height / 2} />
    </>
  );
}

const SCREENS = {
  desktop: {
    r: 5,
    image: { x: 130, y: 52, width: 42, height: 64 },
    h1: { x: 28, y: 56, width: 90, height: 10 },
    h2: { x: 28, y: 73, width: 62, height: 6 },
    body: [
      { x: 28, y: 87, width: 80, height: 4 },
      { x: 28, y: 95, width: 72, height: 4 },
      { x: 28, y: 103, width: 76, height: 4 },
    ],
    button: { x: 28, y: 117, width: 44, height: 12 },
  },
  tablet: {
    r: 4,
    image: { x: 206, y: 36, width: 72, height: 34 },
    h1: { x: 206, y: 78, width: 58, height: 8 },
    h2: { x: 206, y: 92, width: 42, height: 5 },
    body: [
      { x: 206, y: 103, width: 70, height: 4 },
      { x: 206, y: 110, width: 62, height: 4 },
      { x: 206, y: 117, width: 66, height: 4 },
    ],
    button: { x: 206, y: 130, width: 46, height: 11 },
  },
  phone: {
    r: 3,
    image: { x: 306, y: 58, width: 36, height: 22 },
    h1: { x: 306, y: 86, width: 30, height: 6 },
    h2: { x: 306, y: 96, width: 22, height: 4 },
    body: [
      { x: 306, y: 105, width: 34, height: 3 },
      { x: 306, y: 111, width: 28, height: 3 },
    ],
    button: { x: 306, y: 124, width: 36, height: 9 },
  },
};

// 2. Design: the same page on desktop, tablet and phone, with a type scale that keeps the hierarchy.
function Design() {
  return (
    <>
      {/* Desktop, tablet and phone */}
      <g className="hw-up" style={at(0.2)}>
        <rect className="hw-phone" x="16" y="34" width="168" height="116" rx="8" />
        {[24, 30, 36].map((cx) => (
          <circle key={cx} className="hw-c-line" cx={cx} cy="41" r="1.8" />
        ))}
      </g>
      <Layout s={SCREENS.desktop} d={0.4} />
      <rect className="hw-up hw-phone" style={at(0.9)} x="196" y="24" width="92" height="132" rx="10" />
      <Layout s={SCREENS.tablet} d={1.05} />
      <rect className="hw-up hw-phone" style={at(1.5)} x="300" y="46" width="48" height="100" rx="9" />
      <Layout s={SCREENS.phone} d={1.62} />

      {[
        [100, '1440 px', 0.5],
        [242, '768 px', 1],
        [324, '375 px', 1.6],
      ].map(([x, label, d]) => (
        <text key={label} className="hw-up hw-label hw-label--muted" style={at(d)} x={x} y="168" textAnchor="middle">
          {label}
        </text>
      ))}

      {/* Type scale */}
      <rect className="hw-up hw-phone" style={at(2.1)} x="16" y="178" width="170" height="48" rx="10" />
      {[
        [30, 24, 'H1', 2.3],
        [82, 17, 'H2', 2.4],
        [126, 12, 'Body', 2.5],
      ].map(([x, size, label, d]) => (
        <g key={label} className="hw-up" style={at(d)}>
          <text className="hw-type" style={{ fontSize: size }} x={x} y="205">
            Aa
          </text>
          <text className="hw-label hw-label--muted" x={x} y="218">
            {label}
          </text>
        </g>
      ))}

      {/* Responsive: one design, every width */}
      <path className="hw-draw hw-connector hw-connector--strong" style={at(2.6)} pathLength="1" d="M204 202h136M204 202l5-4m-5 4 5 4M340 202l-5-4m5 4-5 4" />
      <g className="hw-pop" style={at(2.8)}>
        <rect className="hw-c-white hw-pill" x="241" y="193" width="62" height="18" rx="9" />
        <text className="hw-label hw-label--accent" x="272" y="205" textAnchor="middle">
          Responsive
        </text>
      </g>

      {/* Clicking H1 outlines the heading on every screen */}
      {[
        [25, 53, 96, 16],
        [203, 75, 64, 14],
        [303, 83, 36, 12],
      ].map(([x, y, w, h], i) => (
        <rect
          key={x}
          className="hw-draw hw-outline"
          style={at(3.2 + i * 0.1)}
          pathLength="1"
          x={x}
          y={y}
          width={w}
          height={h}
          rx="3"
        />
      ))}

      <Click x={40} y={198} d={2.95} />
      <Cursor scene="design" end="150,230" />
    </>
  );
}

// 3. Test: an interview chat on the left, a survey answered on the right and the results coming in.
function Test() {
  return (
    <>
      {/* Interview */}
      <rect className="hw-up hw-phone" style={at(0)} x="16" y="16" width="150" height="208" rx="10" />
      <circle className="hw-pop hw-c-accent hw-rec" style={at(0.2)} cx="30" cy="31" r="4" />
      <Bar x={40} y={29} w={54} h={5} c="ink" d={0.2} />

      <Avatar x={34} y={66} c="peach" d={0.4} />
      <g className="hw-pop" style={at(0.55)}>
        <rect className="hw-c-cream" x="50" y="53" width="104" height="26" rx="8" />
        <rect className="hw-c-line" x="58" y="60" width="72" height="4" rx="2" />
        <rect className="hw-c-line" x="58" y="68" width="48" height="4" rx="2" />
      </g>

      <Avatar x={148} y={108} c="sage" d={1} />
      <g className="hw-pop" style={at(1.1)}>
        <rect className="hw-c-blue" x="28" y="95" width="106" height="26" rx="8" />
        <rect className="hw-c-white" x="36" y="102" width="76" height="4" rx="2" />
        <rect className="hw-c-white" x="36" y="110" width="54" height="4" rx="2" />
      </g>

      <Avatar x={34} y={152} c="peach" d={2.9} />
      <g className="hw-pop" style={at(3)}>
        <rect className="hw-c-peach" x="50" y="137" width="106" height="30" rx="8" />
        <text className="hw-quote" x="60" y="156">
          “So easy to use!”
        </text>
      </g>
      <Bar x={28} y={186} w={118} h={4} d={3.4} />
      <Bar x={28} y={196} w={84} h={4} d={3.5} />

      {/* Survey: a 1 to 5 scale */}
      <rect className="hw-up hw-phone" style={at(0.3)} x="178" y="16" width="166" height="100" rx="10" />
      <Bar x={192} y={30} w={96} h={6} c="ink" d={0.5} />
      <Bar x={192} y={42} w={64} h={4} d={0.6} />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} className="hw-pop" style={at(0.7 + i * 0.06)}>
          <circle
            className={i === 3 ? 'hw-scale hw-shift hw-c-accent' : 'hw-scale'}
            style={i === 3 ? shift(1.95, 'var(--white)') : undefined}
            cx={200 + i * 30}
            cy="70"
            r="9"
          />
        </g>
      ))}
      <Bar x={192} y={90} w={22} h={3} d={0.9} />
      <Bar x={308} y={90} w={22} h={3} d={0.9} />

      {/* Results */}
      <rect className="hw-up hw-phone" style={at(2.3)} x="178" y="124" width="166" height="100" rx="10" />
      <Bar x={192} y={138} w={60} h={5} c="ink" d={2.4} anim="up" />
      {[
        [154, 80, 'peach'],
        [172, 108, 'accent'],
        [190, 56, 'sage'],
      ].map(([y, w, c], i) => (
        <g key={y}>
          <Bar x={192} y={y} w={22} h={4} d={2.5} anim="up" />
          <Bar x={222} y={y - 1.5} w={w} h={7} c={c} d={2.6 + i * 0.12} />
        </g>
      ))}

      <Click x={290} y={70} d={1.9} />
      <Cursor scene="test" end="326,228" />
    </>
  );
}

// 4. Iterate: sketch, wireframe and build, refined round after round, with a loop back to the start.
function Iterate() {
  return (
    <>
      {/* v1: rough sketch */}
      <g className="hw-pop" style={at(0.2)}>
        <rect className="hw-sketch hw-c-cream" x="24" y="48" width="96" height="136" rx="8" />
        <rect className="hw-sketch" x="36" y="60" width="72" height="40" rx="3" />
        <path className="hw-sketch" d="M36 60l72 40M108 60l-72 40" />
        <path className="hw-sketch" d="M36 114q9-5 18 0t18 0t18 0M36 126q9-5 18 0t18 0" />
        <rect className="hw-sketch" x="36" y="156" width="52" height="14" rx="7" />
      </g>
      <path className="hw-draw hw-connector hw-connector--strong" style={at(0.9)} pathLength="1" d="M122 116h8m-4-4 4 4-4 4" />

      {/* v2: wireframe */}
      <g className="hw-pop" style={at(1.1)}>
        <rect className="hw-phone" x="132" y="48" width="96" height="136" rx="8" />
        <rect className="hw-c-line" x="144" y="60" width="72" height="40" rx="4" />
        <rect className="hw-c-line" x="144" y="110" width="56" height="5" rx="2.5" />
        <rect className="hw-c-line" x="144" y="120" width="40" height="4" rx="2" />
        <rect className="hw-c-cream" x="144" y="132" width="34" height="16" rx="4" />
        <rect className="hw-c-cream" x="182" y="132" width="34" height="16" rx="4" />
        <rect className="hw-c-line" x="144" y="156" width="72" height="14" rx="7" />
      </g>
      <path className="hw-draw hw-connector hw-connector--strong" style={at(1.9)} pathLength="1" d="M230 116h8m-4-4 4 4-4 4" />

      {/* v3: the built version, with a check that it works */}
      <g className="hw-pop" style={at(2.1)}>
        <rect className="hw-phone" x="240" y="48" width="96" height="136" rx="8" />
        <rect className="hw-c-blue" x="252" y="60" width="72" height="40" rx="4" />
        <circle className="hw-c-peach" cx="312" cy="72" r="5" />
        <rect className="hw-c-ink" x="252" y="110" width="56" height="6" rx="3" />
        <rect className="hw-c-line" x="252" y="121" width="64" height="4" rx="2" />
        <rect className="hw-c-peach" x="252" y="132" width="34" height="16" rx="4" />
        <rect className="hw-c-yellow" x="290" y="132" width="34" height="16" rx="4" />
        <rect className="hw-c-accent" x="252" y="156" width="72" height="14" rx="7" />
      </g>
      <g className="hw-pop" style={at(2.9)}>
        <circle className="hw-c-chosen" cx="334" cy="50" r="10" />
        <path className="hw-draw hw-tick hw-tick--light" style={at(3.05)} pathLength="1" d="M329.5 50l3 3 6-6" />
      </g>

      {[
        [72, 'v1 · Sketch', 0.3],
        [180, 'v2 · Wireframe', 1.2],
        [288, 'v3 · Build', 2.2],
      ].map(([x, label, d]) => (
        <text key={label} className="hw-up hw-label" style={at(d)} x={x} y="202" textAnchor="middle">
          {label}
        </text>
      ))}

      {/* Loop back for the next round */}
      <path
        className="hw-draw hw-scribble"
        style={at(3.3)}
        pathLength="1"
        d="M288 42C272 12 88 12 72 42m0 0-6-9m6 9 9-5"
      />
      <g className="hw-pop" style={at(3.9)}>
        <rect className="hw-c-white hw-pill" x="150" y="11" width="60" height="17" rx="8.5" />
        <text className="hw-label hw-label--accent" x="180" y="22.5" textAnchor="middle">
          Round 3
        </text>
      </g>

      <Click x={180} y={163} d={1.6} />
      <Cursor scene="iterate" end="330,226" />
    </>
  );
}

const DRAW = { research: Research, design: Design, test: Test, iterate: Iterate };

export default function HeroWindow() {
  const [index, setIndex] = useState(0);
  const [still, setStill] = useState(false);

  useEffect(() => {
    // With reduced motion the window shows one finished step and stays put.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setStill(true);
      setIndex(1);
      return undefined;
    }
    const timer = setInterval(() => setIndex((i) => (i + 1) % SCENES.length), SCENE_MS);
    return () => clearInterval(timer);
  }, []);

  const scene = SCENES[index];
  const Scene = DRAW[scene.id];

  return (
    <div className="hw-stage">
      <div
        className={`hw${still ? ' hw--still' : ''}`}
        style={{ '--scene': `${SCENE_MS}ms` }}
        role="img"
        aria-label="Animation of a design project going through research, design, testing and iteration"
      >
        <div className="hw__bar" aria-hidden="true">
          <span className="hw__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="hw__file" key={scene.file}>
            {scene.file}
          </span>
        </div>

        <div className="hw__body" aria-hidden="true">
          <ol className="hw__steps">
            {SCENES.map((s, i) => (
              <li key={s.id} className={i === index ? 'is-active' : undefined}>
                <span className="hw__num" style={{ '--c': `var(--step-${i + 1})` }}>
                  {i + 1}
                </span>
                {s.label}
                {i === index && <span className="hw__progress" />}
              </li>
            ))}
          </ol>

          {/* `key` restarts every animation when the step changes */}
          <svg key={scene.id} className="hw__canvas" viewBox="0 0 360 240">
            <Scene />
          </svg>
        </div>
      </div>
    </div>
  );
}
