<template>
  <div
    id="home"
  >
  <h1>Home Page!</h1>
  <h2>New Game <span @click="newGame">+</span></h2>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    onMounted(() => {
    })
    const newGame = () => {
      AppState.showModal = true
      AppState.showNewGame = true
    }
    return { newGame }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}

</style>
