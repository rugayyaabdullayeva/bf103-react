import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import "./App.css"


function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;