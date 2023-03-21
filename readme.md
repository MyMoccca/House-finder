# House Finder

Prérequis : cloner ce _dépôt_.

Bonjour, je m'appelle John Doe. Suite à de forts problèmes d'intempéries dans ma région, je souhaiterais changer d'habitation. Or, je ne sais pas quel outil utiliser. Pourriez-vous me créer un petit site internet pour me permettre de trouver une maison plus rapidement ?

Pour ce nouvel atelier, tu devras créer un site internet à base de manipulation de DOM. Les fichiers _style.css_, _index.html_, _script.js_ et _data.js_ sont déjà fournis et sont déjà liés à ton fichier _index.html_. Libre à toi de styliser l'atelier.

## Time to code !

Notre objectif est de créer des cartes avec les informations fournies dans le fichier _data.js_.
Ces cartes devront comprendre un titre, une description et une image.
Le site devra avoir un filtre par type de maison.
Technique utilisée : Template String.

## Une étape après l'autre

## 1st Part - Preparer les fondations

1 - Créer une variable `section` qui récupère via le `document.get...` la balise `<section>` qui nous servira de point d'ancrage pour insérer des éléments.

2 - Créer une fonction `createCard()` qui servira pour générer les cartes. À l'intérieur de celle-ci, ajoute une variable `card`. Donne-lui la valeur du code html de toute la balise `<article>`.

```
 const card = `
 <div>
  ...
 </div>`;
```

3 - Dans la fonction `createCard()`, créer une variable `div` qui va générer une `<div>` via la methode `createElement()`. Insère la valeur de `card` dans la `div` via `innerHTML`. Puis `appendChild()` celle-ci dans la variable `section`. Ajoute sous la fonction un appel à `createCard()`.
Si un élément s'ajoute à votre page html, vous pouvez passer à la suite.

4 - Créer une variable `home` en haut de ton fichier _script.js_. Et assigne lui le 1er objet de _data.js_.

```
const home = {
  name: "",
  ...
}
```

5 - Passe la variable `home` dans l'appel de la fonction `createCard()` et assure toi de la récupérer dans ta fonction en paramètre.

6 - À l'intérieur de la fonction `createCard(data)`, l'objectif est de modifier le `template string` en utilisant les données reçues en paramètre.

```
<h1 class="card-title> ${data.title}</h1>
```

7 - Créer une variable `homes` (array) sous la variable `home`, qui va contenir l'intégralité du tableau de _data.js_.

8 - L'objectif est de boucler sur la variable `homes` pour créer autant de cartes qu'il y a d'objets dans la variable.

9 - Créer une fonction `render()` qui englobe la boucle puis appelle-la en dessous.

10 - En haut de la fonction `render()` modifie le HTML de la balise `<section>` pour qu'il égale a une string vide.

## 2nd Part - utilisation du filtre

1 - En haut de ton fichier _script.js_, créer une variable globale `selectValue` que l'on initialisera à "All".

2 - Dans le fichier _index.html_ ajoute au "<button>" du `<header>` un événement `onclick` avec comme valeur la fonction `filter()`. Dans le fichier _script.js_, créer la fonction `filter()`. Puis assigner a la variable `selectValue` créée précedement, la valeur de la balise `<select>`.

```
...getElementById('app').value
```

3 - Ajouter en bas de `filter()` un appel à la fonction `render()`.

4 - Dans la boucle de `render()` ajoute un `if` avant `createCard()` pour filtrer les résultats. Dans un 1er temps verifie que le type des maisons est égale a la valeur du `selectValue`.
!!! WARNING : aucune maison ne s'affiche, joue avec le `<select>` voir si ta condition est bonne !!!

5 - Maintenant récuperons toutes les maisons, ajoutons au `if` une condition ( || ) si `selectValue` est égale à "All".

Bien joué à toi, tu as créé un outil qui satisfera John Doe. Il a l'air très heureux.
