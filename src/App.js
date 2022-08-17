import "./index.css"
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import Footer from "./components/Footer/Footer";



function App() {
    return (
        <div className="container">
            <Header/>
            <Messages/>
            <Footer/>
        </div>
    );
}

export default App;
