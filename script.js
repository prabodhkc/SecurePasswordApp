const generatePassword = (length, options) => {
    const charSets = {
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numbers: "0123456789",
        symbols: "!@#$%^&*()_+[]{}|;:,.<>?",
    };

    let charPool = charSets.lowercase;
    if (options.includeUppercase) charPool += charSets.uppercase;
    if (options.includeSymbols) charPool += charSets.symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }
    return password;
};

document.getElementById("generate-password").addEventListener("click", () => {
    const length = parseInt(document.getElementById("password-length").value);
    const options = {
        includeUppercase: document.getElementById("include-uppercase").checked,
        includeSymbols: document.getElementById("include-symbols").checked,
    };

    const password = generatePassword(length, options);
    document.getElementById("password").value = password;
});

document.getElementById("copy-password").addEventListener("click", () => {
    const passwordField = document.getElementById("password");
    passwordField.select();
    navigator.clipboard.writeText(passwordField.value);
    alert("Password copied to clipboard!");
});
