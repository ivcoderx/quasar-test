import { State } from "src/models";

export default (): State => ({
  searchServices: "",
  services: [
    {
      caption: "Google Store",
      icon: "google",
      link: "https://quasar.dev",
    },
    {
      caption: "Gira",
      icon: "gira",
      link: "https://github.com/quasarframework",
    },
    {
      caption: "Dropbox",
      icon: "dropbox",
      link: "https://forum.quasar.dev",
    },
    {
      caption: "Google My Business",
      icon: "googleMyBusiness",
      link: "https://awesome.quasar.dev",
    },
    {
      caption: "Automate",
      icon: "automate",
      link: "https://chat.quasar.dev",
    },

    {
      caption: "Sales Force",
      icon: "salesForce",
      link: "https://twitter.quasar.dev",
    },
    {
      caption: "Caltrain",
      icon: "caltrain",
      link: "https://facebook.quasar.dev",
    },
    {
      caption: "Cloud My Business",
      icon: "cloudMyBusiness",
      link: "https://awesome.quasar.dev",
    },
    {
      caption: "Intelligent Voice",
      icon: "intelligentVoice",
      link: "https://awesome.quasar.dev",
    },
  ]
})
