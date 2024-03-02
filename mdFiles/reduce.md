# Sobre o reduce

Primeiro, só pra efeito de comparação, esse era meu código sem o reduce:

```
sumHP(helmet, armour, gloves, shoes, secundaryWeapon){
        let totalHP = this.hp
        if(helmet && helmet.hp){
            totalHP += helmet.hp;
        }
        if(armour && armour.hp){
            totalHP += armour.hp
        }
        if( gloves && gloves.hp){
            totalHP += gloves.hp
        }
        if(shoes && shoes.hp){
            totalHP += shoes.hp
        }
        if(secundaryWeapon && secundaryWeapon.hp){
            totalHP += secundaryWeapon.hp
        }

        return totalHP;
    }
```

If's, if's, e mais if's.

O código com reduce:

```
sumHP(helmet, armour, gloves, shoes, secundaryWeapon) {
    const items = [helmet, armour, gloves, shoes, secundaryWeapon];
    return items.reduce((totalHP, item) => totalHP + (item && item.hp ? item.hp : 0), this.hp);
}
```

O método **reduce()** é uma função de array em JavaScript que serve para reduzir os elementos de um array a um único valor. Ele executa uma função de **callback** em cada elemento do array, resultando em um único valor de retorno. Esse valor de retorno pode ser qualquer coisa, como um *número*, uma *string*, um *objeto*, ou até mesmo outro *array*.

### Sintaxe

```
array.reduce(callback[, initialValue]);
```

**callback**: Uma função que será chamada para cada elemento do array. A função recebe até quatro argumentos: *accumulator*, *currentValue*, *currentIndex*, e *array*.

**initialValue** (opcional): Um valor inicial que será usado como *accumulator* na primeira chamada da função de callback. Se não fornecido, o primeiro elemento do array será usado como valor inicial.

### Funcionamento

- O **reduce**() itera sobre cada elemento do array.
- Para cada elemento, a função de callback é chamada.
- A função de callback recebe o valor acumulado até o momento (*accumulator*) e o valor atual do elemento (*currentValue*).
- O valor retornado pela função de callback se torna o novo valor acumulado (*accumulator*) para a próxima iteração.
- No final da iteração, o valor final acumulado é retornado como resultado do método **reduce**().

### Utilização

- O método **reduce**() é frequentemente utilizado para calcular um valor agregado a partir de uma lista de elementos, como a soma de todos os elementos de um array, a concatenação de strings, a contagem de ocorrências, entre outras operações.
- Ele também pode ser utilizado para transformar um array em outro tipo de dado, como um objeto ou uma string.

## Explicando o reduce no sumHP

Essa função **sumHP** aceita todos os equipamentos como argumentos e os coloca em um array. Em seguida, ela usa a função **reduce**() para somar o HP de todos os equipamentos equipados, considerando também o HP base do personagem. O operador condicional (**items && items.hp ? items.hp : 0**) verifica se o equipamento existe e possui a propriedade hp, e se sim, adiciona o valor de hp à soma total.

### A expressão *items && items.hp ? items.hp : 0*

**items && items.hp:** Esta parte verifica se *items* é uma referência válida (ou seja, não é *null* ou *undefined*) e se *items* possui a propriedade *hp*. Se *items* for uma referência válida e possuir a propriedade *hp*, essa expressão será avaliada como verdadeira.

**? items.hp : 0**: Esta é a sintaxe do operador condicional ternário em JavaScript. Se a expressão antes do *?* for verdadeira, o valor de *items.hp* será retornado; caso contrário, o valor *0* será retornado.

Portanto, se *items* for uma referência válida e possuir a propriedade *hp*, *items.hp* será retornado. Caso contrário, ou seja, se *items* for *null*, *undefined* ou não possuir a propriedade *hp*, o valor *0* será retornado. Isso garante que, se um equipamento não tiver um valor de *hp*, sua contribuição para a soma total será considerada como *0*.