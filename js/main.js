const app = Vue.createApp({
    data(){
        return{
            intro:'Playgroundstable',
            playgrounds: [],
            newPlayground:{
                Name:'',
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
        },
        addMethod(){
            const newPlayground = {
                name: this.newPlayground.name,
                maxChildren: this.newPlayground.maxChildren,
                minAge: this.newPlayground.minAge,
                
            };

            axios.post('https://playgroundrest20250109130538.azurewebsites.net/api/Playgrounds', newPlayground)
            .then(Response=>{
                console.log('Playground added', Response.data);

            //Opdaterer tabellen
            this.getAll();
            //Ryd inputfelter    
            this.newPlayground = { name: '', maxChildren: '', minAge: '' };

                this.newPlayground.push(Response.data);
            })
            .catch(error=>{
                console.log(error);
            })
        },
        updateMethod(){
            axios.put(`https://playgroundrest20250109130538.azurewebsites.net/api/Playgrounds/${this.newPlayground.id}`, this.newPlayground)
            .then(Response => {
                console.log('Playground updated', Response.data);
                this.getAll(); // Hent den opdaterede liste
                this.newPlayground = { id: null, name: '', maxChildren: null, minAge: null }; // Ryd inputfelter
            })
            .catch(error => {
                console.log(error);
            });
            
        },
        editPlayground(playground){
            this.newPlayground = { ...playground }; // Kopier værdierne til formularen
        }
    
    },
    computed:{
        myComputed(){
            return''
        },
    }


})