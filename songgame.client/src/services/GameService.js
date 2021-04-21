import { api } from './AxiosService'
const baseURL = '/api/games/'

class GameService {
  async createGame(data) {
    await api.post(baseURL, data)
  }
}

export const gameService = new GameService()
