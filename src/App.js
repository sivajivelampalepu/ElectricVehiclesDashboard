
import './App.css';
import './mapup.css'
import DashboardMainComponent from './Container/DashboardMainComponent'
import { Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/*" element={<NotFound/>} />
 <Route path="/dashboard" element={<DashboardMainComponent/>}>
 
     
     </Route>
     </Routes>
    </div>
  );
}

export default App;
