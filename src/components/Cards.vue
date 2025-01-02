
    <template>
    <section v-if="elements.length > 0" id="cardList">
        <template v-for="element in elements" :key="element.cca3">
            <div class="card" >
                <img :src = "element.flags.png" alt="">
                <h3>{{ element.name.common }}</h3>
                <ul>    
                    <li>Population : {{ element.population }}</li>
                    <li>Region : {{ element.region }}</li>
                    <li>Capital : {{ element.capital?.[0] || "No capital"}}</li>
                </ul>
            </div>
        </template>
    </section>

    </template> 


    <script setup> 

    import { useFilter } from "@/store/useUrlStore"
    import { ref, watchEffect, onMounted} from "vue"

    const filter = useFilter();
    const elements = ref([])

    onMounted(async ()=>{
        await fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then(data => {
            elements.value = data
            }
        )
    })

    watchEffect(() => {
        if (filter.url === "https://restcountries.com/v3.1/") {
        fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then(data => {
            elements.value = data
            }
        )
        .catch(err => console.log(err.messages)) 
        }else{
            fetch(filter.url)
            .then((res) => res.json())
            .then(data => {
                elements.value = data
                console.log(data);
                }
            )
            .catch(err => console.log(err.messages))
        }
    })

    </script>

    <style scoped> 

        #cardList{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: space-around;
            flex-wrap: wrap;
        }

        .card{
            width: calc((100% / 4) - 80px);
            height: 450px;
            background-color: var(--card-color);
            margin-top: 80px;
            box-shadow: 1px 1px 5px var(--shadow);
            text-align: justify;
            border-radius: 25px;
            }

        .card:has( + *){
            margin-bottom: 20px;
        }

        .card img{
            width: 100%;
            max-height: 200px;
            border-radius: 25px 25px 0px 0;
            box-shadow: 0px 5px 5px var(--shadow);
        }

        h3{
            text-align: center;
            margin-bottom: 25px;
        }

        ul{
            list-style: none;
            line-height: 50px;
            margin: auto;
            width: fit-content;
        }

        .card:hover{
            transform: scale(1.3);
        }

    </style>