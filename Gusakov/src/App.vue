<script setup>

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="a" to="/">Главная</RouterLink>
        <RouterLink class="a" to="/about">О нас</RouterLink>
        <RouterLink class="a" to="/catalog">Каталог</RouterLink>
        <RouterLink class="a" to="/korzina">Корзина</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  nav{
    display: flex;
    justify-content: center;
    gap: 100px; 
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 100px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid white;
    border-left: none;
    border-right: none;
    padding: 50px;
  }
  nav > .a{
    font-size: 30px;
    color: white;
    text-decoration: none;
  }
  a:active{
    color: #5B00FB;
  }
</style>

