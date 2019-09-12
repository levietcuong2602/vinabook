export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.7.2/css/all.css"
      }
    ],
    script: [
      {
        src: "https://apis.google.com/js/api:client.js"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },
  /*
   ** Global CSS
   */
  css: ["~/assets/scss/style.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/element-ui.js",
    "~/plugins/bootstrap-vue.js",
    "~/plugins/vue-awesome-countdown.js",
    "~/plugins/vue-scrollto.js",
    {
      src: "~plugins/fb-signin-button.js",
      ssr: false
    },
    {
      src: "~plugins/gg-signin-button.js",
      ssr: false
    },
    {
      src: "~/plugins/vue-carousel-3d.js",
      ssr: false
    },
    {
      src: "~/plugins/vue-easy-lightbox.js",
      ssr: false
    }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt"
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
