import { defineStore } from "pinia";
import actions from "./actions";
import getters from "./getters";
import state from "./state";

export const useUptifyStore = defineStore("uptify", {
  actions,
  getters,
  state,
});
