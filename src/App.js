import axios from 'axios';
import './index.css';
import Add from './Add';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Update from './Update';
import List from './List';


function App() {
  return (
    <main>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<List/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/update/:id" element={<Update/>}/>
      </Routes>
      </BrowserRouter>
      </main>
  );
}

export default App;
