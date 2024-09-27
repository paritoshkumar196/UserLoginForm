const signin = document.getElementById("sign-in");
const signup = document.getElementById("sign-up");
const username = document.getElementById("username");
const title=document.querySelector('.title');
const text=document.querySelector('.text')

signin.addEventListener("click", (e) => {
  username.style.maxHeight = "0";
  signin.classList.add("disable");
  signup.classList.remove("disable");
  title.innerHTML='Sign-In';
  text.style.opacity='1';
});

signup.addEventListener("click", (e) => {
  username.style.maxHeight = "60px";
  signin.classList.remove("disable");
  signup.classList.add("disable");
  title.innerHTML='Sign-Up';
  text.style.opacity='0';
});