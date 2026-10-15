const email = document.querySelector("#email");
const country = document.querySelector("#country");
const postalCode = document.querySelector("#postal-code");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");
const emailValidationErrorMessage = document.querySelector(".error.email");
const countryErrorMessage = document.querySelector(".country.error");
const postalCodeErrorMessage = document.querySelector(".postal-code.error");
const passwordErrorMessage = document.querySelector(".password.error");
const passwordConfirmErrorMessage = document.querySelector(
	".password-confirm.error",
);
const button = document.querySelector("form button");

const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

const isValidEmail = () => {
	const validity = email.value.length !== 0 && emailRegExp.test(email.value);
	return validity;
};

const setEmailClass = (isValid) => {
	email.className = isValid ? "valid" : "invalid";
};

const updateError = (isValid) => {
	if (isValid) {
		error.textContent = "";
		error.removeAttribute("class");
	} else {
		error.textContent = "I expect an email, darling!";
		error.setAttribute("class", "active");
	}
};

function countryValidation(domValue) {
	if (!domValue) {
		countryErrorMessage.textContent = "Country is required.";
	}
}
function postalCodeValidation(domValue) {
	if (!domValue) {
		postalCodeErrorMessage.textContent = "Postal code is required.";
	}
}
function passwordValidation(domValue) {
	if (!domValue) {
		passwordErrorMessage.textContent = "Password is required.";
	}
}
function passwordConfirmValidation(domValue) {
	if (!domValue || domValue == password.value) {
		passwordConfirmErrorMessage.textContent = "";
	} else if (domValue != password.value) {
		passwordConfirmErrorMessage.textContent = "Password does not match.";
	}
}

email.addEventListener("input", function () {
	if (email.validity.typeMismatch) {
		emailValidationErrorMessage.textContent = "Email is required.";
	} else {
		email.setCustomValidity("");
	}
});

// button.addEventListener("click", function () {
// 	emailValidation(email.value);
// 	countryValidation(country.value);
// 	postalCodeValidation(postalCode.value);
// 	passwordValidation(password.value);
// 	passwordConfirmValidation(passwordConfirm.value);
// });
