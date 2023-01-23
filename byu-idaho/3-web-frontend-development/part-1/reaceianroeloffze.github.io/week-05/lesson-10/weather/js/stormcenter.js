const adjustSeverity = (stormRange) => {
    document.getElementById("valueRange").innerHTML = stormRange;
}

// const selectOption = () => {
// 	const s = document.querySelector('#selected');
// 	const sel = document.querySelector('#stormRegion');
// 	s.style.display = "block";
// 	s.textContent = sel.value;
	
// }

// Validationg the Storm Centre Form

// Acquire the required form fields from the HTML document and store them in constant variables.
const form = document.querySelector("form");
const fullName = document.querySelector("#full-name");
const email = document.querySelector("#email")
const zipCode = document.querySelector("#zip-code");
const phoneNum = document.querySelector("#phone-num");

// Get the spans from the document that will contain the error messages to display.
const fullNameError = document.querySelector("#full-name + span.error1");
const emailError = document.querySelector("#email + span.error2")
const phoneNumError = document.querySelector("#phone-num + span.error3");
const zipCodeError = document.querySelector("#zip-code + span.error4");


fullName.addEventListener("input", (event) => {
	if (fullName.validity.valid) {
		fullNameError.textContent = "";
		fullNameError.className = 'error1';
	} else {
		displayError1();
	}
});

email.addEventListener("input", (event) => {
	if (email.validity.valid) {
		emailError.textContent = "";
		emailError.className = 'error2';
	} else {
		displayError2();
	}
});

phoneNum.addEventListener("input", (event) => {
	if (phoneNum.validity.valid) {
		phoneNumError.textContent = "";
		phoneNumError.className = 'error3';
	} else {
		displayError3();
	}
});

zipCode.addEventListener("input", (event) => {
	if (zipCode.validity.valid) {
		zipCodeError.textContent = "";
		zipCodeError.className = 'error4';
	} else {
		displayError4();
	}
});

form.addEventListener("submit", (event) => {
	if (!fullName.validity.valid) {
		displayError1()
		event.preventDefault();
	}
});

form.addEventListener('submit', (event) => {
	if (!email.validity.valid) {
		displayError2()
		event.preventDefault();
	}
});

form.addEventListener('submit', (event) => {
	if (!phoneNum.validity.valid) {
		displayError3()
		event.preventDefault();
	}
});

form.addEventListener('submit', (event) => {
	if (!zipCode.validity.valid) {
		displayError4()
		event.preventDefault();
	}
});

const displayError1 = () => {
	if (fullName.validity.tooShort) {
		fullNameError.textContent = `Must be a minimum of ${fullName.minLength} characters. You have only entered ${fullName.value.length}.`;
	} else if (fullName.validity.typeMismatch) {
		fullNameError.textContent = 'Please only enter lower or uppercase letters from A to Z.';
	} else if (fullName.validity.valueMissing) {
		fullNameError.textContent = 'Your full name is required. Please enter your full name.';
	}

	fullNameError.className = 'error1 active';
};

const displayError2 = () => {
	if (email.validity.typeMismatch || email.validity.valueMissing) {
		emailError.textContent = 'Please enter a valid Email Address.'
	}

	emailError.className = 'error2 active';
};

const displayError3 = () => {
	if (phoneNum.validity.typeMismatch) {
		phoneNumError.textContent = 'Please only enter numbers.';
	} else if (phoneNum.validity.tooShort) {
		phoneNumError.textContent = `A phone number contains ${phoneNum.minLength} digits. You have currently only entered ${phoneNum.value.length}.`;
	} else if (phoneNum.validity.tooLong) {
		phoneNumError = `A phone number only contains ${phoneNum.maxLength}. You have exceeded this amount by ${phoneNum.value.length - phoneNum.maxLength}.`;
	} else if (phoneNum.validity.valueMissing) {
		phoneNumError.textContent = 'Your Phone Number is required. Please enter your Phone Number.';
	}

	phoneNumError.className = 'error3 active';
};

const displayError4 = () => {
	
	if (zipCode.validity.tooLong) {
		zipCodeError.textContent = 'A Zip Code contains exactly 5 digits Please enter a 5-digit Zip Code.';
	} else if (zipCode.validity.valueMissing) {
		zipCodeError.textContent = 'Your Zip Code is required. Please enter your Zip Code.';
	}
	
	zipCodeError.className = 'error4 active';
};