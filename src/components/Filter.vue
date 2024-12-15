<script setup>
import { useFilter } from "@/store/useUrlStore"
import { ref } from 'vue'  

let url = "https://restcountries.com/v3.1/"

let filter = useFilter();   
let name = ref('');
let region= ref('');

let regionUrl = () => {
    if (region.value !== "all") {
        filter.search(url+"region/"+region.value);
    }
    else{
        filter.search(url+"all");
    }
}

let nameUrl = () => {
    if (!name.value ) {
        filter.search(url);
    }else{
        filter.search(url+"name/"+name.value);
    }
}

</script>

<template>
    <section class="filter">
        <input type="text" id="search" v-model="name" @input="nameUrl()" placeholder="Search for a country...">
        <select name="filterRegion" v-model="region" @change="regionUrl()" id="filterRegion"> 
            <option value="all" selected="selected">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic">Antarctic</option>    
        </select>
    </section>
</template>

<style scoped>


.filter{
    display: flex;
    justify-content: space-between;
    margin: 0px 20px;
}

input{
    width: 25%;
    height: 50px;
    border: none;
    box-shadow: 0px 5px 5px var(--shadow);
    border-radius: 5px;
    background-image: url("https://www.svgrepo.com/show/7109/search.svg");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position-x: 10px;
    background-position-y: 10px;
    padding-left: 50px;
    background-color: var(--input-color);
}

input::placeholder{
    left: 50px
}

#filterRegion{
    width: 180px;
    border: none;
    background-color: var(--input-color);
    box-shadow: 0px 5px 5px var(--shadow);
    padding: 0px 15px;
}

</style>