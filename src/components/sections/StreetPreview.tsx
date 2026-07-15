type HousingVisual = {
  floors: number
  units: number
  width: number
  roof: 'gable' | 'flat'
  groundRetail?: boolean
  setback?: boolean
}

type ContextVisual = {
  roof: 'gable' | 'flat' | 'mixed'
  awning: boolean
  trees: boolean
}

const housingVisuals: Record<string, HousingVisual> = {
  duplex: { floors: 1, units: 2, width: 120, roof: 'gable' },
  fourplex: { floors: 2, units: 4, width: 150, roof: 'gable' },
  townhomes: { floors: 2, units: 4, width: 190, roof: 'gable' },
  adu: { floors: 1, units: 1, width: 56, roof: 'gable', setback: true },
  mixed: { floors: 3, units: 3, width: 150, roof: 'flat', groundRetail: true },
}

const contextVisuals: Record<string, ContextVisual> = {
  residential: { roof: 'gable', awning: false, trees: true },
  commercial: { roof: 'flat', awning: true, trees: false },
  transitional: { roof: 'mixed', awning: false, trees: true },
  mixedstreet: { roof: 'flat', awning: true, trees: false },
  pedestrian: { roof: 'gable', awning: false, trees: true },
  mainstreet: { roof: 'flat', awning: true, trees: true },
}

const GROUND_Y = 176
const FLOOR_H = 24

function Building({
  x,
  width,
  floors,
  roof,
  units,
  groundRetail,
  fillClass,
  roofClass,
  windowClass,
  muted,
}: {
  x: number
  width: number
  floors: number
  roof: 'gable' | 'flat'
  units: number
  groundRetail?: boolean
  fillClass: string
  roofClass: string
  windowClass: string
  muted?: boolean
}) {
  const bodyH = floors * FLOOR_H
  const top = GROUND_Y - bodyH
  const roofH = roof === 'gable' ? Math.min(26, width * 0.16) : 6
  const unitW = width / units

  return (
    <g>
      {roof === 'gable' ? (
        <polygon
          points={`${x},${top} ${x + width / 2},${top - roofH} ${x + width},${top}`}
          className={roofClass}
        />
      ) : (
        <rect x={x - 2} y={top - roofH} width={width + 4} height={roofH} className={roofClass} rx="1" />
      )}

      <rect x={x} y={top} width={width} height={bodyH} className={fillClass} />

      {Array.from({ length: units - 1 }).map((_, i) => (
        <line
          key={i}
          x1={x + unitW * (i + 1)}
          y1={top}
          x2={x + unitW * (i + 1)}
          y2={GROUND_Y}
          className={muted ? 'stroke-white/25' : 'stroke-white/40'}
          strokeWidth="1"
        />
      ))}

      {Array.from({ length: floors }).map((_, floorIdx) => {
        const isGround = floorIdx === floors - 1
        const wy = top + floorIdx * FLOOR_H + FLOOR_H * 0.32
        if (isGround && groundRetail) {
          return (
            <rect
              key={floorIdx}
              x={x + unitW * 0.12}
              y={GROUND_Y - FLOOR_H * 0.78}
              width={width - unitW * 0.24}
              height={FLOOR_H * 0.6}
              className="fill-ink-900/25"
              rx="1.5"
            />
          )
        }
        return Array.from({ length: units }).map((__, unitIdx) => {
          if (isGround && unitIdx === 0 && !muted) {
            return (
              <rect
                key={`${floorIdx}-${unitIdx}`}
                x={x + unitW * unitIdx + unitW * 0.38}
                y={GROUND_Y - FLOOR_H * 0.85}
                width={unitW * 0.24}
                height={FLOOR_H * 0.85}
                className="fill-ink-900/30"
                rx="1"
              />
            )
          }
          return (
            <rect
              key={`${floorIdx}-${unitIdx}`}
              x={x + unitW * unitIdx + unitW * 0.28}
              y={wy}
              width={unitW * 0.44}
              height={FLOOR_H * 0.34}
              className={windowClass}
              rx="1"
            />
          )
        })
      })}
    </g>
  )
}

function Tree({ x }: { x: number }) {
  return (
    <g>
      <rect x={x - 1.5} y={GROUND_Y - 10} width="3" height="10" className="fill-[#8a6a4a]" />
      <circle cx={x} cy={GROUND_Y - 18} r="11" className="fill-sage-400/70" />
    </g>
  )
}

export default function StreetPreview({ housingType, context }: { housingType: string; context: string }) {
  const featured = housingVisuals[housingType] ?? housingVisuals.duplex
  const ctx = contextVisuals[context] ?? contextVisuals.residential

  const leftRoof = ctx.roof === 'mixed' ? 'gable' : ctx.roof
  const rightRoof = ctx.roof === 'mixed' ? 'flat' : ctx.roof

  const centerX = 200 - featured.width / 2
  const featuredX = featured.setback ? centerX + 30 : centerX

  return (
    <svg viewBox="0 0 400 200" className="w-full" role="img" aria-label={`Illustration of a ${housingType} on a ${context} street`}>
      <rect x="0" y="0" width="400" height={GROUND_Y} className="fill-harbor-50" />
      <rect x="0" y={GROUND_Y} width="400" height={200 - GROUND_Y} className="fill-mist-200" />
      <line x1="0" y1={GROUND_Y} x2="400" y2={GROUND_Y} className="stroke-mist-300" strokeWidth="1" />

      {ctx.trees && (
        <>
          <Tree x={16} />
          <Tree x={384} />
        </>
      )}

      {/* Left neighbor */}
      <Building
        x={30}
        width={78}
        floors={leftRoof === 'flat' ? 2 : 1}
        roof={leftRoof}
        units={2}
        fillClass="fill-harbor-200/70"
        roofClass="fill-harbor-300/80"
        windowClass="fill-harbor-800/30"
        muted
      />
      {ctx.awning && (
        <rect x="30" y={GROUND_Y - FLOOR_H * 0.9} width="78" height="5" className="fill-clay-400" rx="1" />
      )}

      {/* Right neighbor */}
      <Building
        x={292}
        width={78}
        floors={rightRoof === 'flat' ? 2 : 1}
        roof={rightRoof}
        units={2}
        fillClass="fill-harbor-200/70"
        roofClass="fill-harbor-300/80"
        windowClass="fill-harbor-800/30"
        muted
      />
      {ctx.awning && (
        <rect x="292" y={GROUND_Y - FLOOR_H * 0.9} width="78" height="5" className="fill-clay-400" rx="1" />
      )}

      {featured.setback && (
        <rect
          x={centerX - 24}
          y={GROUND_Y - FLOOR_H * 1.15}
          width={featured.width + 60}
          height={FLOOR_H * 1.15}
          className="fill-mist-300/70"
          strokeDasharray="3 3"
        />
      )}

      {/* Featured building */}
      <Building
        x={featuredX}
        width={featured.width}
        floors={featured.floors}
        roof={featured.roof}
        units={featured.units}
        groundRetail={featured.groundRetail}
        fillClass="fill-clay-400"
        roofClass="fill-clay-600"
        windowClass="fill-white/85"
      />
    </svg>
  )
}
