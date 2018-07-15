var app = new Vue({
    el:'#vue',
    data:{
       message:'message'
    },
    created:function(){
      this.init(); 
    },
    methods:{
       init:function(){
           console.log('www');
       }
    }
})