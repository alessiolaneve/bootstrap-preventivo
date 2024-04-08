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

    const prices = [backPrice, frontPrice, projPrice];

    if (job == 0) {

        alert('Non hai selezionato un lavoro.');

    } else if (job > 0 && job <= prices.length) {
        let price = (prices[job - 1] * 10);
        console.log(price)
        let priceSconto = price * sconto;
        console.log(priceSconto)
        let priceTot = price - priceSconto;
        console.log(priceTot)
        let priceInt = Math.floor(priceTot);
        let priceDec = Math.floor((priceTot * 100) - (priceInt * 100));
        if (priceDec >= 0 && priceDec <= 9) {
            priceDec = "0" + priceDec.toString();
        }
        printPrice.innerHTML = `Prezzo finale <br> €  ${priceInt}<span style="font-size: 24px; color: #969090;">,${priceDec}`;

    }
}

btn.addEventListener('click', calcPrev)


const inputPromo = document.getElementById('cod_promo').value;

const capsPromo = inputPromo.toUpperCase();



function calcSconto() {
    let codiceVal = false;

    for (let i = 0; i < codiciPromo.length; i++) {
        const codice = codiciPromo[i];


        if (capsPromo == codice) {
            sconto = 0.25;
            console.log(sconto)
            codiceVal = true;
            break;
        }
    }
    if (codiceVal == false && inputPromo != "") {
        alert('Il codice promozionale inserito non è valido!')
    }
}

// L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti: YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.

// Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.

// Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro).
