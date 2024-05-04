import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main'; 
import Layout from './layout/layout';
import Eventpage from "./pages/Eventpage";

import EventDetail from "./component/Event/EventDetail";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Assuming you want Main to be the default content of Layout */}
          <Route index element={<Main />} />
          {/* You can add more nested routes if necessary */}
          
          
        <Route path="/events" element={<Eventpage />} />
        <Route path="/events/:id" element={<EventDetail />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
