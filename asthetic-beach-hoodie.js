const poseData = [
 
  'images/beachHoodie/h1.jpg',
  'images/beachHoodie/h2.jpg',
  'images/beachHoodie/h3.jpg',
  'images/beachHoodie/h4.jpg',
  'images/beachHoodie/h5.jpg',
  'images/beachHoodie/h6.jpg',
 
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