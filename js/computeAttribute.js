var vm =new Vue({
    el:'#vue',
    data:{
        message:"hello world",
        firstName:"guo",
        lastName:"zhengxu",
        fullName:'guozhengxu'
    },
    created:function () {
        
    },
    methods:{
        init:function () {
            
        }
    },
    computed:{
        reversedMessage:function () {
            return this.message.split("").reverse().join("");
        },
        now:function () {
            return Date.now();
        }
    },
    watch:{
        firstName:function (val) {
            this.fullName=val+this.lastName;
        },
        lastName:function (val) {
            this.fullName=this.firstName+val;
        }
    }
})