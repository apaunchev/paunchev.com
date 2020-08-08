import Router from "next/router";
import NProgress from "nprogress";
import "normalize.css";
import "nprogress/nprogress.css";
import "../styles.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

export default App;
