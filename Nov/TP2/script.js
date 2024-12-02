const form = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');

const fields = {
    lastName: {
        element: document.getElementById('lastName'),
        validate: (value) => value.trim() !== '',
        errorMessage: "Le nom ne doit pas être vide."
    },
    firstName: {
        element: document.getElementById('firstName'),
        validate: (value) => value.trim() !== '',
        errorMessage: "Le prénom ne doit pas être vide."
    },
    username: {
        element: document.getElementById('username'),
        validate: (value) => value.length >= 4 && value.length <= 14,
        errorMessage: "Le pseudo doit contenir entre 4 et 14 caractères."
    },
    password: {
        element: document.getElementById('password'),
        validate: (value) => value.trim() !== '',
        errorMessage: "Le mot de passe ne doit pas être vide."
    },
    confirmPassword: {
        element: document.getElementById('confirmPassword'),
        validate: (value) => value === fields.password.element.value,
        errorMessage: "Les mots de passe ne correspondent pas."
    },
    address: {
        element: document.getElementById('address'),
        validate: (value) => value.trim() !== '',
        errorMessage: "L'adresse ne doit pas être vide."
    },
    postalCode: {
        element: document.getElementById('postalCode'),
        validate: (value) => /^[0-9]{5}$/.test(value),
        errorMessage: "Le code postal doit contenir 5 chiffres."
    },
    city: {
        element: document.getElementById('city'),
        validate: (value) => value.trim() !== '',
        errorMessage: "La ville ne doit pas être vide."
    },
    phone: {
        element: document.getElementById('phone'),
        validate: (value) => /^[0-9]{10}$/.test(value.replace(/[\s.-]/g, '')),
        errorMessage: "Le numéro de téléphone doit contenir 10 chiffres."
    }
};

// Test function
function validateField(field) {
    const value = field.element.value;
    const isValid = field.validate(value);
    const errorElement = field.element.nextElementSibling;

    if (isValid) {
        errorElement.textContent = '';
        return true;
    } else {
        errorElement.textContent = field.errorMessage;
        return false;
    }
}

// Add listener on each field "blur"
Object.values(fields).forEach(field => {
    field.element.addEventListener('blur', () => validateField(field));
});

// On Submit
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let formIsValid = true;

    Object.values(fields).forEach(field => {
        if (!validateField(field)) {
            formIsValid = false;
        }
    });

    if (formIsValid) {
        successMessage.textContent = "Inscription validé";
        form.reset();
    } else {
        successMessage.textContent = '';
    }
});