import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  let items = ref([]);

  const pushItem = (obj) => {
    items.value.push(obj);
    obj.butText = 'Удалить из корзины';
    obj.inCorzina = true;
  }

  let sum = ref(items.value.reduce((acc, el) => {
    return acc + el.price
  }, 0));


  const popItem = (obj) => {
    items.value = items.value.filter(el => el !== obj);
  }


  return { items, sum, pushItem, popItem, };
});

