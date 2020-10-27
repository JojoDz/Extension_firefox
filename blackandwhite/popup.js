//déclaration des variables liées aux boutons activer et désactiver
let buttonActivateGrayscale = document.getElementById('activateGrayscale');
let buttonActivateHue = document.getElementById('activateHue');
let buttonActivateDropshadow = document.getElementById('activateDropshadow');
let buttonDesactivate = document.getElementById('desactivate');

//fonction permettant d'exécuter le script blackandwhite.js en cliquant sur le bouton activer
// Injection du code avec filtre à l'intérieur de tabs.executeScript
buttonActivateGrayscale.addEventListener("click", function() {
      console.log('activateGrayscale');
      browser.tabs.executeScript({
      code:'document.body.style.filter = "grayscale(100%)";'
     });
});

buttonActivateHue.addEventListener("click", function() {
      console.log('activateHue');
      browser.tabs.executeScript({
      code:'document.body.style.filter = "hue-rotate(90deg)";'
     });
});

buttonActivateDropshadow.addEventListener("click", function() {
      console.log('activateDropshadow');
      browser.tabs.executeScript({
      code:'document.body.style.filter = "invert(100%)";'
     });
});

//fonction permettant de désactiver le filtre en rafraichissant la page en cliquant sur le bouton désactiver
buttonDesactivate.addEventListener("click", function() {
      console.log('desactivate');
      browser.tabs.reload();
});
