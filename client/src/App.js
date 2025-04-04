import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // React Router

import FileUploader from "./component/FileUploader";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
    
        <FileUploader />

        <Footer />
 
    </div>
  );
}

export default App;
