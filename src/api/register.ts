import { api } from "../boot/axios"

export default function register(payload: unknown) {
  console.log("api", api)
  api.post("/auth/register", payload)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log("register error", error)
    })
    .finally(() => {
      console.log("register finally")
    })
}
