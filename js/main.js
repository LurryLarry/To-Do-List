
var listankohta; // luodaan globaaleja muuttujia
var linkki;
var kokolista;


function uusiTehtava() { // luodaan funktio nimeltä uusiTehtava joka on sijoitettu nappulaan onclickillä (index.html:ssä)
  
 const tehtava = document.getElementById("tehtava"); // muuttujan tehtava arvoksi input field tehtava
 console.log(typeof tehtava.value);
  if (tehtava.value === "") { // jos input fieldissä ei ole mitään 
    console.log(1222);
    alert("Lisää tehtävä"); // tulee alert
  } else { // muutoin

    listankohta = document.createElement("li"); // luodaan uusi <li> elementti
    listankohta.className = "listantehtava"; // asetetaan luokan nimi 
    listankohta.appendChild(document.createTextNode(tehtava.value)); // lisätään listankohtaan inputin arvo
    linkki = document.createElement("a"); // luodaan uusi <a> elementti
    linkki.className = "poista-tehtava"; // asetetaan luokan nimi
    linkki.innerHTML = '<i class="fa fa-remove"></i>'; // asetetaan x ikoni
  
    listankohta.appendChild(linkki); // lisätään linkki-ikoni listankohdan perään
  
    collection.appendChild(listankohta); // lisätään listankohta <ul>:ään
    listankohta.innerHTML += "<hr><br>"; // lisätään listankohtaan html vertikaalinen viiva ja rivinvaihto
    tehtava.value = ""; // input field tyhjennetään

    event.preventDefault(); // estää default eventin esim jos input kenttä olisi submit
    
  }
}

collection.onclick = poistaYksi; // lisätään ul-listaan onclick event poistaYksi

function poistaYksi(e) { // luodaan funktio nimeltä poistaYksi ja laitetaan e parametri joka toimii funktion oliona
  
  
  var kohde = e.target; // luodaan muuttuja kohde joka referoi klikattua tagia
  console.log(kohde);
  if (kohde.className === "fa fa-remove") { // jos klikatulla tagilla on x-ikonin classname
    
    kohde.closest('li').remove(); // etsitään lähin listankohta ja poistetaan se
  }
  console.log(1111);
  return false; // muutoin ei tapahdu mitään
}

function poistaTehtavat() { // luodaan poistaTehtavat funktio joka on onclick nappulalla

  kokolista = document.getElementById("collection"); // kokolista muuttujan arvoksi ul lista
  while (kokolista.firstChild) { // silloin kun listan ensimmäinen tehtävä on olemassa poistetaan aina ylin tehtävä kunnes lista on tyhjä
    console.log(kokolista.firstChild);
    kokolista.removeChild(kokolista.firstChild); 
  }
      
}