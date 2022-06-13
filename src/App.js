import Footer from "./components/Footer";
import Header from "./components/Header";
import Sobre from "./pages/Sobre";
import Empresarial from "./pages/Empresarial";
import Vagas from "./pages/Vagas";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/global";

import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Obrigado from "./pages/Obrigado";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/sobre-nos">
            <Sobre />
          </Route>

          <Route path="/empresarial">
            <Empresarial />
          </Route>

          <Route path="/vagas">
            <Vagas />
          </Route>
          <Route path="/obrigado">
            <Obrigado />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
        <GlobalStyle />
      </Router>
    </ChakraProvider>
  );
}

export default App;
