// Form Submit Message

function submitForm(event){

  event.preventDefault();

  document.getElementById("message").innerHTML =
  "Form Submitted Successfully ✅";

}

// Dark Mode

function toggleDarkMode(){

  document.body.classList.toggle("dark");

}