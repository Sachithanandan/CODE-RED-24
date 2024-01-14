const poseData = [
 
  'images/lightingCasual/c1.jpg',
  'images/lightingCasual/c2.jpg',
  'images/lightingCasual/c3.jpg',
  'images/lightingCasual/c4.jpg',
  'images/lightingCasual/c5.jpg',
  'images/lightingCasual/c6.jpg'
 
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