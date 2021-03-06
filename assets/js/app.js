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
    data: {
        text_user: '',
        index: 0,
        css_class: 'text-decoration-line-through',
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
        tasks_done: [],
        tasks_trash: []
    },
    methods: {
        getText() {
            const myNewTask = {
                text: this.text_user,
                done: false,
            }
            this.tasks.push(myNewTask)
        },
        completedText(index) {
            // console.log(this.tasks[index].done); // - true
            // console.log(index); // - 0
            this.tasks[index].done = true;
            //console.log(this.tasks[index]);
            this.tasks_done.push(this.tasks[index])
        },
        restartText(index) {
            //console.log('ripristino testo');
            this.tasks[index].done = false;
            this.tasks_done.splice(this.tasks[index], 1)
        },
        remuveText(index) {
            //console.log('tolgo testo');
            //console.log(this.tasks[index]);
            console.log(this.tasks.length);
            this.tasks.splice(index, 1)
            this.tasks_done.splice(this.tasks[index], 1)
            this.tasks_trash.push(this.tasks[index])
        }
    }
})