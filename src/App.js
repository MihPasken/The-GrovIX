
import React from 'react';
import './App.css';

import Header from "./Components/Header/Header.jsx"
import User from "./Components/Content/User/User.jsx";
import Footer from "./Components/Footer/Footer.jsx"
import Sidebar from './Components/SideBar/Sidebar.jsx';
import { Route, Routes } from 'react-router-dom';

import DialogsContainer from './Components/Content/Dialogs/DialogsContainer.jsx';
import UsersContainer from './Components/Content/Users/UsersContainer.jsx';


const App = () => {
  
  return (
    <div className="App-wrapper">
      <Header />
      <Sidebar />
      <div className="Content">
          <Routes>
            <Route path="/User" element={<User />} />
            <Route path="/Dialogs" element={<DialogsContainer />} />
            <Route path="/Users" element={<UsersContainer />} />
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
