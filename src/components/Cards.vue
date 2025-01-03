
    <template>
    <section v-if="elements.length > 0" id="cardList">
        <template v-for="element in elements" :key="element.cca3">
            <RouterLink class="card" :to='"/details/"+ element.cca3' @click="choseCountry(element.cca3)">
                <img :src = "element.flags.png" alt="">
                <h3>{{ element.name.common }}</h3>
                <ul>    
                    <li>Population : {{ new Intl.NumberFormat("fr-FR").format(element.population) }}</li>
                    <li>Region : {{ element.region }}</li>
                    <li>Capital : {{ element.capital?.[0] || "No capital"}}</li>
                </ul>
            </RouterLink>
        </template>
    </section>

    </template> 


    <script setup> 

    import { useFilter } from "@/store/useUrlStore"
    import { ref, watch, onMounted} from "vue"

    const filter = useFilter();
    const elements = ref([])

    const fetchData = async (url) => {
        try {
            const res = await fetch(url,{mode: 'cors'})
            const data = await res.json();
            elements.value = data; // Update country list
        } catch (err) {
            console.log(err.message);
        }
    };

    onMounted(async ()=>{
        fetchData("https://restcountries.com/v3.1/all")
    })
    
    watch(() => filter.url, (newUrl) => {
        fetchData(newUrl)
    })    

    const choseCountry = (cca3) => {
        filter.search('https://restcountries.com/v3.1/alpha/'+cca3)
    }

    </script>

    <style scoped> 

    .card{
        width: calc(90% - 10px);
        aspect-ratio: 2/1;
        background-color: var(--card-color);
        margin-top: 80px;
        box-shadow: 1px 1px 5px var(--shadow);
        text-align: justify;
        border-radius: 25px;
    }

    .card{
        margin-bottom: 10px;
    }
        
    .card img{
        width: 100%;
        height: 200px;
        border-radius: 25px 25px 0px 0;
        box-shadow: 0px 5px 5px var(--shadow);
    } 

    #cardList{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: space-around;
            flex-wrap: wrap;
    }


    h3{
        text-align: center;
        margin: 25px 0px;
    }

    ul{
        list-style: none;
        line-height: 30px;
        margin: auto;
        width: fit-content;
    }

    @media (min-width: 768px) {
        .card{
            width: calc((100% / 2) - 80px);
            aspect-ratio: 2/1;
        }
        
        .card:hover{
            transform: scale(1.15);
        }
    }
    
    @media (min-width: 1280px) {
        .card{
            width: calc((100% / 4) - 60px);
            height: 400px;
        }

        ul{
            line-height: 40px;
        }
    }
        
    </style>