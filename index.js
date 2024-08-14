const signUpForm = document.forms["sign-up-form"];
const firstName = signUpForm["first-name"];
const lastName = signUpForm["last-name"];
const email = signUpForm["email"];
const password = signUpForm["password"];

const errorMesageFN = document.getElementById("error-mesage-fn");
const errorMesageLN = document.getElementById("error-mesage-ln");
const errorMesageEm = document.getElementById("error-mesage-em");
const errorMesagePW = document.getElementById("error-mesage-pw");

const imgfnAlert = document.getElementById("imgfnalert");
const imglnAlert = document.getElementById("imglnalert");
const imgEmailAlert = document.getElementById("imgemailalert");
const imgPasswordAlert = document.getElementById("imgpasswordalert");

const symbols = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`1234567890]/;
const symbolsEmail = /[!#$%^&*()_+{}\[\]:;"'<>,?/~`]/;
const emails = "@gmail.com";
const string = ["undefined", "number", "boolean", "string", "null", "object"];

function validation() {
  if (firstName.value.trim() === "") {
    imgfnAlert.classList.remove("d-none");
    errorMesageFN.classList.add("text-danger");
    errorMesageFN.classList.remove("d-none");
    errorMesageFN.innerHTML = "First Name cannot be empty";
  } else if (symbols.test(firstName.value)) {
    imgfnAlert.classList.remove("d-none");
    errorMesageFN.classList.add("text-danger");
    errorMesageFN.classList.remove("d-none");
    errorMesageFN.innerHTML = "do not use specials characters!";
  } else if (firstName.value.length < 3) {
    errorMesageFN.classList.add("text-danger");
    errorMesageFN.classList.remove("d-none");
    errorMesageFN.innerHTML = "First Name to short!";
    imgfnAlert.classList.remove("d-none");
  } else if (string.includes(firstName.value.toLowerCase())) {
    fnAlert.innerHTML = `${firstName.value} is not avalable`;
  } else {
    errorMesageFN.classList.add("text-success");
    errorMesageFN.classList.remove("text-danger");
    errorMesageFN.innerHTML = "success";
    errorMesageFN.classList.remove("d-none");
    imgfnAlert.classList.add("d-none");
  }

  if (lastName.value.trim() === "") {
    errorMesageLN.innerHTML = "Last Name cannot be empty";
    errorMesageLN.classList.add("text-danger");
    errorMesageLN.classList.remove("d-none");
    imglnAlert.classList.remove("d-none");
  } else if (symbols.test(lastName.value)) {
    errorMesageLN.innerHTML = "do not use specials characters!";
    errorMesageLN.classList.add("text-danger");
    errorMesageLN.classList.remove("d-none");
    imglnAlert.classList.remove("d-none");
  } else if (string.includes(lastName.value.toLowerCase())) {
    lnAlert.innerHTML = `${lastName.value} is not avalable`;
  } else if (lastName.value.length < 3) {
    errorMesageLN.innerHTML = "Last Name to short!";
    errorMesageLN.classList.add("text-danger");
    errorMesageLN.classList.remove("d-none");
    imglnAlert.classList.remove("d-none");
  } else {
    errorMesageLN.classList.add("text-success");
    errorMesageLN.classList.remove("text-danger");
    errorMesageLN.classList.remove("d-none");
    errorMesageLN.innerHTML = "success";
    imglnAlert.classList.add("d-none");
  }

  if (email.value.trim() === "") {
    errorMesageEm.classList.add("text-danger");
    errorMesageEm.classList.remove("d-none");
    errorMesageEm.innerHTML = "Email cannot be empty";
    imgEmailAlert.classList.remove("d-none");
  } else if (
    !email.value.includes("@") ||
    !email.value.includes(".com") ||
    symbolsEmail.test(email.value)
  ) {
    errorMesageEm.classList.add("text-danger");
    errorMesageEm.classList.remove("d-none");
    errorMesageEm.innerHTML = "Looks like this not an email";
    imgEmailAlert.classList.remove("d-none");
  } else {
    errorMesageEm.classList.remove("text-danger");
    errorMesageEm.classList.add("text-success");
    errorMesageEm.classList.remove("d-none");
    errorMesageEm.innerHTML = "success";
    imgEmailAlert.classList.add("d-none");
  }

  if (password.value.trim() === "") {
    errorMesagePW.classList.add("text-danger");
    errorMesagePW.classList.remove("d-none");
    errorMesagePW.innerHTML = "password must be fill!";
    imgPasswordAlert.classList.remove("d-none");
  } else if (password.value.length < 6) {
    errorMesagePW.classList.add("text-danger");
    errorMesagePW.classList.remove("d-none");
    errorMesagePW.innerHTML = "Password to short!";
    imgPasswordAlert.classList.remove("d-none");
  } else if (!symbolsEmail.test(password.value)) {
    errorMesagePW.classList.add("text-danger");
    errorMesagePW.classList.remove("d-none");
    errorMesagePW.innerHTML = "password must have atleast 1 symbols";
    imgPasswordAlert.classList.remove("d-none");
  } else {
    errorMesagePW.classList.add("text-success");
    errorMesagePW.classList.remove("text-danger");
    errorMesagePW.innerHTML = "success";
    imgPasswordAlert.classList.add("d-none");
  }
}

signUpForm.onsubmit = (event) => {
  event.preventDefault();
  validation();
};
