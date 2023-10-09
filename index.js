const name__input = document.getElementById("input__name");
const address = document.getElementById("input__address").value;
const phone = document.getElementById("input__phone").value;
const form = document.getElementById("contact__form");
const popup = document.getElementById("popup");
const close__img = document.getElementById("close__img");
const modal = document.getElementById("modal");
const modal__img = document.getElementById("modal__img");
const images = document.querySelectorAll("#pizza__list img");

name__input.addEventListener("input", (event) => {
  event.target.value = event.target.value.replace(/\./g, "");
});

displayPopup = () => (popup.style.display = "block");

closePopup = () => {
  popup.style.display = "none";
  form.reset();
};

form.addEventListener("submit", function submitForm(event) {
  event.preventDefault();
  setTimeout(function () {
    displayPopup();
  }, 1000);
});

images.forEach((img) => {
  img.onclick = function () {
    modal.style.display = "block";
    modal__img.src = this.src;
  };
});

close__img.onclick = () => (modal.style.display = "none");

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
