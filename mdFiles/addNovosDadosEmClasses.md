# Adicionar novos dados em classes

O chatgpt me recomendou esse código:

```javascript
class ExClass {
  constructor(dado1, dado2, dado3) {
    this.dado1 = dado1;
    this.dado2 = dado2;
    this.dado3 = dado3;
  }

  adicionarNovosDados(novosDados) {
    for (const key in novosDados) {
      if (novosDados.hasOwnProperty(key)) {
        this[key] = novosDados[key];
      }
    }
  }
}

const novaClasse = new ExClass(1, "string", 2);
novaClasse.adicionarNovosDados({ dado4: "outra string", dado5: 3 });

console.log(novaClasse);
```

Dessa forma novos dados podem ser adicionados em uma classe. Posso usar esse código pra quando eu fizer a parte do backend.