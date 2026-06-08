import React from 'react';
import Navbar from './components/common/Navbar';
import Login from './layouts/Login';
import Signup from './layouts/Signup';
import ExtraInfoModal from './layouts/ExtraInfoModal';
import Main from './layouts/Main';
import EditProfile from './layouts/EditProfile';

function App() {
  return (
    <>
      <Navbar isLoggedIn={false} nickname="석희" />
      {/* <Login />  */}
      <Signup />
      {/* `  */}
      {/* <EditProfile/> */}
    </>
  )
}

export default App