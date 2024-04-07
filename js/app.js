// Aggiungiamo la componente js di interazione con l’utente.
// Quando l’utente fa click sul bottone submit del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste. 

// Il prezzo finale è dato dal numero di ore per prezzo orario. Supponiamo per semplicità che ogni progetto richieda lo stesso numero di ore di lavoro (es: 10 ore).

// Il prezzo orario per una commissione varia in questo modo:
// se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€/l’ora
// se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€/l’ora
// se la commissione riguarda l’analisi progettuale il prezzo orario è di 33.60€/l’ora


// assegnare le variabili

const codiciPromo = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
let sconto = 0;

const btn = document.getElementById('btnCalc');
const printPrice = document.getElementById('price');

const backPrice = 20.50;
const frontPrice = 15.30;
const projPrice = 33.60;



function calcPrev(event) {
    event.preventDefault();
    calcSconto();

    const job = document.getElementById('inputJob').selectedIndex;
    // console.log(job);

    const prices = [backPrice, frontPrice, projPrice];

    if (job == 0) {

        alert('Non hai selezionato un lavoro.');

    } else if (job > 0 && job <= prices.length) {
        let price = (prices[job - 1] * 10);
        console.log(price);

        let priceSconto = price * sconto;
        let priceTot = price - priceSconto;

        printPrice.innerHTML = 'Prezzo finale: € ' + priceTot;

    }
}

btn.addEventListener('click', calcPrev)

// PER CALCOLARE LO SCONTO
// trasformare la stringa in caps
// controllare che il codice sia corretto
// applicare sconto

const inputPromo = document.getElementById('cod_promo').value;
// console.log(inputPromo);
const capsPromo = inputPromo.toUpperCase();
// console.log(capsPromo);


function calcSconto() {
    for (let i = 0; i < codiciPromo.length; i++) {
        const codice = codiciPromo[i];
        console.log(codice)

        if (capsPromo == codice) {
            sconto = 0.25;
            break;
        }
    }   if (sconto != 0.25) {
        alert('Il codice promozionale inserito non è valido!')
    }
}


// L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti: YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.

// Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.

// Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro).
