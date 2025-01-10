import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link
          rel="shortcut icon"
          href="/images/favicon.png"
          type="image/x-icon"
        />
        <link rel="icon" href="/images/favicon.png" type="image/x-icon" />

        {/* Bootstrap CSS */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" />

        {/* Revolution Slider Styles */}
        <link
          href="/plugins/revolution/css/settings.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/plugins/revolution/css/layers.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/plugins/revolution/css/navigation.css"
          rel="stylesheet"
          type="text/css"
        />
        {/* Custom Style CSS */}
        <link href="/css/style.css" rel="stylesheet" />

        {/* Scripts */}
        <script
          data-cfasync="false"
          src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
          async
        ></script>

        {/* jQuery and Bootstrap JS (load with async) */}
        <script src="/js/jquery.js" async></script>
        <script src="/js/popper.min.js" async></script>
        <script src="/js/bootstrap.min.js" async></script>

        {/* Revolution Slider Scripts */}
        <script
          src="/plugins/revolution/js/jquery.themepunch.revolution.min.js"
          async
        ></script>
        <script
          src="/plugins/revolution/js/jquery.themepunch.tools.min.js"
          async
        ></script>
        <script
          src="/plugins/revolution/js/extensions/revolution.extension.actions.min.js"
          async
        ></script>
        <script
          src="/plugins/revolution/js/extensions/revolution.extension.carousel.min.js"
          async
        ></script>
        <script
          src="/plugins/revolution/js/extensions/revolution.extension.kenburn.min.js"
          async
        ></script>
        <script
          src="/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js"
          async
        ></script>
        <script
          src="/plugins/revolution/js/extensions/revolution.extension.migration.min.js"
          async
        ></script>
        <script
          src="/plugins/revolution/js/extensions/revolution.extension.navigation.min.js"
          async
        ></script>
        <script
          src="/plugins/revolution/js/extensions/revolution.extension.parallax.min.js"
          async
        ></script>
        <script
          src="/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js"
          async
        ></script>
        <script
          src="/plugins/revolution/js/extensions/revolution.extension.video.min.js"
          async
        ></script>

        {/* Other JS Plugins */}
        <script src="/js/main-slider-script.js" async></script>
        <script src="/js/jquery.fancybox.js" async></script>
        <script src="/js/jquery-ui.js" async></script>
        <script src="/js/wow.js" async></script>
        <script src="/js/appear.js" async></script>
        <script src="/js/select2.min.js" async></script>
        <script src="/js/swiper.min.js" async></script>
        <script src="/js/owl.js" async></script>
        <script src="/js/script.js" async></script>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
