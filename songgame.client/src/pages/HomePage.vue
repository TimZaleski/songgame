<template>
  <div
    id="home"
  >
  <h1>Home Page!</h1>
  </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'Home',
  setup() {
    onMounted(() => {
    })
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
