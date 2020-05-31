new Vue({
    el: '#vue-app',
    data: {
        name: 'Vahid Sediqi',
        job: 'Front-end software engineer',
        skills: ['HTML/Css/JavaScript', 'Python', 'ReactJS/VueJs/Flask'],
        website: 'https://www.vahid.tech'
    },
    methods: {
        greet: function(){
            return 'Hello ' + this.name
        }
    },

})

