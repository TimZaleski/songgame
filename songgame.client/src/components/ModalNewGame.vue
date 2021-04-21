<template>
  <div class="myModal-content">
    <div class="myModal-frame dark-scrollbar">
      <div class="row">
        <div class="col-12 text-center">
          <h1>New Game</h1>
        </div>
        <div class="col-12 my-1">
          <label for="url">Spotify Url</label><br>
          <div class="form-group">
            <input v-model="form.url"
                   type="text"
                   class="form-control"
                   name="url"
                   id="url"
                   aria-describedby="helpId"
                   placeholder="URL..."
            >
          </div>
        </div>
        <div class="col-12 my-1">
          <label for="songLength">Song Length</label><br>
          <div class="form-group">
            <form name="myform" oninput="songLengthValue.value = songLength.valueAsNumber">
            <input v-model="form.length"
                   type="range"
                   min="5"
                   max="30"
                   class="form-control"
                   name="songLength"
                   id="songLength"
                   aria-describedby="helpId"
            >
             <output name="songLengthValue" for="songLength" >30</output>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="myModal-footer">
      <button id="myModal-button-join-group"
              class="myModal-button"
              @click="create"
      >
        Start Game
      </button>
    </div>
  </div>
</template>
<script>
import { reactive } from 'vue'
import { gameService } from '../services/GameService'
import { closeModals } from '../utils/Modal'
export default {
  setup() {
    const form = reactive({
      length: 30,
      url: ''
    })
    const create = () => { gameService.createGame(form); closeModals() }
    return { form, create }
  }
}
</script>
<style scoped>
@import "../assets/css/modals.css";
</style>
