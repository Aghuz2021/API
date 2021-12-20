
const get = async(url='https://rickandmortyapi.com/api/character') => {
    try {
        const response = await fetch(url);
        const {results : personajes} = await response.json();
        return personajes;
    } catch (error){
        console.error(error);
    }

}

const buscador = async () => {
    const{value: nombre} = document.getElementById("input");
    const personajes = await get();
    const personaje =  personajes.find (personaje => personaje.name === nombre);
    const card=`
    <div class="col-4 mt-4 p-0 hola border >
        <div class="card "  style="width:20rem">
                <img src="${personaje.image} " class="card-img-top" alt="...">
               
            <div class="card-body text-white">
                <h5 style="text-align:center"> ${personaje.name}  </h5>
                <hr></hr>
                <p class="card-text> <b>Especie:</b> ${personaje.species} </p>
                <p class="card-text> <b>Planeta de origen:</b> ${personaje.location.name} </p>
                
            </div>
        </div>
    </div>`
    document.getElementById('row').innerHTML = '';
    document.getElementById("row").insertAdjacentHTML("beforeend",card);
   console.log(personajes);
}

const start = async () => {
const personajes = await get();
    personajes.map((personaje) => {
        const card=`
        <div class="col-4 mt-4 p-0 hola border >
            <div class="card "  style="width:20rem">
                    <img src="${personaje.image} " class="card-img-top" alt="...">
                   
                <div class="card-body text-white">
                    <h5 style="text-align:center"> ${personaje.name}  </h5>
                    <hr></hr>
                    <p class="card-text> <b>Especie:</b> ${personaje.species} </p>
                    <p class="card-text> <b>Planeta de origen:</b> ${personaje.location.name} </p>
                    
                </div>
            </div>
        </div>`
        document.getElementById("row").insertAdjacentHTML("beforeend",card);
    });
}

window.onload=start();