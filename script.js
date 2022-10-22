// Vue code
const vueCDN = Vue.createApp({ //Vue.createApp is a method
    data(){
        return {
            heading: 'VUE CDN DEMO',
            CounterComponent: false,
            countValue: 0
        }
    },
    methods: {
        toggleCounterComponent(){
            this.CounterComponent = !this.CounterComponent
        }
    }
})
// Mounting the newly created app (vueCDN) into a id of vueCDN (html id).
vueCDN.mount('#vueCDN')


// Console Message 
info_str = " __ _\n"+
"/ _(_)_ __ ___  _ __ __ _\n"+
"| |_| | '__/ _ \| '__/ _` |\n"+
"|  _| | | | (_)| | | (_| |\n"+
"|_| |_|_|  \___/|_|   \__,_|"
console.log(info_str)