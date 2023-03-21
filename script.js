let selectValue = "All";

const home = HouseList[0];
const homes = HouseList;
const section = document.getElementById('homes')


const createCard = (home) => {
  const card = `<article class="card-body">
  <h1 class="card-title"> ${home.name}</h1 >
  <h2 class="card-description">${home.desc}</h2>
  <img
  class="card-image"
  src="${home.img}"
  />
  <button class="card-button">delete</button>
  </article > `
  const div = document.createElement('div'); //creer variable div
  div.innerHTML = card;
  section.appendChild(div);
}

const render = () => {
  section.innerHTML = "";
  homes.forEach((home) => {
    if (selectValue === home.type || selectValue === "All") {
      createCard(home);
    }

  });
}
render(home);

const filter = () => {
  selectValue = document.getElementById('select').value;
  render(selectValue);
}


/*


2 - Dans le fichier index.html ajoute au "" du <header> un événement onclick avec comme valeur la fonction filter().
 Dans le fichier script.js, créer la fonction filter(). Puis assigner a la variable selectValue créée précedement, la valeur de la balise <select>.

...getElementById('app').value
3 - Ajouter en bas de filter() un appel à la fonction render().

4 - Dans la boucle de render() ajoute un if avant createCard() pour filtrer les résultats. Dans un 1er temps verifie que le type des maisons est égale a la valeur du selectValue. !!! WARNING : aucune maison ne s'affiche, joue avec le <select> voir si ta condition est bonne !!!

5 - Maintenant récuperons toutes les maisons, ajoutons au if une condition ( || ) si selectValue est égale à "All".

Bien joué à toi, tu as créé un outil qui satisfera John Doe. Il a l'air très heureux.*/