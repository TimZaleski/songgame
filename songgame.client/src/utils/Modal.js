import { AppState } from '../AppState'

export const closeModals = () => {
  AppState.showModal = false
  AppState.showNewGame = false
}
