# Infomrações sobre os shop

Esse texto aqui tava no arquivo VillageShop.js e eu escrevi 2 meses atrás (feverero 2024) antes de fazer o shop em si.

//PROJETO PAUSADO TEMPORARIAMENTE. VOLTO APÓS APRENDER A FAZER API COM DJANGO E APRENDER A MEXER COM BANCO DE DADOS.

//5 itens listados abaixo são chamados de 'necessidades'

//1// mensagem de boas vindas
//2// 3 opções: comprar, vender e sair
//3// Em 'comprar': Mostra itens na esquerda e a descrição e preço na direita
//4// Em 'vender' mostra os itens no inventario do jogador e o preço ao vender e a descrição
//5// em 'sair', ativa o evento de voltar para o index.html

// Pra necessidades 3 e 4 funcionarem, os itens precisam ter por padrão descrição e preço. Isso acontece porque vai ocupar muito espaço em outras funções se eu deixar preço e descrição no pra loja. Além disso, se pegarmos a demonSword como exemplo, ela vai ter o mesmo preço independente da loja. Se eu quiser fazer uma espécie de loja mercenária, eu posso fazer com que ela tenha especificações proprias, como por exemplo, uma função que pega o valor do preço dos itens e multiplica por 3, pra poder vender mais caro especificamente nessa loja.

// COMO FAZER A NECESSIDADE 3: 
// Atualmente tem o Helmet na esquerda com o botão equipar. Na direita tem Equips com helmet e body sendo listados
// Alterar isso primeiro, fazendo que a coluna da esquerda tenha os itens que podem ser ou navegaveis com as setas do teclado (caso precise de ajuda: o curso da tecla pom da alura)
// E também, ao clicar no item, mostrar a descrição na coluna da direita
// Deixar do mesmo estilo que ja está, não precisa mudar, mas, na coluna da direita, quando nenhum item tiver sido clicado, deixar escrito uma mensagem: "Selecione um item para comprar"
// Aquele botão equipar da coluna da esquerda, passar ele pra coluna da direita e mudar pra 'comprar'
// Quando um item for selecionado, no lugar de 'equips' vai ficar o nome do item, e a lista embaixo vai ser os status. Precisa ter uma linha divisória pra ficar o preço embaixo dos status. Encontrar um bom lugar pra deixar uma descrição pequena do item. E um botão 'ver descrição completa' que abre uma caixa de descrição maior, deixando o resto da div opaca, semelhante ao 'menu pause' do jogo connect four.

Passei o texto pra cá porque tava ocupando muito espaço lá.