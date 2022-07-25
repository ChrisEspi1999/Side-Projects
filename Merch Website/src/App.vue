<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>

<!-- ********************************************************************************************************************* -->
<!-- ********************************************************************************************************************* -->
<!-- START OF HTML -->
<!-- ********************************************************************************************************************* -->
<!-- ********************************************************************************************************************* -->

<template>
  <body>
    <header>Nice Shirts</header>
    <span class="contaner">

      <!-- Men Dropdown Menu -->
      <div class="Men-select">
        <div class="dropdown">
          <button class="dropbtn">Men</button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>

      <!-- Women Dropdown Menu -->
      <div class="Women-select">
        <div class="dropdown">
          <button class="dropbtn">Women</button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
      
      
      <!-- Unisex Dropdown Menu -->
      <div class="Unisex-select">
        <div class="dropdown">
          <button class="dropbtn">Unisex</button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>

    </span>
  </body>

 
</template>

<!-- ********************************************************************************************************************* -->
<!-- ********************************************************************************************************************* -->
<!-- END OF HTML -->
<!-- ********************************************************************************************************************* -->
<!-- ********************************************************************************************************************* -->

<!-- ********************************************************************************************************************* -->
<!-- ********************************************************************************************************************* -->
<!-- START OF CSS -->
<!-- ********************************************************************************************************************* -->
<!-- ********************************************************************************************************************* -->

<style>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
header {
  text-align: center;
  font-size: 80px;
}

span {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.Men-select {
  order: 1;
  margin: 15px;
}
.Women-select {
  order: 2;
  background-color: aqua;
  margin: 15px;
}
.Unisex-select {
  order: 3;
  margin: 15px;
}
.container {
  display: flex;
}
header {
  font-family: "Kaushan Script", cursive;
  background-image: url(https://img.freepik.com/free-vector/vibrant-wide-banner-with-diagonal-stripes-pattern_1017-28366.jpg?t=st=1658766320~exp=1658766920~hmac=b5bed5040eda302639202571a515f07a9cca6bdd8df5eeb3722956b0038fbd9d&w=2000);
  background-repeat: no-repeat;
  background-size: cover;
}
html {
  margin: -1%;
}

/* Style The Dropdown Button */
.dropbtn {
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #f1f1f1;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>

<!-- ********************************************************************************************************************* -->
<!-- ********************************************************************************************************************* -->
<!-- END OF CSS -->
<!-- ********************************************************************************************************************* -->
<!-- ********************************************************************************************************************* -->
