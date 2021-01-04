<template>
<div id="app">
    <router-view />
    <b-container fluid>
        <b-row>
       
        <b-col class="mt-5 p-3 text-center">
            Powered by Codemos Dev Community <b-icon-code-slash variant="light" font-scale="2"></b-icon-code-slash>
            <p class="m-2">c 2020</p>
        </b-col>
        
    </b-row>
    </b-container>
    
</div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgb(5, 27, 41);
    color: white;
    min-height: 100vh;

}
</style>
