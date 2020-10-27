//déclaration des variables liées aux boutons activer et désactiver
let buttonActivateGrayscale = document.getElementById('activateGrayscale');
let buttonActivateHue = document.getElementById('activateHue');
let buttonActivateDropshadow = document.getElementById('activateDropshadow');
//fonction permettant d'exécuter le script blackandwhite.js en cliquant sur le bouton activer
// Injection du code avec filtre à l'intérieur de tabs.executeScript
buttonActivateGrayscale.addEventListener("click", function() {
      console.log('activateGrayscale');
      if (buttonActivateGrayscale.getAttribute("data-gris") == "true") {
          buttonActivateGrayscale.innerHTML = "C'est désactivé";
          browser.tabs.reload();
          buttonActivateGrayscale.setAttribute("data-gris","false");
    } else {
          buttonActivateGrayscale.innerHTML = "C'est activé";
          buttonActivateGrayscale.setAttribute("data-gris","true");
          browser.tabs.executeScript({
          code:'document.body.style.filter = "grayscale(100%)";'
         });
    }
});

buttonActivateHue.addEventListener("click", function() {
      console.log('activateHue');
      if (buttonActivateHue.innerHTML == "off") {
      buttonActivateHue.innerHTML = "on";
      browser.tabs.executeScript({
      code:'document.body.style.filter = "hue-rotate(90deg)";'
     });
    } else {
      buttonActivateHue.innerHTML = "off";
      browser.tabs.executeScript({
      code:'document.body.style.filter = "hue-rotate(0deg)";'
     });
    }
});

buttonActivateDropshadow.addEventListener("click", function() {
      console.log('activateDropshadow');
      buttonActivateDropshadow.innerHTML = "Désactiver";
      browser.tabs.executeScript({
      code:'document.body.style.filter = "invert(100%)";'
     });
});
