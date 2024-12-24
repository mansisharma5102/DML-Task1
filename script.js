const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  
  navLinks.classList.toggle("hamburger-active");
  hamburger.classList.toggle("hamburger-active"); 
});
/*form validation*/
document.getElementById('contact-form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact= document.getElementById('number').value;
    const message = document.getElementById('message').value;
  
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      e.preventDefault(); 
    }
  });
  