const poseData = [
 
  'images/beachCasualPoses/pose1.jpg',
  'images/beachCasualPoses/pose2.jpg',
  'images/beachCasualPoses/pose3.jpg',
  'images/beachCasualPoses/pose4.jpg',
 
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