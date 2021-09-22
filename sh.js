

const super_container= document.getElementById("super_container")
const super_number= 731

//const main_power=Object.keys(colors)

const fetchSuperhero= async () =>{
    for(let i=1; i<=super_number;i++){
        await getSuperhero(i);
    }
}

const getSuperhero= async id =>{
    const url=`https://www.superheroapi.com/api.php/4267454303279480
    /${id}`
    const res= await fetch(url)
    const superhero= await res.json()
    createSuperheroCard(superhero)
}

fetchSuperhero()
function createSuperheroCard(superhero){
    const superheroEl= document.createElement('div');
    superheroEl.classList.add("superhero")
    let super_power=null 
    //  for(const i in superhero.publisher){
    
    //      super_power=i  
    //    }

    // const power=main_power.find(type=>super_power.indexOf(type)>-1)

    const name=superhero.name[0].toUpperCase()+
    superhero.name.slice(1)


 
    const superInnerHTML=`
    <div class="img-container">
        <img src="${superhero.image.url}">
    </div>
    <div class="info">
        <span class="number">#${superhero.id.toString().padStart(3,'0')}</span>
        <h3 class="name">${name}</h3>
        <h4 class="name">${superhero.biography['full-name']}
        <h4 class="stats">Publisher: <span>${superhero.biography.publisher}</span></h4>`

    superheroEl.innerHTML=superInnerHTML
    super_container.appendChild(superheroEl)
}