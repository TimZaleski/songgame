<template>
  <div id="myModal-screen"
       class="d-flex justify-content-center py-5"
       :class="{'show': showModal, 'hide': !showModal}"
  >
    <div id="myModal-clickoff" @click="closeModals"></div>
    <div id="myModal-container">
      <!-- Insert all modal components here with their respective v-if's -->
      <modal-new-game v-if="modalChoice.newGame"></modal-new-game>
    </div>
  </div>
</template>
<script>
import { computed, reactive } from 'vue'
import ModalNewGame from './ModalNewGame.vue'
import { AppState } from '../AppState'
import { closeModals } from '../utils/Modal'
export default {
  components: { ModalNewGame },
  setup() {
    const showModal = computed(() => AppState.showModal)
    const modalChoice = reactive({
      newGame: computed(() => AppState.showNewGame)
    })
    // const close = closeModals()
    return {
      showModal,
      modalChoice,
      closeModals
    }
  }
}
</script>
<style scoped>
@import "../assets/css/modals.css";
</style>
