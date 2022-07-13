import HomePage from "./pages/HomePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div className="bg-gray-100">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/:id" element={<HomePage />} />
          </Route>
          <Route path="/post/:slug" element={<PostPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
