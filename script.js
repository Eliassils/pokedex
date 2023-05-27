/* quando clicar no pokemon na lsitagem temos que esconder o cartao do pokemon e 
mostrar o cartao correspondente ao que foi selecionado na listagem 
pra isso vamos precisar trabalhar com dois elementos 
1-listagem
2-cartao pokemom
 precisamos criar duas variaveis do js para trabalhar com os elementos na tela
 vamos precisar trabalhar com o evento de click pelo usuario na listagem do pokemons
 remover a classe aberto so do cartao que esta aberto 
 ao clicar em um pokemom na listagem pegamos o id desse pokemon para saber qual
 cartao mostrar
 remover a classe ativa que marca o pokemon selecionado
 adcionar a classe ativo no item na lista seleconado*/
 
 /* precisamso criar duas variaveis no js para trabalhar com os elementos na tela*/

 const listaselecaopokemons=document.querySelectorAll('.pokemon')
 const pokemoncard=document.querySelectorAll('.cartao-pokemon')
 listaselecaopokemons.forEach(pokemon=>{
    pokemon.addEventListener('click',()=>{
        const cartaopokemonaberto=document.querySelector('.aberto')
        cartaopokemonaberto.classList.remove('aberto')
        

       const idpokemonselecionado=pokemon.attributes.id.value
      const pokemonparaabrir= document.getElementById('cartao-'+idpokemonselecionado)
      pokemonparaabrir.classList.add('aberto')
    })
 })




