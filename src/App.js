import {BrowserRouter as Router} from 'react-router-dom'
import Navigate from './Components/Navigate';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
function App() {
  return (
    <Router>
      <Navigate/>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes> */}
      <Home />
      <About/>
      <Projects/>
      <Blog/>
      <Contact/>
    </Router>
  );
}

export default App;
