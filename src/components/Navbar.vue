<script setup>
const body = document.querySelector('body')

let changeMode = () => {
    body.classList.toggle('dark')
}

</script>

<template>
    <header>
        <nav>
            <RouterLink :to="'/'"><h1>Where in the world ?</h1></RouterLink>
            <div @click="changeMode()">
                <span>Dark Mode</span>
                <svg>
                    <path d="M24.997,47.511C11.214,47.511,0,36.298,0,22.515C0,12.969,5.314,4.392,13.869,0.132 c0.385-0.191,0.848-0.117,1.151,0.186s0.381,0.766,0.192,1.15C13.651,4.64,12.86,8.05,12.86,11.601 c0,12.681,10.316,22.997,22.997,22.997c3.59,0,7.033-0.809,10.236-2.403c0.386-0.191,0.848-0.117,1.151,0.186 c0.304,0.303,0.381,0.766,0.192,1.15C43.196,42.153,34.597,47.511,24.997,47.511z M12.248,3.372C5.862,7.608,2,14.709,2,22.515 c0,12.68,10.316,22.996,22.997,22.996c7.854,0,14.981-3.898,19.207-10.343c-2.668,0.95-5.464,1.43-8.346,1.43 c-13.783,0-24.997-11.214-24.997-24.997C10.861,8.761,11.327,6.005,12.248,3.372z"></path>
                </svg>
            </div>
        </nav>
    </header>
</template>

<style scoped>

header nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--card-color);
    padding: 1em;
    box-shadow: 1px 1px 5px var(--shadow);
    margin-bottom: 20px;
}

header nav div{
    display: flex;
    align-items:center
}

svg{
    width: 50px;
    height: 50px;
}

div>span{
  margin-right: 10px;
}

</style>