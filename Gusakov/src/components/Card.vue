<script setup>
  import { useCounterStore } from '../stores/counter.js';
  import { ref, defineProps, defineEmits,  } from 'vue';
  const props = defineProps({
    tovar: Object
  })

  const counter = useCounterStore();

  const emit = defineEmits(['Item']);
  const send = () =>{
    emit('Item', {id: props.tovar.id, src: props.tovar.src, name: props.tovar.name, price: props.tovar.price})
  }



</script>

<template>
  <div class="tovar">
    <img :src="tovar.src">
    <h5>{{ tovar.name }}</h5>
    <span>Цена {{ tovar.price }} $</span>
    <button @click="send()">
      <p>
        {{ tovar.butText
        }}
      </p>
    </button>
  </div>
</template>



<style scoped>
  div.tovar{
    max-width: 250px;
    box-sizing: border-box;
    background: linear-gradient(200deg,#BB82DB 0%, #636DC1 19%, #1D0F35 100%);
    height: 450px;
    padding: 25px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .tovar h5{
    font-size: 20px;
    font-weight: 400;
  }

  .tovar button{
    width: 180px;
    height: 50px;
    border-radius: 50px;
    border: none;
    transition: all .3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  }

  .tovar button p{
    background: linear-gradient(270deg,#D70BCA, #5D00FA);
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
    transition: all .3s ease;
  }

  .tovar button:hover{
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.6);
  }

  .tovar button:focus {
    outline: none; /* Убираем стандартную обводку при фокусе */
  }

  .tovar button:active {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Уменьшаем тень */

  }

  .tovar button:hover{
    background: linear-gradient(270deg,#D70BCA, #5D00FA);
  }

  .tovar button:hover p{
    color: white;
  }
</style>