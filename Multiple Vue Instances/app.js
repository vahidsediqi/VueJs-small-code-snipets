var one = new Vue ({
    el: '#app1',
    data: {
      title: 'Vue App one'
    },

    methods: {
      
    },

    computed: {
        greet: function(){
            return 'Hello from App 1'
        }
    },

    
})

var two = new Vue ({
    el: '#app2',
    data: {
        title: 'Vue App two'
    },

    methods: {
        changeTitle: function(){
            one.title = 'App one title changed!'
        }
    },

    computed: {
        greet: function(){
            return 'Hello from App 2'
        }
        
    },

    
})