<script>
import {GameMap} from "@/assets/scripts/GameMap";
import {ref, onMounted} from "vue";

export default {
  setup() {
    let parent = ref(null);
    let canvas = ref(null);

    onMounted(() => {
      new GameMap(canvas.value.getContext("2d"), parent.value);
    });

    return {
      parent,
      canvas
    }
  }
}
</script>

<template>
  <div ref="parent" class="gamemap">
    <canvas></canvas>
  </div>
</template>

<style scoped>
div.gamemap {
  width: 100%;
  height: 100%;
}
</style>