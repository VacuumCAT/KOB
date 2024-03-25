<script>
import GameMap from "./GameMap.vue";

export default {
  components: {GameMap},
}
</script>

<template>
    <div class="PlayGround">
      <GameMap/>
    </div>
</template>

<style scoped>
div.PlayGround {
  width: 60vw;
  height: 70vh;
  background: lightblue;
  margin: 40px auto;
}
</style>