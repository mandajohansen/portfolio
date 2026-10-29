import { useEffect, useState } from 'react';

// The animated app window in the front-page hero.
// It loops through the four steps of a project, each drawing itself in while a cursor works on it.
// To change how long each step shows, change SCENE_MS (the CSS reads it, so they stay in sync).
const SCENE_MS = 5200;

// `file` is the name in the window's title bar, `label` the step in the side list.
const SCENES = [
  { id: 'research', label: 'Research', file: 'literature-review' },
  { id: 'design', label: 'Design', file: 'components.fig' },
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

// A content card: picture on the left, title and two lines of text.
function ContentCard({ x, y }) {
  return (
    <>
      <rect className="hw-phone" x={x} y={y} width="76" height="40" rx="6" />
      <rect className="hw-c-blue" x={x + 6} y={y + 6} width="20" height="28" rx="3" />
      <rect className="hw-c-ink" x={x + 32} y={y + 10} width="36" height="4" rx="2" />
      <rect className="hw-c-line" x={x + 32} y={y + 18} width="28" height="3" rx="1.5" />
      <rect className="hw-c-line" x={x + 32} y={y + 25} width="32" height="3" rx="1.5" />
    </>
  );
}

// A spacing measurement: a short accent line with its value next to it.
function Measure({ path, x, y, value, d }) {
  return (
    <g>
      <path className="hw-draw hw-measure" style={at(d)} pathLength="1" d={path} />
      <text className="hw-up hw-label hw-label--accent hw-label--xs" style={at(d + 0.1)} x={x} y={y}>
        {value}
      </text>
    </g>
  );
}

// 2. Design: a screen is put together from a component library, with spacing set by auto layout.
function Design() {
  return (
    <>
      {/* Component library */}
      <rect className="hw-up hw-phone" style={at(0)} x="16" y="16" width="110" height="208" rx="10" />
      <text className="hw-up hw-label hw-label--muted" style={at(0.15)} x="28" y="33">
        Components
      </text>
      <g className="hw-up" style={at(0.3)}>
        <rect className="hw-c-cream" x="26" y="42" width="90" height="34" rx="6" />
        <rect className="hw-c-accent" x="36" y="53" width="44" height="12" rx="6" />
      </g>
      <g className="hw-up" style={at(0.4)}>
        <rect className="hw-c-cream" x="26" y="84" width="90" height="44" rx="6" />
        <ContentCard x={33} y={86} />
      </g>
      <g className="hw-up" style={at(0.5)}>
        <rect className="hw-c-cream" x="26" y="136" width="90" height="30" rx="6" />
        <rect className="hw-c-sage" x="36" y="147" width="26" height="8" rx="4" />
        <rect className="hw-c-peach" x="66" y="147" width="26" height="8" rx="4" />
      </g>
      <g className="hw-up" style={at(0.6)}>
        <rect className="hw-c-cream" x="26" y="174" width="90" height="38" rx="6" />
        {[42, 62, 82, 102].map((cx, i) => (
          <circle key={cx} className={i === 0 ? 'hw-c-accent' : 'hw-c-line'} cx={cx} cy="193" r="5" />
        ))}
      </g>

      {/* The screen being built */}
      <rect className="hw-up hw-phone" style={at(0.2)} x="170" y="16" width="100" height="208" rx="14" />
      <Bar x={182} y={32} w={50} h={7} c="ink" d={0.45} />
      <Bar x={182} y={44} w={34} h={4} c="muted" d={0.55} />
      <rect className="hw-pop hw-c-blue" style={at(0.65)} x="182" y="56" width="76" height="46" rx="6" />
      <rect className="hw-fade hw-slot" style={at(0.8)} x="182" y="110" width="76" height="40" rx="6" />
      <rect className="hw-pop hw-c-sage" style={at(3.3)} x="182" y="158" width="26" height="8" rx="4" />
      <rect className="hw-pop hw-c-peach" style={at(3.38)} x="212" y="158" width="26" height="8" rx="4" />
      <rect className="hw-pop hw-c-accent" style={at(3.5)} x="182" y="190" width="76" height="18" rx="9" />

      {/* The card dragged from the library: drawn where it lands, the animation brings it from the library */}
      <g className="hw-fade" style={at(0.45)}>
        <g className="hw-drag">
          <ContentCard x={182} y={110} />
        </g>
      </g>

      {/* Spacing from auto layout */}
      <Measure path="M250 103v6" x={254} y={109} value="8" d={2.95} />
      <Measure path="M250 151v6" x={254} y={157} value="8" d={3.05} />
      <Measure path="M171 130h10" x={172} y={126} value="12" d={3.15} />

      {/* Auto layout settings */}
      <rect className="hw-up hw-phone" style={at(0.3)} x="282" y="16" width="62" height="208" rx="10" />
      <text className="hw-up hw-label hw-label--muted" style={at(0.45)} x="290" y="33">
        Auto layout
      </text>
      {[
        ['Gap', '8', 0.6],
        ['Padding', '12', 0.7],
        ['Radius', '6', 0.8],
      ].map(([label, value, d], i) => (
        <g key={label} className="hw-up" style={at(d)}>
          <text className="hw-label hw-label--muted" x="290" y={56 + i * 30}>
            {label}
          </text>
          <rect className="hw-c-cream" x="290" y={61 + i * 30} width="46" height="14" rx="4" />
          <text className="hw-label" x="296" y={71 + i * 30}>
            {value}
          </text>
        </g>
      ))}

      <Click x={220} y={130} d={2.75} />
      <Cursor scene="design" end="300,226" />
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
