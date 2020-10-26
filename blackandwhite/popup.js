//déclaration des variables liées aux boutons activer et désactiver
let buttonActivateGrayscale = document.getElementById('activateGrayscale');
let buttonDesactivate = document.getElementById('desactivate');

//fonction permettant d'exécuter le script blackandwhite.js en cliquant sur le bouton activer
buttonActivateGrayscale.addEventListener("click", function() {
      console.log('activateGrayscale');
      browser.tabs.executeScript(null, { file: "blackandwhite.js" });
});

//fonction permettant de désactiver le filtre en rafraichissant la page en cliquant sur le bouton désactiver
buttonDesactivate.addEventListener("click", function() {
      console.log('desactivate');
      browser.tabs.reload();
});

//ajout variables et fonction pour filtre 2 et 3 (à faire)
