import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage, SearchPage } from "layout";

function App() {




    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default App;
