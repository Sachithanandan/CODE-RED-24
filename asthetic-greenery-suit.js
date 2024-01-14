const poseData = [
 
  'images/astheticGreenerySuit/f1.jpg',
  'images/astheticGreenerySuit/f2.jpg',
  'images/astheticGreenerySuit/f4.jpg',
  'images/astheticGreenerySuit/f5.jpg',
  'images/astheticGreenerySuit/f6.jpg'
 
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