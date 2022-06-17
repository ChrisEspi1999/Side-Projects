<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>

  <body>
    <header>Nice Shirts</header>

    <span class="Men-select">Men</span>
    <span class="Women-select">Womens</span>
    <span class="Unisex-select">Unisex</span>

  </body>

</template>

<style>
header {
  text-align: center;
  font-size: 50px;
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
</style>
