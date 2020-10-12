import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
                        <Switch>
                            <Route path={'/'} exact component={Home} />
                            <Route path={'/apod'} component={Apod} />
                            <Route path={'/mars'} component={Mars} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </React.StrictMode>



  );
}

export default App;
