<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>

  <body>
    <header>Nice Shirts</header>

    <span class="Men-select">Men</span>
    <span class="Women-select">Women</span>
    <span class="Unisex-select">Unisex</span>

  </body>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
header {
  text-align: center;
  font-size: 80px;
}

span {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.Men-select{
  order: 1;
}
.Women-select{
  order: 2;
}
.Unisex-select{
  order: 3;
}
header{
  font-family: 'Kaushan Script', cursive;
  background-color: aquamarine;
  
}
html{
  margin: -1%;
}
</style>
