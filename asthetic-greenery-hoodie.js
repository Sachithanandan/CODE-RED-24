const poseData = [
 
  'images/beachGreeneryHoodie/a1.jpg',
  'images/beachGreeneryHoodie/a2.jpg',
  'images/beachGreeneryHoodie/a3.jpg',
  'images/beachGreeneryHoodie/a4.jpg',
  'images/beachGreeneryHoodie/a5.jpg',
 
];
const id = id=>document.getElementById(id)
const poseDiv = id('pose-div');
const len = poseData.length;
let poseHTML = '';
for(let i = 0;i<len;i++){
  poseHTML +=`
  <div id="pose">
  <img src="${poseData[i]}">
  </div>
  `;
}
poseDiv.addEventListener('load',setTimeout(load,4000));
function load(){
  poseDiv.innerHTML = poseHTML;
}