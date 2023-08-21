import { State } from "src/models"

export default {
  getServices(state: State) {
    return state.services.filter(service => service.caption.toLowerCase().indexOf(state.searchServices) >= 0)
  }
}
