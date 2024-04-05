console.log('ciao mondo')

// Aggiungiamo la componente js di interazione con l’utente.
// Quando l’utente fa click sul bottone submit del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste. 

// Il prezzo finale è dato dal numero di ore per prezzo orario. Supponiamo per semplicità che ogni progetto richieda lo stesso numero di ore di lavoro (es: 10 ore).

// Il prezzo orario per una commissione varia in questo modo:
// se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€/l’ora
// se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€/l’ora
// se la commissione riguarda l’analisi progettuale il prezzo orario è di 33.60€/l’ora


// assegnare le variabili

const codPromo = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']

const btn = document.getElementById('btnCalc')
const printPrice = document.getElementById('price')

const backPrice = 20.50
const frontPrice = 15.30
const projPrice = 33.60



function calcPrev() {
    const job = document.getElementById('inputJob').selectedIndex;
    console.log(job);

    const prices = [backPrice, frontPrice, projPrice];

    if (job == 0) {
        alert('Non hai selezionato un lavoro');
    } else if (job > 0 && job <= prices.length) {
        price = (prices[job - 1] * 10).toFixed(2);
        console.log(price);
        printPrice.innerHTML = 'Prezzo finale: € ' + price;
    }
}

btn.addEventListener('click', calcPrev)




// L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti: YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.

// Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.

// Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro).
