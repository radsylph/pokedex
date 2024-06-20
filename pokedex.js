async function set() {
  x = document.getElementById("nombre").value;

  const url2 = "https://pokeapi.co/api/v2/pokemon/";
  const url3 = "https://pokeapi.co/api/v2/pokemon-species/";
  var url = url2 + x.toLowerCase();
  var url1 = url3 + x.toLowerCase();
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("Api loaded");
      console.log(data);
      /* fetch(url1)
        .then((res) => res.json())
        .then((data) => {
          let descrip = data.flavor_text_entries[9]["flavor_text"];
          console.log(data);
          console.log(descrip);
          let y = document.querySelector("#descrip");
          y.innerHTML = `<div class="a2 d">
          <p id="prueba" class="prueba">${descrip}</p>
        </div>`;
        });*/
      let descrip = data.species.url;
      let element = document.querySelector("#pokemon");
      let tipos = data.types.map((tipe) => tipe.type.name);
      let tipos2 = data.types;
      let formas = data.abilities.map((form) => form.ability.name);
      let nombre = data.name;
      let orden = data.order;
      console.log(descrip);
      console.log(tipos);
      element.innerHTML = `

    <div class = "pokedex-frame">
    <div class = "pokedex-screen">       
    <div class = "budy">
    <div class = "a3">
    <p>Name: ${nombre}</p> 
    <p>Pokedex Number: ${orden}</p> 
    <p id = "tipitos">Types:</p>
    <p>Abilities: ${formas}</p>   
    </div>
    
    </div>
   
    </div>
    <div class = "botones">

    <div class = "btnl"><div class = "trl"></div></div>

    <div class = "btnc"> <div class = "tru"><div class="tru2"></div></div><div class = "trd"><div class = "trd2"></div></div></div>

    <div class = "btnr"><div class = "trr"></div></div>
    </div>
    </div>
   
    <div class ="pokedex-frame s"> 
    <div class ="pokedex-screen"> 
    <div class ="bsprite"> 
    <img class = "sprite" src="${data.sprites.front_default}">
    <img class = "sprite" src="${data.sprites.back_default}">
  
    </div>
    </div>
    </div>
    </div>

    `;
      let x2 = document.getElementById("tipitos");
      let pruebatipos;
      for (let index = 0; index < tipos2.length; index++) {
        pruebatipos = document.createElement("span");
        pruebatipos.innerText = tipos2[index]["type"]["name"];
        pruebatipos.classList.add("tipos");
        pruebatipos.classList.add(tipos2[index]["type"]["name"]);
        x2.appendChild(pruebatipos);
        console.log(pruebatipos);
      }
    })
    .catch((error) => ds());
}

function ds() {
  setTimeout(() => {
    as();
    setTimeout(() => {
      cd();
    }, "2000");
  }, "10");
}

function as() {
  //prueba para que la pokebola solo se mueva cuando halla un error en el nombre del pokemon
  let obj = document.querySelector(".pokeball");
  obj.style.animation = "shake 2s ";
}

function cd() {
  let obj = document.querySelector(".pokeball");
  obj.style.animation = "nose 2s";
}

//https://www.youtube.com/watch?v=dVtnFH4m_fE
