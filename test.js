import GoldenArmour from "./app/dataBase/items/body/GoldenArmour.js";

const itens = {
    "9y0bcl7gu": new GoldenArmour("9y0bcl7gu", "Golden Armour", 80, 35, 4)
}
//Por algum motivo, shoes ainda tá recebendo crit rate como parametro
// Acredito que seja porque o valor de critRate tem o valor padrão, e como eu não alterei, ele manteve o padrão. Talvez se eu fizer critRate = null no constructor deve mudar.


// console.log(itens["9y0bcl7gu"].name);



  // document.addEventListener('DOMContentLoaded', function () {
  //   // Adiciona um evento de submissão ao formulário
  //   document.querySelector('.form-example').addEventListener('submit', function (event) {
  //     // Impede o envio do formulário padrão
  //     event.preventDefault();

  //     // Captura os dados do formulário
  //     const formData = {
  //       name: document.getElementById('name').value,
  //       itemType: document.getElementById('item-type').value,
  //       atk: document.getElementById('atk').value,
  //       def: document.getElementById('def').value,
  //       hp: document.getElementById('hp').value,
  //       str: document.getElementById('str').value,
  //       int: document.getElementById('int').value,
  //       agi: document.getElementById('agi').value,
  //       critRate: document.getElementById('crit-rate').value,
  //       critDmg: document.getElementById('crit-dmg').value,
  //       atkSpd: document.getElementById('atk-spd').value,
  //       movementSpd: document.getElementById('movement-spd').value,
  //       creator: document.getElementById('creator').value,
  //       price: document.getElementById('price').value,
  //       description: document.getElementById('description').value
  //     };

  //     // Envia os dados para o backend
  //     fetch('/items', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(formData)
  //     })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Erro ao enviar os dados para o servidor.');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       // Manipula a resposta do backend, se necessário
  //       console.log('Dados enviados com sucesso:', data);
  //     })
  //     .catch(error => {
  //       console.error('Erro:', error);
  //     });
  //   });
  // });
