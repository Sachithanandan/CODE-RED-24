const imgDiv = document.getElementById('profile-img');
const img = document.getElementById('photo');
const file = document.getElementById('file');
const uploadimg = document.getElementById('upload-btn');

file.addEventListener('change', function(){
  const chosedfile = this.files[0];
  if(chosedfile){
    const reader = new FileReader();

    reader.addEventListener('load',function(){
      img.setAttribute('src',reader.result);
    })
    reader.readAsDataURL(chosedfile);
  }
})
