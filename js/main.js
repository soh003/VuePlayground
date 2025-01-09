const app = Vue.createApp({
    data(){
        return{
            intro:'Playgroundstable',
            playgrounds: [],
            newPlayground:{
                name:'',
                MaxChildren: null,
                MinAge: null,
            },

        }
    }, 
    methods: {        
        getAll(){
            axios.get('https://playgroundrest20250109130538.azurewebsites.net/api/Playgrounds')
            .then(Response=>{
                this.playgrounds=Response.data;
            })
            .catch(
                error=>{
                    console.log(error)
                }
              )
        }
    },
    computed:{
        myComputed(){
            return''
        },
    }


})