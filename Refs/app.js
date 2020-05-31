new Vue ({
    el: '#app',
    data: {
      Todos: [] ,
      divText: 'The div text changed'
    },

    methods: {
       readRefsFromInput: function() {
           console.log(this.$refs.input.value)
           this.Todos.push(this.$refs.input.value)
       },

       readRefsFromdiv:function(){
          console.log(this.$refs)
        //   .text is defined by us in html
          this.$refs.text.textContent = this.divText;
          this.$refs.text.style.backgroundColor = 'yellow';
          this.$refs.text.style.fontSize = '25px';
          this.$refs.text.style.marginTop = '25px';

       }
    },
    
})