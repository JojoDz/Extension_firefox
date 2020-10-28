//déclaration des variables liées aux boutons activer et désactiver
let buttonActivateGrayscale = document.getElementById('activateGrayscale');
let buttonActivateHue = document.getElementById('activateHue');
let buttonActivateDropshadow = document.getElementById('activateDropshadow');
//fonction permettant d'exécuter le script blackandwhite.js en cliquant sur le bouton activer
//FILTRE GRIS
buttonActivateGrayscale.addEventListener("click", function() {
      console.log('activateGrayscale');
      if (buttonActivateGrayscale.getAttribute("data-gris") == "true") {
          buttonActivateGrayscale.innerHTML = "C'est désactivé";
          browser.tabs.reload();
          buttonActivateGrayscale.setAttribute("data-gris","false");
    } else {
          buttonActivateGrayscale.innerHTML = "C'est activé";
          buttonActivateGrayscale.setAttribute("data-gris","true");
          // Injection du code avec filtre à l'intérieur de tabs.executeScript
          browser.tabs.executeScript({
          code:'document.body.style.filter = "grayscale(100%)";'
         });
    }
});
//FILTRE HUE
buttonActivateHue.addEventListener("click", function() {
      console.log('activateHue');
      if (buttonActivateHue.getAttribute("data-bleu") == "false") {
            buttonActivateHue.innerHTML = "C'est activé";
            buttonActivateHue.setAttribute("data-bleu", "true");
            browser.tabs.executeScript({
            code:'document.body.style.filter = "hue-rotate(90deg)";'
            });
    } else {
      buttonActivateHue.innerHTML = "C'est désactivé";
      browser.tabs.reload();
      buttonActivateHue.setAttribute("data-bleu","false");
    }
});
//FILTRE INVERT
buttonActivateDropshadow.addEventListener("click", function() {
      console.log('activateDropshadow');
      if (buttonActivateDropshadow.getAttribute("data-rose") == "false") {
            buttonActivateDropshadow.innerHTML = "C'est activé";
            buttonActivateDropshadow.setAttribute("data-rose", "true");
            browser.tabs.executeScript({
            code:'document.body.style.filter = "invert(100%)";'
            });
    } else {
      buttonActivateDropshadow.innerHTML = "C'est désactivé";
      browser.tabs.reload();
      buttonActivateDropshadow.setAttribute("data-rose","false");
    }
});
