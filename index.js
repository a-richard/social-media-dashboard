function darkMode() {
  var body = document.querySelector("body");
  var input = document.querySelector("input");

  if (body.classList !== "dark-mode" && input.checked === true) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
}
