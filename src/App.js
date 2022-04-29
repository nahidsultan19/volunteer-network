import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddActivities from './Components/AddActivities/AddActivities';
import AddEvents from './Components/AddEvents/AddEvents';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import RequireAuth from './Components/Login/RequireAuth';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/donation' element={<p>Donation</p>} />
        <Route path='/events' element={
          <RequireAuth>
            <AddEvents></AddEvents>
          </RequireAuth>
        } />
        <Route path='/add-activity' element={<AddActivities></AddActivities>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
      </Routes>
    </div>
  );
}

export default App;
