<script setup>

    import { useRoute } from "vue-router";
    import { ref, onMounted} from "vue"

    const route = useRoute();
    let element = ref(null);

onMounted(async() => {

        const countryId = route.params.id;
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryId}`)
        const data = await res.json();
        element.value = data[0];
        console.log(element.value);
        
})

</script>

    <template>
        <section v-if="element" class="container">
            <div class="card">
                <h1>{{ element.name.common }}</h1>
                    <img :src = "element.flags.png" alt="">
                    <ul>    
                        <li>Population : {{ new Intl.NumberFormat("fr-FR").format(element.population) }}</li>
                        <li>Region : {{ element.region }}</li>
                        <li>Capital : {{ element.capital?.[0] || "No capital"}}</li>
                        <li>Démonymes : {{ element.demonyms.eng.m }}</li>
                        <li>Carte : <a :href="element.maps.googleMaps" target="blank">{{ element.maps.googleMaps }}</a></li>
                        <li>Membre des nations Unies : 
                            <span v-if="element.unMember">Oui</span>
                            <span v-else>Non</span>
                        </li>
                        <li>Superficie : {{ new Intl.NumberFormat("fr-FR").format(element.area) }}km²</li>
                        <li>Devise: {{ Object.values(element.currencies)[0].name }} ({{ Object.values(element.currencies)[0].symbol }})</li>
                        <li>Indice téléphonique : {{ element.idd.root }}{{ element.idd.suffixes[0] }}</li>
                        <li>Cordonnée : lat {{ element.latlng[0] }}° long {{ element.latlng[1] }}°</li>
                    </ul>
            </div>
        </section>
    </template>

<style scoped>
    .container{
        margin: auto;
        display: flex;
        justify-content: center;
        text-align: center;
        width: 80%;
    }
    
    h1{
        font-size: 4em
    }
    
    img{
        width:80%
    }

    ul{
        list-style: none;
    }

    li{
        font-size: 1.5em;
        line-height: 40px;
    }
    

@media (min-width: 768px) {
    h1{
        font-size: 5em
    }
}
</style>
