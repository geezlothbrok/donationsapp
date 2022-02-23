import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes, Switch} from "react-router-dom";
import { ToastContainer } from "react-toastify";




function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <ToastContainer position="center" />
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
