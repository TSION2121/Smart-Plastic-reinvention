import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Logout from './Component/Home/Logout';
import UserInfo from './Component/Home/UserInfo';
import Login from './Component/Login/Login';
import Msg from './Component/Register/Msg';
import Register from './Component/Register/Register';

function App() {
  return (
    <div >

      <Routes>
        <Route >

          <Route index path="/*" element={ <Login /> } />
          <Route path="/register/*" element={<Register/>} />
          <Route path="/home/*" element={<Home/>} />
          <Route path="/logout/*" element={<Logout/>} />
          <Route path="/userinfo/*" element={<UserInfo/>} />
          <Route path="/msg/*" element={<Msg/>} />

        </Route>
      </Routes>
    
    </div>
  );
}

export default App;
