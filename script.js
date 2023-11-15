const { createApp } = Vue;

createApp({
    data() {
        return {
            arrayTodo: ["fare la spesa", "giocare a carte", "comprare la nutella"],
            objectTodo: [
            {
                text: "comprare scarpe",
                done: true,                
            },
            {
                text: "vendere armadio",
                done: false,                
            },
            {
                text: "riparare telefono",
                done: false,                
            }
        ]
        }
    },
    created() {

    },
    methods: {
        removeElementFromArray: function(index) {
            this.arrayTodo.splice(index, 1);
        },
        AddElementToArray: function(element) {
            this.arrayTodo.push(element);
        },
        removeElementFromObject: function(index) {
            this.objectTodo.splice(index, 1);
        },
        addElementToObject: function(element) {
            this.objectTodo.push({
                text: element,
                done: false,
            });
        },
        invertDone: function(index) {
            this.objectTodo[index].done = !this.objectTodo[index].done;
        },
    }
}).mount("#app");