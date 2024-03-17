<template>
    <div>
      Hello World
      <div>Bot 昵称: {{ botName }}</div>
      <div>Bot 战力: {{ botRating }}</div>
    </div>
  <router-view/>
</template>

<script>
import $ from 'jquery';
import { ref } from 'vue';
export default {
  name: 'App',
  setup: ()=> {
    let botName = ref('');
    let botRating = ref('');
    $.ajax({
      url: 'http://localhost:3000/pk/getbotinfo',
      type: 'GET',
      success: resp => {
        botName.value = resp[0].name;
        botRating.value = resp[0].rating;
        console.log(resp);
      }
    });

    return {
      botName,
      botRating
    }
  }
}
</script>


<style>

</style>
