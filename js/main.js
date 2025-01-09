const app = Vue.createApp({
    data(){
        return{
            intro:'Playgroundstable',
            playgrounds: [],
            newPlayground:{
                name:'',
                maxChildren: null,
                minAge: null,
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
        },
        AddMethod(){
            const newPlayground = {
                name: this.newPlayground.name,
                maxChildren: this.newPlayground.maxChildren,
                minAge: this.newPlayground.minAge,
                
            };

            axios.post('https://playgroundrest20250109130538.azurewebsites.net/api/Playgrounds', newPlayground)
            .then(Response=>{
                console.log('Playground added', Response.data);
                this.newPlayground.push(Response.data);
            })
            .catch(error=>{
                console.log(error);
            })
        }
    },
    computed:{
        myComputed(){
            return''
        },
    }


})