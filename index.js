calculadora();

function calculadora() {
    let operacao = Number(prompt("Insira o número da operação que deseja realizar: \n 1- Soma \n 2- Subtração \n 3- Multiplicação \n 4- Divisão Real \n 5- Divisão Inteira \n 6- Potenciação"));
    if (operacao == NaN) {
        alert("Operação inválida, insira o valor correspondente à operação desejada.")
    } else {
    switch (operacao) {
            case 1:
                let n1 = Number(prompt("Insira o primeiro valor:"));
                let n2 = Number(prompt("Insira o segundo valor:"));
                alert(`A soma entre ${n1} e ${n2} é igual a ${n1 + n2}`);
                break;
            case 2:
                let n3 = Number(prompt("Insira o primeiro valor:"));
                let n4 = Number(prompt("Insira o segundo valor:"));
                alert(`A subtração entre ${n3} e ${n4} é igual a ${n3 - n4}`);
                break;
            case 3:
                let n5 = Number(prompt("Insira o primeiro valor:"));
                let n6 = Number(prompt("Insira o segundo valor:"));
                alert(`A multiplicação entre ${n5} e ${n6} é igual a ${n5 * n6}`);
                break;
            case 4:
                let n7 = Number(prompt("Insira o primeiro valor:"));
                let n8 = Number(prompt("Insira o segundo valor:"));
                alert(`A divisão real entre ${n7} e ${n8} é igual a ${n7 / n8}`);
                break;
            case 5:
                let n9 = Number(prompt("Insira o primeiro valor:"));
                let n10 = Number(prompt("Insira o segundo valor:"));
                alert(`A divisão inteira entre ${n9} e ${n10} é igual a ${n9 % n10}`);
                break;
            case 6:
                let n11 = Number(prompt("Insira o primeiro valor:"));
                let n12 = Number(prompt("Insira o segundo valor:"));
                alert(`A potenciação entre ${n11} e ${n12} é igual a ${n11 ** n12}`);
                break;
            default:
                alert("Operação inválida, insira o valor correspondente à operação desejada.")
                break;
        }
    }
}