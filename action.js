const body = document.querySelector('body');

// Function for BGchange
const id = id => document.getElementById(id);
function bgchange(){
  body.style.background = "rgb(66,66,66)";
}
  // Function for Typing
(function typing(){
  let i = 0;
  let txt = "PoseVista is not just an application; it's your personalized guide to achieving better posture, fitness goals, and an enhanced aesthetic appearance. Our advanced technology combines machine learning insights and real-time pose suggestions to create a tailored experience just for you.";
  let speed = 10;
  const about = id('about-posevista');
  const explorebtn = id('explore-us');
  (function typeWriter(){
    if (i < txt.length) {
      about.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    else{
      explorebtn.style.opacity = "1";
    }
  })();
  explorebtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const container = id('container');
    changes();
    container.style.display = "none";
    loginPage();
  });
})();

function changes(){
  const explorebtn = id('explore-us');
  explorebtn.style.background = "coral"
}

function loginPage(){
  const loginForm = id('login');
  const loginDisplay = id('login-display');
  loginForm.style.display = "block";
  const tl = gsap.timeline({defaults:{ease : "power2.out"}});
  tl.to('.login-img1', 2, {rotation:-20, transformOrigin:"right 50%"},"-=1");
  tl.fromTo('.login-img1',{y:"-200%"},{y: "0%",duration:1.2},"-=1");
  tl.to('.login-img2', 2, {rotation:-20, transformOrigin:"right 50%"},"-=1");
  tl.fromTo('.login-img2',{y:"200%"},{y: "0%",duration:1.2}, "-=1");
  tl.to('.login-img3', 2, {rotation:-20, transformOrigin:"right top"});
  tl.fromTo('.login-img3',{y:"-200%"},{y: "0%",duration:1.2}, "-=1");
  tl.to('.login-img4', 2, {rotation:-20, transformOrigin:"right bottom"});
  tl.fromTo('.login-img4',{y:"200%"},{y: "0%",duration:1.2}, "-=1");
  
  loginDisplay.style.display = "block";
  
}


/*        For Input.html */

const goal1 = id('goal1');