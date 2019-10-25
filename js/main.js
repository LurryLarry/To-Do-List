function uusiTehtava(e) { // luodaan funktio nimeltä uusiTehtava
  if (task.value === "") { // jos input fieldissä ei ole mitään 
    alert("Lisää tehtävä"); // tulee alert
  } else { // muutoin

    const uusi = document.createElement("li");  // luodaan muuttuja jonka arvo on pysyvä ja joka luo lista itemin
    const syote = document.getElementById("task"); // luodaan muuttuja jonka arvo on pysyvä ja joka tallettaa käyttäjän kirjoittaman taskin
    uusi.innerHTML = syote.value; // listan arvoksi vaihdetaan käyttäjän task input
    syote.value = "";
    document.getElementById("collection").appendChild(uusi); // lisätään collection ul-listaan muuttujan uusi arvo eli käyttäjän task item
    console.log(123);
 
  }
}

function poistaTehtavat(e) { // luodaan funktio nimeltä poistaTehtavat
  
        const tehtavaLista = document.getElementById('collection') // luodaan muuttuja joka sisältää collection listan
        tehtavaLista.remove() // removella voimme poistaa muuttujan arvon joka on lista
  }

