import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
// import SearchResult from "./components/SearchResult";
// import { AppContext } from "./utils/ContextApi";

function App() {
  return (
      
          <BrowserRouter>
              <Routes>
                  <Route path="/" exact element={<Home />} />
              </Routes>
          </BrowserRouter>
     
  );
}

export default App;
