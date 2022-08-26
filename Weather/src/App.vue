<script>
export default{
  name: 'app',
  data(){
    return{
      api_key: 'bd0f743b23963dc4ab289dace43d6a63'
    }
  }
}
</script>

<template>
  <div id="app">
    <main>
      <div class="search-box">
        <input type="text" class="search-bar" placeholder="Search..."/>
      </div>
    </main>
  </div>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  body{
    font-family: 'montserrat', sans-serif;
  }
  #app{
    background-image: url('D:\Local Repository\Weather\src\assets\cold-bg.jpg');
  }
</style>
