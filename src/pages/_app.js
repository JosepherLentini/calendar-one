import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {

  const [darkmode, setDarkmode] = useState(false)

  return <Component {...pageProps} />;
}
