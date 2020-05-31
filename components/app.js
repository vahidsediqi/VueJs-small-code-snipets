// component should return data as a function
Vue.component('greeting',{
    template:'<p> Hello, {{ name }} I am a Component Template .<button v-on:click="changeName">change the name</button></p>',
    data: function(){
        return{
            name: 'Vahid Sediqi'
        }
    },

    methods: {
        changeName: function(){
            if(this.name == 'Vahid Sediqi')
            {
                return this.name = 'Kabir Sediqi'

            } else if(this.name == 'Kabir Sediqi') {
                return this.name = 'Sediqi Sediqi'
            }
        }
    },
})

new Vue({
    el: '#app-one',
})

new Vue({
    el: '#app-two',
})