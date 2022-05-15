/* 
OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:

 -colocar a classe selecionada no personagem que passamos o mouse em cima para adcionar a animaçao nele
 -retirar a classe selecionado do personage anterior

 OBJETIVO 2

 -Quando passar o mouse no proximo personagem alterar a imagem e nome do personagem selecionado grande
 

*/

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) =>{
    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
        
        personagem.classList.add ('selecionado')


        const idSelecionado = personagem.attributes.id.value;

        const imagemJogador1 =document.getElementById('personagem-jogador-1');
        imagemJogador1.src =`./src/imagens/${idSelecionado}.png`

        const nomeJogador1 = document.getElementById('nome-jogador-um');
        const nomeSelecionado = personagem.getAttribute('data-name');

        nomeJogador1.innerHTML  = nomeSelecionado;

        

        
    })
})

