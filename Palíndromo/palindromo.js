// solução 1
function verificaPalindromo(string) {
    if(!string) return "String não existe.";

    return string.split("").reverse().join("") === string;
}
//exemplo
console.log(verificaPalindromo("ana"));

// solução 2
function verificaPalindromo2(string) {
    if(!string) return "String não existe.";
    if (!string.length) return;

    for (let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return console.log(false);
        }
    }
    return console.log(true);
}
// exemplo
console.log(verificaPalindromo2("aba"));