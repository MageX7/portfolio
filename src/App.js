import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Accueil from "./Components/Accueil/Accueil";
import Article from "./Components/Article/Article";
import Apropos from "./Components/Apropos/Apropos";
import Contact from "./Components/Contact/Contact";

function App() {
    return (
        <BrowserRouter>
            <Header></Header>
            <div className="flex-1 flex flex-col bg-gray-100 overflow-auto">
                <Routes>
                    <Route path="/" element={<Accueil/>}/>
                    <Route path="/articles" element={<Article/>}/>
                    <Route path="/a-propos" element={<Apropos/>}/>
                    <Route path="/contacts" element={<Contact/>}/>
                    <Route path="*" element={<div>Page not found</div>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
