


// Prima di partire a scrivere codice:
// Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima,
// come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno
// la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti.
// Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
// Consigli del giorno:
// 1. Costruiamo del carosello una versione statica contenente solamente un'immagine.
//  Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli
//  riprodurre dinamicamente in js. Potremo quindi usarli come "template".
// 2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
// 3. Al momento giusto(ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"


// Consegna:
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
//     MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro:
// avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

// creo l'array di immagini
const images = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];
// for(let i = 0; i < images.length; i++) {
//     console.log(images[i]);
// }



//     MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array
// fornito e un semplice ciclo for che concatena un template literal (ad esempio).
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1,
// ma costruito dinamicamente attraverso JavaScript.
//     MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva,
// che quindi verrà visualizzata al posto della precedente.

// creo variabili per gli elementi HTML

let upArrowEl = document.getElementById('up-arrow');
let downArrowEl = document.getElementById('down-arrow');
let imageEl = document.querySelector('.image-contained');

// console.log(upArrowEl);
// console.log(downArrowEl);
// console.log(imageEl);


// creo variabile sentinella per l'indice dell'array
let index = 1;

// recupero l'immagine da visualizzare attraverso l'elemento HTML
imageEl.src = 'img/0' + index + '.webp';

// creo l'evento al click sulla freccia che va in su
upArrowEl.addEventListener('click', function() {
    // console.log('click');
    index--;
    imageEl.src = 'img/0' + index + '.webp';
    
    if (index == 1) {
        index = images.length += 1;
    }
    console.log(index);

})

// creo l'evento al click sulla freccia che va in giù
downArrowEl.addEventListener('click', function () {
    // console.log('click');
    index++;
    imageEl.src = 'img/0' + index + '.webp';

    if(index == images.length) {
        index = 0;
    }
    console.log(index);

})




// BONUS 1:
// Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e
// l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
// BONUS 2:
// Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva,
// come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura,
// tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
// Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.