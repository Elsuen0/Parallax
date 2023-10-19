import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/Background Parallax/App.jsx";
import "./index.css";
import Titre from "./Components/Titre/Titre.jsx";
import Header from "./Components/Header/Header.jsx";
import Scroll from "./Components/Scroll/Scroll.jsx";
import Test from "./Components/BlocTest/Test.jsx";
import Share from "./Components/Share/Share.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <div className="firstPage">
      <App />

      <Titre />
      <Scroll />
      <Share />
    </div>
    <Test />
  </React.StrictMode>
);
