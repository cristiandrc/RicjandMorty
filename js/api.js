// const URL_API = 'https://pokeapi.co/api/v2/pokemon/';

// function Consulta(poke) {
//     const url = URL_API + POKE_API.replace('/', poke)
//     console.log(`Hola ${url}`)
// }

const url = 'https://pokeapi.co/api/v2/pokemon/898/'
const POKE_ID = '1'
const N_POKE = 10;

const elems = document.getElementById('poke');

apiPoke();




// function cambiarId(url) {
//     for (i) {

//     }
// }





function apiPoke() {
    
    fetch(url_final)
    .then(Response => Response.json())
    .then(data => {
            for(let i = 0; i < N_POKE; i ++ ){
                elems.innerHTML += `
                <div  class="container_card" >
                    <h2>${data.name}</h2>
                        
                    <div class="img-conteiner">
                    <img src="${data.sprites.front_default}" alt="">
                    </div>
                </div>`
            }
        console.log(data)
    })
    
    .catch(err => console.log(err));
}

