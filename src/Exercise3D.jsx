import React,{useEffect,useRef,useState} from 'react';
import * as THREE from 'three';

// Procedural 3D teaching preview. These are illustrative motions, not validated biomechanics.
export default function Exercise3D({exercise,muscle}){
 const mount=useRef(null),playing=useRef(true),speed=useRef(1),[isPlaying,setPlaying]=useState(true),[rate,setRate]=useState(1);
 useEffect(()=>{
  const host=mount.current;if(!host)return;
  const scene=new THREE.Scene();scene.background=new THREE.Color('#101d35');
  const camera=new THREE.PerspectiveCamera(42,1,.1,100);camera.position.set(4,3.2,6.8);camera.lookAt(0,1,0);
  const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));renderer.outputColorSpace=THREE.SRGBColorSpace;host.appendChild(renderer.domElement);
  scene.add(new THREE.HemisphereLight(0xcce8ff,0x26324b,2.3));const light=new THREE.DirectionalLight(0xffffff,2.6);light.position.set(3,8,5);scene.add(light);
  const mat=(c,metalness=0)=>new THREE.MeshStandardMaterial({color:c,roughness:.5,metalness});const skin=mat('#d8a989'),shirt=mat('#328fff'),pants=mat('#283a65'),accent=mat('#ff637e'),steel=mat('#a8c1d8',.5),floor=mat('#24344f');
  const mesh=(geo,m,parent=scene)=>{const o=new THREE.Mesh(geo,m);parent.add(o);return o};
  const box=(w,h,d,m,x,y,z,parent=scene)=>{const o=mesh(new THREE.BoxGeometry(w,h,d),m,parent);o.position.set(x,y,z);return o};
  const ball=(r,m,x,y,z,parent=scene)=>{const o=mesh(new THREE.SphereGeometry(r,20,16),m,parent);o.position.set(x,y,z);return o};
  const limb=(a,b,r,m,parent=scene)=>{const d=new THREE.Vector3().subVectors(b,a),o=mesh(new THREE.CylinderGeometry(r,r,d.length(),12),m,parent);o.position.copy(a).add(b).multiplyScalar(.5);o.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize());return o};
  const v=(x,y,z)=>new THREE.Vector3(x,y,z);
  box(9,.08,9,floor,0,-.06,0);const grid=new THREE.GridHelper(9,18,0x416188,0x304563);grid.position.y=.005;scene.add(grid);
  const bench=exercise==='Bench Press';const squat=/Squat|Lunge|Leg Press|Leg Curl|Glute Bridge/i.test(exercise);const arm=/Curl|Raise|Press|Fly|Pushdown|Row|Pulldown/i.test(exercise);
  const body=new THREE.Group();scene.add(body);
  let torso,head,arms=[],legs=[],bar;
  if(bench){
   box(.9,.14,2.05,steel,0,.83,0);for(const z of [-.72,.72])box(.09,.78,.09,steel,0,.4,z);
   torso=box(.85,.3,1.08,shirt,0,1.12,0,body);head=ball(.23,skin,0,1.13,-.83,body);
   for(const x of [-.31,.31]){limb(v(x,1.03,.5),v(x,1.0,1.12),.12,pants,body);ball(.12,skin,x,1.02,1.13,body)}
   for(const x of [-.43,.43]){const group=new THREE.Group();body.add(group);arms.push({group,x});}
   bar=new THREE.Group();body.add(bar);limb(v(-1.25,0,0),v(1.25,0,0),.045,steel,bar);for(const x of [-1.05,1.05]){const plate=mesh(new THREE.CylinderGeometry(.22,.22,.1,24),accent,bar);plate.rotation.z=Math.PI/2;plate.position.x=x;}
  }else{
   torso=box(.78,.9,.38,shirt,0,1.72,0,body);head=ball(.25,skin,0,2.43,0,body);
   for(const x of [-.24,.24]){const group=new THREE.Group();body.add(group);legs.push({group,x});}
   for(const x of [-.47,.47]){const group=new THREE.Group();body.add(group);arms.push({group,x});}
  }
  function segment(group,a,b,r,m){limb(v(...a),v(...b),r,m,group)}
  function clearGroup(g){for(const child of [...g.children]){g.remove(child);child.geometry?.dispose()}}
  function update(t){
   const phase=(Math.sin(t*1.9)+1)/2;
   if(bench){const y=1.43+phase*.53;bar.position.set(0,y,0);
    arms.forEach(({group,x})=>{clearGroup(group);segment(group,[x,1.15,-.32],[x*1.65,1.22+phase*.22,-.10],.105,skin);segment(group,[x*1.65,1.22+phase*.22,-.10],[x*1.65,y,0],.085,skin);ball(.1,skin,x*1.65,y,0,group)});
   }else{
    const bend=squat?phase*.52:0;torso.position.y=1.72-bend;head.position.y=2.43-bend;
    legs.forEach(({group,x})=>{clearGroup(group);segment(group,[x,1.26-bend,0],[x*1.15,.73, squat?phase*.34:0],.14,pants);segment(group,[x*1.15,.73,squat?phase*.34:0],[x*1.15,.12,.04],.11,pants);box(.22,.13,.38,steel,x*1.15,.1,.13,group)});
    arms.forEach(({group,x})=>{clearGroup(group);const up=arm?phase*.62:0;segment(group,[x,2.03-bend,0],[x*1.25,1.65-bend+up,.08],.105,skin);segment(group,[x*1.25,1.65-bend+up,.08],[x*1.28,1.24-bend+up*1.5,.16],.085,skin);ball(.13,steel,x*1.28,1.24-bend+up*1.5,.16,group)});
   }
  }
  let angle=.4,tilt=.15,drag=false,lastX=0,lastY=0,elapsed=0,last=0,raf;
  const down=e=>{drag=true;lastX=e.clientX;lastY=e.clientY;renderer.domElement.setPointerCapture(e.pointerId)};
  const move=e=>{if(!drag)return;angle+=(e.clientX-lastX)*.009;tilt=Math.max(-.35,Math.min(.75,tilt+(e.clientY-lastY)*.006));lastX=e.clientX;lastY=e.clientY};
  const up=()=>{drag=false};renderer.domElement.addEventListener('pointerdown',down);renderer.domElement.addEventListener('pointermove',move);renderer.domElement.addEventListener('pointerup',up);
  const resize=()=>{const w=host.clientWidth||450,h=host.clientHeight||290;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix()};const observer=new ResizeObserver(resize);observer.observe(host);resize();
  const tick=ms=>{const dt=last?Math.min((ms-last)/1000,.1):0;last=ms;if(playing.current)elapsed+=dt*speed.current;update(elapsed);const radius=bench?5.3:5.8;camera.position.set(Math.sin(angle)*radius,2.7+tilt*3,Math.cos(angle)*radius);camera.lookAt(0,bench?1:1.3,0);renderer.render(scene,camera);raf=requestAnimationFrame(tick)};raf=requestAnimationFrame(tick);
  return()=>{cancelAnimationFrame(raf);observer.disconnect();renderer.domElement.removeEventListener('pointerdown',down);renderer.domElement.removeEventListener('pointermove',move);renderer.domElement.removeEventListener('pointerup',up);host.removeChild(renderer.domElement);scene.traverse(o=>{if(o.geometry)o.geometry.dispose();if(o.material&&o.material.dispose)o.material.dispose()});renderer.dispose()};
 },[exercise,muscle]);
 return <div className="model3d"><div ref={mount} className="model3d-canvas" role="img" aria-label={`${exercise} için döndürülebilir örnek üç boyutlu egzersiz animasyonu`}/><div className="model3d-actions"><button onClick={()=>{playing.current=!playing.current;setPlaying(playing.current)}}>{isPlaying?'⏸ Durdur':'▶ Oynat'}</button><button onClick={()=>{const next=rate===1?0.5:rate===.5?1.5:1;speed.current=next;setRate(next)}}>Hız: {rate}×</button></div><small className="model3d-note">Modeli fareyle veya parmağınla döndür. Bu 3D hareket şematik bir ön izlemedir; profesyonel teknik eğitimi yerine geçmez.</small></div>;
}
