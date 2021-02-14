const URL_API = "https://rickandmortyapi.com/api/character";
const PEOPLE_ID = "/:id";
var url = 0;
var id = 1;
var contador = 20;

const elems = document.getElementById('container_main');
const btnIniciar = document.getElementById('btn_inicar');


class consultas {
    constructor(){
        this.cambiarId()
        // this.consulta();
        this.finDePagina()
    }

    cambiarId(){
        
        for(id; id <= contador; id ++){
            url = URL_API + PEOPLE_ID.replace(':id', id)
            this.consulta(url)
            console.log('Hola yo sou la URL' + url)
        }
        contador += 50;
        console.log(contador)
    }
    
    consulta(){
        // console.log(url)
        fetch(url)
            .then(Response => Response.json())
            .then(data => { 
                elems.innerHTML += `
                        <div  class="container_card fadeIn" >
                            <div class="img-conteiner">
                                    <img src="${data.image}" alt="">
                            </div>
                            <h2>${data.name}</h2>
                        </div>`
                // console.log(data)
            })
    }

    finDePagina(){

        window.addEventListener('scroll', () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY
        
            if(Math.ceil(scrolled) === scrollable){
                // alert('Fin de pagina')
                this.cambiarId()
            }
        })
    }
         
};
    



function enpezarConsulta() {
    var personajes = new consultas()
}

