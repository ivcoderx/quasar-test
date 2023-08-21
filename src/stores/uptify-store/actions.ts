import { Services } from "../../models"

export default {
  addService(service: Services): void {
    this.services.push(service)
  },
  clearSearchServices(): void {
    this.searchServices = ""
  }
}
