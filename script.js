// Vue code
const vueCDN = Vue.createApp({ //Vue.createApp is a method
    data(){
        return {
            heading: 'VUE CDN DEMO',
            CounterComponent: false,
            BlogComponent: false,
            countValue: 0,
            blog:'',
            blogs:[],
        }
    },
    methods: {
        toggleX(){
            this.CounterComponent = !this.CounterComponent;        
            this.BlogComponent =  false;
        },
        toggleY(){
            this.BlogComponent = !this.BlogComponent;        
            this.CounterComponent =  false;
        },
        storeBlogs(){
            this.blogs.push(this.blog);
            e.preventDefault();
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