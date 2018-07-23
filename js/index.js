(function () {
    var vm = new Vue({
        el: '#vue',
        data: {
            message: 'message',
            pickerValue:'06:01',
            mySwiper: null
        },
        created: function () {
            this.init();
            this.initSwiper();
        },
        mounted: function () {
            //mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕后执行js,要用nextTick
            this.$nextTick(function () {
                // Code that will run only after the entire view has been rendered
            })
        },
        methods: {
            init: function () {
                console.log('www');
            },
            initSwiper: function () {
                var _ = this;
                // 事件循环 需要在视图更新以后，基于新的视图进行操作 在 created 和 mounted 阶段，如果需要操作渲染后的试图，要使用 nextTick
                // 方法。
                Vue.nextTick(function () {
                    _.mySwiper = new Swiper("#header-swiper", {
                        pagination: {
                            el: '.swiper-pagination'
                        },
                        autoplay: true
                    })
                })
            },
            handleClick: function () {
                this.$toast('hello world');
            },
            openPicker:function() {
                this
                    .$refs
                    .picker
                    .open();
            },
            confirmPicker:function(value){
                this.$toast(value+" "+this.pickerValue);
            }
        }
    })
})()