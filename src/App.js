import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import Footer from "./components/Footer/Footer";
import {Navigate, Route, Routes} from "react-router-dom";
import Auth from "./components/Auth";

function App() {
  return (

      <div className="container">
          <Header/>
            <Routes>
                <Route path = 'messages' element={<Messages/>}/>
                <Route path = 'auth' element={<Auth/>}/>
                <Route path = '*' element={<Navigate to={'messages'}/>}/>

            </Routes>

          <Footer/>
      </div>
  );
}

export default App;
