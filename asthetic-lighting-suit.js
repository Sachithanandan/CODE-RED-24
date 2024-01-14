const poseData = [
 
  'images/lightingSuit/q1.jpg',
  'images/lightingSuit/q2.jpg',
  'images/lightingSuit/q3.jpg',
  'images/lightingSuit/q5.jpg',
  'images/lightingSuit/q6.jpg',
 
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