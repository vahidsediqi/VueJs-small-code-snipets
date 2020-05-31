new Vue ({
    el: '#app',
    data: {
       available: false,
       nearby: false
    },

    methods: {
        changeClass: function() {
            if (danger) {
                return 'warning'
            }
        }
    },
    
})