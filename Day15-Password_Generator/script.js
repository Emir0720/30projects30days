function generatePassword() {
    const length = document.getElementById('length').value;
    const passwordElement = document.getElementById('password');

    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const specialChars = '!@#$%^&*()-=_+[]{}|;:,.<>?';

    let alphabet = letters + digits + specialChars;
    let password = '';
    let pwStrong = false;

    while (!pwStrong) {
        password = '';
        for (let i = 0; i < length; i++) {
            password += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        }

        if (
            [...password].some(char => specialChars.includes(char)) &&
            [...password].filter(char => digits.includes(char)).length >= 2
        ) {
            pwStrong = true;
        }
    }

    passwordElement.textContent = `Generated Password: ${password}`;
}