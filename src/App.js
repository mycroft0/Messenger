import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="container">
          <Header/>
          <Messages/>
          <Footer/>
      </header>
    </div>
  );
}

export default App;
