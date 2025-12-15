let menuBtn =document.querySelector(".menu");
let mobile=document.querySelector(".mobile");
let closeBtn=document.querySelector("#cross-mark");
let nameRole=document.querySelector(".name-role");
let form=document.querySelector("form");
let send= document.getElementById("sendMasssage");



menuBtn.addEventListener("click",()=>{
mobile.style.display="initial";
	
})
closeBtn.addEventListener("click",()=>{
	mobile.style.display="none";
})

    let wordArr = ["Rahul bind", "Frontend Developer", "Coder"];
    let wordS = 0;       // current word index
    let wordsAdd = 0;    // current letter index
    let deleting = false;


    function typeWriter() {
      let currentWord = wordArr[wordS];

      if (!deleting) {
        // type letters (including spaces)
        nameRole.innerText = currentWord.substring(0, wordsAdd + 1);
        wordsAdd++;

        if (wordsAdd === currentWord.length) {
          deleting = true;
          setTimeout(typeWriter, 1000); // pause after full word
          return;
        }
      } else {
        // delete letters
        nameRole.innerText = currentWord.substring(0, wordsAdd - 1);
        wordsAdd--;

        if (wordsAdd === 0) {
          deleting = false;
          wordS++;
          if (wordS === wordArr.length) wordS = 0;
        }
      }

      setTimeout(typeWriter, deleting ? 200 : 300);
    }

	typeWriter()


function sendMail(e){
  e.preventDefault();
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value, // template ke hisab se
  };

  emailjs.send("Rahulbind629","template_iagl64a",params)
  .then(() => {
    alert("Email sent");
    form.reset();

  })
  .catch(err => console.log(err));
}
  
  send.addEventListener("click",sendMail)


  menuBtn.addEventListener("click", ()=>{
  document.querySelector(".mobile").classList.add("active");
});

closeBtn.addEventListener("click", ()=>{
  document.querySelector(".mobile").classList.remove("active");
});
