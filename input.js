const beachOutfitData = [{
  image: "images/outfit/hoodi.jpeg",
  Fletter : "H",
  name : "oodie"
},{
  image: "images/outfit/casual.jpeg",
  Fletter : "C",
  name : "asual"
}, {
  image: "images/outfit/beachoutfit.jpg",
  Fletter : "T",
  name : "unics"
}

];



const id = id=> document.getElementById(id);

const goalImg1 = id('goal1');
const goalImg2 = id('goal2');
const goalImg3 = id('goal3');

const backgroundInput = id('background-input');

const container = id('container');
const beachBg = id('beach');
const beachOutfit = id('beach-outfit');

goalImg1.addEventListener('click',()=>{
  goal1changes();
});

function goal1changes(){
  const title = id('title');
  title.innerHTML = `<span style = color:coral;>S</span>elect <span style = color:coral;>T</span>he <span style = color:coral;>B</span>ackground`;
  const goalContainer = id('goal-container');
  goalContainer.style.display = "none";

  backgroundInput.style.display = "flex";  
}

beachBg.addEventListener('click', ()=>{
  const title = id('title');
  title.innerHTML = `<span style = color:coral;>S</span>elect <span style = color:coral;>T</span>he <span style = color:coral;>O</span>utfit`;
  let outfitHTML = '';
  outfitHTML += `
  <div id="beachoutfit">
  <a href = "poses.html"><img src="${beachOutfitData[2].image}"></a>
  <h3 id="beachOutfit-txt">
    <span style = "color:coral;font-size:25px;">${beachOutfitData[2].Fletter}</span>${beachOutfitData[2].name}
  </h3>
</div>
    <div id="casual">
      <img src="${beachOutfitData[1].image}">
      <h3 id="beachOutfit-txt">
        <span style = "color:coral;font-size:25px;">${beachOutfitData[1].Fletter}</span>${beachOutfitData[1].name}
      </h3>
    </div>
    <div id="hoodie">
      <img src="${beachOutfitData[0].image}">
      <h3 id="beachOutfit-txt">
        <Span style = "color:coral;font-size:25px">${beachOutfitData[0].Fletter}</Span>${beachOutfitData[0].name}
      </h3>
    </div>
  `;
  backgroundInput.style.display = "none";
  container.style.height = "50%";
  beachOutfit.innerHTML = outfitHTML;
  
})

const greeneryOutfitData = [{
  completeName: 'hoodie',
  image: "images/outfit/hoodi.jpeg",
  Fletter : "H",
  name : "oodie"
},{
  completeName: 'casual',
  image: "images/outfit/casual.jpeg",
  Fletter : "C",
  name : "asual"
}, {
  completeName: 'suit',
  image: "images/outfit/suit.jpeg",
  Fletter : "S",
  name : "uit"
}];

const greenery = id('greenery');
const greeneryOutfit = id('greenery-outfit');
greenery.addEventListener('click',()=>{
  let greeneryHTML = '';
  const len = greeneryOutfitData.length;
  for(let i = 0;i<len;i++){
    greeneryHTML += `
    <div id="${greeneryOutfitData[i].completeName}">
    <img src="${greeneryOutfitData[i].image}">
    <h3 id="greenery-txt">
      <Span style = "color:coral;font-size:25px">${greeneryOutfitData[i].Fletter}</Span>${greeneryOutfitData[i].name}
    </h3>
  </div>
    `;
    console.log(greeneryOutfitData[i].Fletter);
    console.log(greeneryOutfitData[i].name);
  }
  backgroundInput.style.display = "none";
  container.style.height = "50%";
  greeneryOutfit.innerHTML = greeneryHTML;
});

const lighting = id('lighting');
const lightingOutfit = id('lighting-outfit');
lighting.addEventListener('click',()=>{
  let lightingHTML = '';
  const len = greeneryOutfitData.length;
  for(let i = 0;i<len;i++){
    lightingHTML += `
    <div id="${greeneryOutfitData[i].completeName}">
    <img src="${greeneryOutfitData[i].image}">
    <h3 id="lighting-txt">
      <Span style = "color:coral;font-size:25px">${greeneryOutfitData[i].Fletter}</Span>${greeneryOutfitData[i].name}
    </h3>
  </div>
    `;
  }
  backgroundInput.style.display = "none";
  container.style.height = "50%";
  lightingOutfit.innerHTML = lightingHTML;
});


  
  