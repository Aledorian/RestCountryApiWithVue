<script setup>
  import Navbar from "./components/Navbar.vue"
</script>

<template>
    <Navbar/>
    <RouterView/>
</template>


<style>

#app {
  margin: 0 auto;
  font-weight: normal;
}

:root{
  --bg-color : hsl(0, 0%, 98%);
  --card-color : hsl(0, 0%, 100%);
  --text-color: hsl(200, 15%, 8%);
  --shadow: rgb(124, 124, 124);
  --input-color: hsl(0, 0%, 89%);
  --svg-color: hsl(200, 15%, 8%);
}

body.dark{
  --bg-color : hsl(207, 26%, 17%);
  --card-color : hsl(209, 23%, 22%);   
  --text-color : hsl(0, 0%, 100%);
  --shadow: rgb(31, 31, 31);
  --input-color: hsl(208, 24%, 26%);
  --svg-color: hsl(0, 0%, 100%);
}

*{
  margin: 0;
  padding: 0;
  color: var(--text-color);
  fill: var(--svg-color);
}

body{
  background-color: var(--bg-color)
}

</style>