<script setup>
  import { ref } from 'vue';
  import card from '@/components/Card.vue';
  import { useCounterStore } from '../stores/counter.js';

  const counter = useCounterStore();

  let id = 1;



  const tovarList = ref([
    {id: id++, name: 'Ёкан',  src: 'img/ёкан.jpg',   price: 1000,  inCorzina: false, butText: "В корзину"  },
    {id: id++, name: 'Мандзю', src: 'img/мандзю.jpg', price: 200,  inCorzina: false, butText: "В корзину"  },
    {id: id++, name: 'Дайфуку', src: 'img/дайфуку.jpg',  price: 300,  inCorzina: false, butText: "В корзину"  },
    {id: id++, name: 'Данго',      src: 'img/данго.jpg',         price: 200,  inCorzina: false, butText: "В корзину"  },
    {id: id++, name: 'Сэмбэй',    src: 'img/сэнбэ.jpg',    price: 550,  inCorzina: false, butText: "В корзину"  },
    {id: id++, name: 'Дораяки',     src: 'img/дораяки.jpg',     price: 100,  inCorzina: false, butText: "В корзину"  },
    {id: id++, name: 'Охаги', src: 'img/охаги.jpg', price: 355,  inCorzina: false, butText: "В корзину"  },
    {id: id++, name: 'Монака',          src: 'img/монака.jpg',         price: 1500,  inCorzina: false, butText: "В корзину"  },
  ])

  const recieve = (obj) => {
    console.log(obj);
    counter.pushItem(obj)
  }

</script>


<template>
    <main>
      <div class="main">
        <h1>Телефоны</h1>
        <div class="tovars">
          <card 
            v-for="el in tovarList" 
            :tovar="el" 
            :key="el.id"
            @Item="recieve"
            >

          </card>
        </div>
      </div>
    </main>
</template>
  
<style>
  *{
    color:white;
  }
  h2{
    font-size: 40px;
  }
  main{
    background: #101029;
  }
  main > div{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 300px; 
  }
  h1{
    padding-top: 300px;
  }
  .tovars{
    width: 80%;
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    justify-content: center;
  }
</style>
  