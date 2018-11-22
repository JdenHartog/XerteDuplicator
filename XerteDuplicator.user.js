// ==UserScript==
// @name         XerteDuplicator
// @version      1.4
// @description  Adds button to XOT to duplicate selected item multiple times
// @author       JdenHartog
// @downloadURL  https://github.com/JdenHartog/XerteDuplicator/raw/master/XerteDuplicator.user.js
// @updateURL    https://github.com/JdenHartog/XerteDuplicator/raw/master/XerteDuplicator.user.js
// @supportURL   https://github.com/JdenHartog/XerteDuplicator/issues
// @match        https://xot.12change.eu/edithtml*
// @grant        none
// @run-at       document-end
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    var hook = document.getElementById("#header_images");
	var container = document.createElement("div");
    container.style.border = "10px solid #A1A1A1";

    var text = document.createElement("div");
    text.style.cssFloat = "left";
    text.style.margin = "7px";
    text.appendChild(document.createTextNode("Totaal gewenst aantal:"));
    container.appendChild(text);

    var numberInput = document.createElement("input");
	numberInput.setAttribute("type", "number");
    numberInput.style.cssFloat = "left";
    numberInput.style.width = "40px";
    numberInput.value = 2;
    container.appendChild(numberInput);

	var button = document.createElement("button");
	button.style.height = "35px";
    button.style.fontSize = "15px";
    button.appendChild(document.createTextNode("Start dupliceren"));
    container.appendChild(button);

    hook.parentNode.insertBefore(container, hook.nextSibling);

    button.addEventListener("click", function() {
        var copyButton = window.jQuery("#copy_button");
        var i;
        for (i = 0; i < numberInput.value-1; i++) {
            setTimeout(function(){ copyButton.click(); }, 500*i);
            if (i == numberInput.value-2) {
                setTimeout(function(){ alert('Klaar met dupliceren'); }, (500*i)+1200);
            }
        }
    });

    window.jQuery.noConflict();
})();
