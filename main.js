const elUserCard = document.querySelector(".cards");
const elSearch = document.querySelector(".form-control");

const renderPokemons = (array, elUserCard) => {
  elUserCard.textContent = "";
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const newCard = document.createElement("div", "card");
    newCard.className = "cards text-center w-25 ";
    newCard.innerHTML = `
                <div class="cars d-flex  " >
                  <div >
                  <img src="${element.img}" alt="${element.title}">
                  <hr/>
                   <h5> ${element.name}</h5>
                  <p>${element.type}</p>
                  <ul class="card-nav d-flex " style=" list-style:none";>
                  <li class="card-nav-list " style="margin:0px 5px 0 -25px;"><strong>${element.weight}</strong></li>
                  <li><strong>${element.height}</strong></li>
                  </ul>
                  </div>
                </div>
  `;
    elUserCard.appendChild(newCard);
  }
};

renderPokemons(pokemons, elUserCard);

elSearch.addEventListener("change", (e) => {
  e.preventDefault();
  const search = elSearch.value.trim().toLocaleLowerCase();
  const filter = [];
  pokemons.forEach((film) => {
    if (film.name.toLocaleLowerCase().includes(search)) {
      filter.push(film);
    }
  });
  renderPokemons(filter);
});

// 1 Masala
let elOne = Number(prompt("1chi sonni kiriting"));
let elTwo = Number(prompt("2chi sonni kiriting"));

let array = [];
let total = elOne + elTwo;
if (elOne.value && elTwo.value === "") {
  alert("sdjds");
}
console.log(total);

// 2 Masala
let salaries = {
  benzin: 10000,
  moy: 3000,
  filter: 50000,
};
function sumSalaries(object) {
  let sum = 0;

  for (let i in object) {
    const element = object[i];
    sum += element;
  }
  return sum;
}
console.log(sumSalaries(salaries));
