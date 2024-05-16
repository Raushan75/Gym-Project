// It is use for form submission


// function openNewForm() {
//   document.getElementById("Join").style.display = "block";
//   body.style.overflow = "hidden";
// }

// function closeNewForm() {
//   document.getElementById("Join").style.display = "none";
//   body.style.overflow = "auto";
// }
// get the menu bar and close button
const menuIcon = document.getElementById("btn");
const closeIcon = document.getElementById("cancel");
const navList = document.querySelector("nav ul");
console.log(navList);

menuIcon.addEventListener("click", function () {
  navList.classList.toggle("active");
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", function () {
  navList.classList.remove("active");
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
});

// join
// const joinButton = document.getElementById('Join');

// joinButton.addEventListener('click',()=>{
//   window.location.href ="form.html"
// })


function openForm() {
  document.getElementById("join-form").style.display = "block";
  body.style.overflow = 'hidden';
}

function closeForm() {
  document.getElementById("join-form").style.display = "none";
  body.style.overflow = 'auto';
}

function saveForm() {
  alert("Your form has been submitted!");
  closeForm();
}


document.getElementById("Join").addEventListener("click", openForm);