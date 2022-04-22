/*
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
 Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
 Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

*/
const app = new Vue({
    el: '#app',
    index: 0,
    css_class: 'text-decoration-line-through',
    data: {
        // array_new: {
        //     text_user: '',
        //     done: 'false',
        // },
        text_user: '',
        tasks: [{
                text: 'Andare in palestra',
                done: true
            },
            {
                text: 'Andare a fare la spesa',
                done: true
            },
            {
                text: 'Ritirare la biancheria',
                done: false
            },
            {
                text: 'Preparare la cena',
                done: false
            },
        ],
    },
    methods: {
        getText() {
            this.tasks.unshift(this.text_user)

        },
        cutText() {
            console.log('taglio testo');
        },
        restartText() {
            console.log('ripristino testo');
        },
        remuveText() {
            console.log('tolgo testo');
        }
    }
})