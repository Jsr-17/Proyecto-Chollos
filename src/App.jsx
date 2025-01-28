import "./App.css";
import { FooterComponent } from "./components/footerComponent/FooterComponent";
import { HeaderComponent } from "./components/headerComponent/HeaderComponent";
import { Router } from "./router/Router";

function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Router></Router>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
