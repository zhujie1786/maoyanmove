<template>
  <div class="move-list">
    <MoveList :mlist="mlist"></MoveList>
  </div>
</template>

<script>
import MoveList from "@/components/MovieList.vue";
export default {
  props:['mlist'],
  data() {
    return {
    };
  },
  components: {
    MoveList,
  },
  
};
</script>

<style>
.move-list {
  overflow-y: scroll;
}
</style>
