import React, {useState} from 'react';
import Exercise3D from './Exercise3D.jsx';

const MOVEMENT_IDS = {
  "Bench Press": "bench",
  "Incline Dumbbell Press": "dumbbell-press",
  "Cable Chest Fly": "floor-fly",
  "Şınav": "pushup",
  "Eğimli Şınav": "pushup",
  "Geniş Şınav": "pushup",
  "Lat Pulldown": "lat-pulldown",
  "Seated Cable Row": "cable-row",
  "Dumbbell Row": "dumbbell-row",
  "Shoulder Press": "press",
  "Lateral Raise": "lateral-raise",
  "Front Raise": "front-raise",
  "Biceps Curl": "curl",
  "Triceps Pushdown": "cable-pushdown",
  "Hammer Curl": "hammer-curl",
  "Squat": "squat",
  "Bodyweight Squat": "bodyweight-squat",
  "Reverse Lunge": "split-squat",
  "Plank": "plank",
  "Diamond Push-up": "pushup",
  "Dar Şınav": "pushup",
  "Mountain Climber": "mountain-climber",
  "Leg Curl": "seated-leg-curl"
};
export default function MovementDemo({exercise,muscle}) {
  const [expanded,setExpanded] = useState(false);
  const id = MOVEMENT_IDS[exercise];
  if (!id) return <div><Exercise3D exercise={exercise} muscle={muscle}/><p className="movement-note">Bu egzersiz için hazır doğrulanmış hareket eşleşmesi bulunamadı. Gösterilen model şematiktir.</p></div>;
  return <div className={"movement-frame-wrap"+(expanded?" movement-expanded":"")}>
    <div className="movement-viewer-head"><strong>{exercise}</strong><button type="button" onClick={()=>setExpanded(v=>!v)}>{expanded?"Küçült":"⛶ Büyüt"}</button></div>
    <iframe key={id} title={`${exercise} 3D egzersiz gösterimi`} loading="lazy" allowFullScreen
      src={`/movement-lab/en/exercises/${id}/?flowFocus=1`} className="movement-frame" />
    <p className="movement-note">Modeli sürükleyerek döndür · Hareketi durdur veya oynat</p>
  </div>;
}
