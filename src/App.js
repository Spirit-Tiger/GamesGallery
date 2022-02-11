import Header from "./components/Header";
import GlobalStyles from "./globalStyles";
import Home from "./pages/Home";
import UpcomingGames from "./pages/UpcomingGames";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="upcoming_games" element={<UpcomingGames />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
