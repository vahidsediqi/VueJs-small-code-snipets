new Vue ({
    el: '#app',
    data: {
      age: 25,
      x: 0,
      y: 0  
    },

    methods: {
        add: function(inc){
            this.age += inc;
        },
    sub: function(dec){
        if(this.age > 1){
            return this.age -= dec
        }
        else {
            return 1
        }
        
    },

    updateXY: function(event){
        this.x = event.offsetX;
        this.y = event.offsetY
    }
    
    },
})