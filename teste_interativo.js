const prompt = require("prompt-sync")();

// 1. Solicita o saldo inicial uma única vez
let saldo = parseInt(prompt("Digite o saldo inicial do estoque: "));
let continuar = 's';

// 2. Loop para continuar fazendo operações
while (continuar === 's' || continuar === 'S') {
    console.log("\n--- Nova Operação ---");
    let tipo = parseInt(prompt("Digite o tipo de operação (1 = Entrada, 2 = Saída): "));
    let quantidade = parseInt(prompt("Digite a quantidade de peças: "));

    if (tipo === 1) {
        saldo = saldo + quantidade;
    } else if (tipo === 2) {
        if (quantidade <= saldo) {
            saldo = saldo - quantidade;
        } else {
            console.log("Saldo insuficiente");
        }
    } else {
        console.log("Operação inválida!");
    }

    // Mostra o saldo atualizado após a operação
    console.log("Saldo atualizado: " + saldo);

    // Pergunta se quer continuar
    continuar = prompt("Deseja continuar? (s/n): ");
}

console.log("\nSistema encerrado.");
console.log("Saldo Final: " + saldo);