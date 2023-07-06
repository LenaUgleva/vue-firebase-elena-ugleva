<template>
  <div class="router-wrapper">
    <router-view />
  </div>
</template>


<style>
  body{
    font-family: Calibri, sans-serif;
    font-size: 16px;
    background-color: #666666;
    color: white;
    display: flex;
    justify-content: center;
    min-height: 100vh;
  }
  #app{
    width: fit-content
  }
  .router-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>