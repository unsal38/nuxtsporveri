// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/examples/*': { redirect: '/redirect-route' },
    '/modify-headers-route': { headers: { 'x-magic-of': 'nuxt and vercel' } },
    // Enables client-side rendering
    '/spa': { ssr: false },
  },
  app: {
    head: {
      title: "Antronor Online",
      link: [
        // FAVİCON
        { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png" },
        { rel: "manifest", sizes: "16x16", href: "/favicon/site.webmanifest" },
        // FONTAWSOME
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css",
          integrity: "sha512-Avb2QiuDEEvB4bZJYdft2mNjVShBftLdPG8FJ0V7irTLQ8Uo0qcPxh4Plq7G5tGm0rU+1SPhVotteLpBERwTkw==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer"
        },
        // FONT
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: ""
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap", rel: "stylesheet"
        },
        {
          rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/css/bootstrap.min.css",
          integrity: "sha512-Ez0cGzNzHR1tYAv56860NLspgUGuQw16GiOOp/I2LuTmpSK9xDXlgJz3XN4cnpXWDmkNBKXR/VDMTCnAaEooxA==",
          crossorigin: "anonymous", referrerpolicy: "no-referrer"
        },
        //BOOTSTRAP CSS
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css",
          integrity: "sha512-b2QcS5SsA8tZodcDtGRELiGv5SaKSk1vDHDaQRda0htPYWZ6046lr3kJ5bAAQdpV2mmA/4v0wQF9MyU6/pDIAg==",
          crossorigin: "anonymous", referrerpolicy: "no-referrer"
        },
        // local css
        { rel: "stylesheet", href: "/css/style.css" },
      ],
      script: [
        //JQUER  CDN
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js",
          integrity: "sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer"
        },
        //BOOTSTRAP CDN
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.min.js",
          integrity: "sha512-WW8/jxkELe2CAiE4LvQfwm1rajOS8PHasCCx+knHG0gBHt8EXxS6T6tJRTGuDQVnluuAvMxWF4j8SNFDKceLFg==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer"
        },
        {
          src: "/js/page.js"
        },
      ]

    },
  }
})
