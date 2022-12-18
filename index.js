calculadora();

function calculadora() {
    let operacao = Number(prompt("Insira o número da operação que deseja realizar: \n 1- Soma \n 2- Subtração \n 3- Multiplicação \n 4- Divisão Real \n 5- Divisão Inteira \n 6- Potenciação"));
    if (operacao == NaN) {
        alert("Operação inválida, insira o valor correspondente à operação desejada.")
    } else {
        let n1 = Number(prompt("Insira o primeiro valor:"));
        let n2 = Number(prompt("Insira o segundo valor:"));
        switch (operacao) {        
            case 1:
                alert(`${n1} + ${n2} = ${n1 + n2}`);
                break;
            case 2:
                alert(`${n1} - ${n2} = ${n1 - n2}`);
                break;
            case 3:
                alert(`${n1} * ${n2} = ${n1 * n2}`);
                break;
            case 4:
                alert(`${n1} / ${n2} = ${n1 / n2}`);
                break;
            case 5:
                alert(`${n1} % ${n2} = ${n1 % n2}`);
                break;
            case 6:
                alert(`${n1} ** ${n2} = ${n1 ** n2}`);
                break;
            default:
                alert("Operação inválida, insira o valor correspondente à operação desejada.")
                break;
            }
        }
    }