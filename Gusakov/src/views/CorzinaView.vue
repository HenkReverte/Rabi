<script setup>
  import { ref } from 'vue'
  import { useCounterStore } from '@/stores/counter';
  import card from '@/components/Card.vue';

  const counter = useCounterStore();

  let discount = ref(10);

  let sum = ref(counter.items.reduce((acc, el) => {
    return acc + el.price
  }, 0));

  const delet = (obj) => {
    console.log(obj);
    counter.popItem(obj)
    console.log(sum.value);
    sum.value -= obj.price
  }
</script>

<template>
    <main>
      <div class="main">
        <div class="catalog">
          <card 
            v-for="item in counter.items" 
            :key="item.id" 
            :tovar="item"
            @Item="delet(item)"
            >
          </card>
        </div>
        <div class="zakaz">
          <div>
            <h3>Заказ #V3LK9Y</h3>
            <hr>
            <div><span>Общая сумма:</span> <span>{{ sum - (sum /100 * discount) }} $</span></div>
            <hr>
            <div><span>Скидка:</span> <span>{{ discount }} %</span></div>
            <div><span>Сумма:</span> <span>{{ sum }} $</span></div>
          </div>
          <div>
            <h3>Выбранные товары</h3>
            <ul>
              <li
                v-for="item in counter.items" 
                :key="item"
                >
                {{ item.name }}
              </li>
            </ul>
          </div>
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
    min-height: 100vh;
    padding-bottom: 300px;
  }

  .catalog{
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    gap: 50px;
    margin-top: 300px;
    margin-left: -500px;
  }

  .zakaz{
    position: absolute;
    border-radius: 20px;
    background: rgba(30, 30, 55, .7);

    margin-top: 300px;
    width: 500px;
    padding: 50px;
    right: 50px;
  }
  .zakaz > div:first-child{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 40px;
  }
</style>  