## Cálculo de porcentagem 

Pegar o valor da porcentagem, multiplicar pelo número desejado e dividir por cem. 
> Ex: 8% de 61. 

```
61 x 8 = 488;

488 / 100 = 4.88;
```

Resultado: 8% de 61 é 4.88.
Agora é só adicionar o 4.88 aos 61.

> Talvez seja interessante fazer o parseInt(ou parseFloat, não lembro qual é o certo) no resultado pra ficar redondinho.

## Gerar numero aleatório

```
const generateRandomNumberPlease = parseInt(Math.random() * 100 + 1);
```

**Numero aleatorio entre dois numeros**:

```
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```