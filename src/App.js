
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './NotFound';
import NavBar1 from './NavBar1';
import Home from './Home';
import ViewReview from './ViewReview';
import CreateReview from './CreateReview';
import ReviewDetails from './ReviewDetails';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar1/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/ReviewList" element={<ViewReview/>}/>
           <Route path="/CreateReview" element={<CreateReview/>}/>
          <Route path="/Review/:id" element={<ReviewDetails/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
