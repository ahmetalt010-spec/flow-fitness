import React, {useState} from 'react';


const MOVEMENT_IDS = {
  "Machine Chest Press":"machine-chest-press", "Floor Press":"floor-press", "Dumbbell Floor Fly":"floor-fly", "Knee Push-up":"knee-pushup", "Close Push-up":"close-pushup", "Pull-up":"pullup", "Bent-over Row":"row", "Deadlift":"deadlift", "Face Pull":"face-pull", "Dumbbell Shrug":"dumbbell-shrug", "Romanian Deadlift":"barbell-rdl", "Reverse Fly":"reverse-fly", "Seated Dumbbell Press":"seated-dumbbell-press", "Machine Shoulder Press":"machine-shoulder-press", "Cable Curl":"cable-curl", "Dumbbell Curl":"dumbbell-curl", "Triceps Kickback":"triceps-kickback", "Goblet Squat":"goblet-squat", "Front Squat":"front-squat", "Sumo Squat":"sumo-squat", "Sumo Deadlift":"sumo-deadlift", "Leg Extension":"leg-extension", "Calf Raise":"calf-raise", "Dumbbell Split Squat":"dumbbell-split-squat", "Dumbbell RDL":"dumbbell-rdl", "Good Morning":"good-morning", "Glute Bridge":"bridge", "Bird Dog":"bird-dog", "Dead Bug":"dead-bug", "High Plank":"high-plank",

  "Bench Press": "bench-press",
  "Incline Dumbbell Press": "dumbbell-press",
  "Cable Chest Fly": "floor-fly",
  "Şınav": "pushup",
  "Eğimli Şınav": "incline-pushup",
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
  "Reverse Lunge": "reverse-lunge",
  "Plank": "plank",
  "Diamond Push-up": "close-pushup",
  "Dar Şınav": "close-pushup",
  "Mountain Climber": "mountain-climber",
  "Leg Curl": "seated-leg-curl"
};
export default function MovementDemo({exercise,muscle}) {
  const [expanded,setExpanded] = useState(false);
  const id = MOVEMENT_IDS[exercise];
  if (!id) return <div className="movement-unavailable"><strong>{exercise}</strong><p>Bu egzersiz için doğrulanmış 3D hareket henüz eklenmedi. Yanlış bir animasyon göstermiyoruz.</p></div>;
  return <div className={"movement-frame-wrap"+(expanded?" movement-expanded":"")}>
    <div className="movement-viewer-head"><strong>{exercise}</strong><button type="button" onClick={()=>setExpanded(v=>!v)}>{expanded?"Küçült":"⛶ Büyüt"}</button></div>
    <iframe key={id} title={`${exercise} 3D egzersiz gösterimi`} loading="lazy" allowFullScreen
      src={`/movement-lab/en/exercises/${id}/?flowFocus=1`} className="movement-frame" />
    <p className="movement-note">Modeli sürükleyerek döndür · Hareketi durdur veya oynat</p>
  </div>;
}
