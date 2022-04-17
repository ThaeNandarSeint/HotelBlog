import './App.css';
import { Features } from './components/Features';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Services } from './components/Services';
import { Rooms } from './components/Rooms/Rooms';
import { RoomDetail } from './components/Rooms/RoomDetail';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Footer } from './components/Footer';
import { AdminAddRoom } from './components/admin/AdminAddRoom';
import { AdminViewRooms } from './components/admin/AdminViewRooms';
import { AdminUpdateRoom } from './components/admin/AdminUpdateRoom';
import { Register } from './components/Register';
import { Login } from './components/Login';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/rooms' element={<Rooms />}></Route>
          <Route path='/rooms/:id' element={<RoomDetail />}></Route>

          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
         
          <Route path='/admin/add/rooms/' element={<AdminAddRoom />}></Route>
          <Route path='/admin/view/rooms/' element={<AdminViewRooms />}></Route>
          <Route path='/admin/update/rooms/:id' element={<AdminUpdateRoom />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
