import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Header from "./components/Header";

import Apod from "./Pages/Apod";
import Mars from "./Pages/Mars";
import Home from "./Pages/Home";

function App() {
  return (
        <React.StrictMode>
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <div className="wrapper">
                        <Routes>
                            <Route path={'/'} element={<Home />} />
                            <Route path={'/apod'} element={<Apod />} />
                            <Route path={'/mars'} element={<Mars />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </React.StrictMode>



  );
}

export default App;
