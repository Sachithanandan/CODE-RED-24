const poseData = [
  'images/beachposes/beachpose1.jpg',
  'images/beachposes/beachpose2.jpg',
  'images/beachposes/beachpose3.jpg',
  'images/beachposes/beachpose4.jpg',
  'images/beachposes/beachpose5.jpg',
  'images/beachposes/beachpose6.jpg'
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
poseDiv.innerHTML = poseHTML;