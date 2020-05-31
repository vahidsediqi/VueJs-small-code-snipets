new Vue({
    el: '#app',
    data: {
        courses: ['Python for everyone', 'JavaScript for developers', 'REST API in Python'],
        books: [
            {title: 'HOW TO BECOME A GOOD PROGRAMMER', author: 'VAHID SEDIQI',stock: 10 },
            {title: 'THE SECRET OF HAPPY PROGRAMMERS', author: 'JOHN DOE', stock: 10},
            {title: 'BECOME A SACCESSFUL FREELANCER IN', author: 'ALI RIZA', stock: 10},
            {title: 'WORK FOR MONEY, DESIGN FOR LOVE', author: 'DAVID AIREY', stock: 1} 
        ],
        newBooks: {
            title: '',
            author: '',
            stock: ''
        },

        newCourse: []
    },

    methods: {
        addNewBook: function(event){
            event.preventDefault()          
            // console.log(this.newBooks.title)
            this.books.push(this.newBooks);
            this.newBooks = {}
        },
        addCourse: function(){
        event.preventDefault()          
        this.courses.push(this.newCourse)
        }
    },
})