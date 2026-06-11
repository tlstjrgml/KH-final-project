import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // 1. BrowserRouter 추가
import Navbar from './components/common/Navbar';
import Login from './layouts/Login';
import Signup from './layouts/Signup';
import ExtraInfoModal from './layouts/ExtraInfoModal';
import Main from './layouts/Main';
import EditProfile from './layouts/EditProfile';
import AdminPage from './layouts/AdminPage';

function App() {
  return (
    // 2. <> 대신 <BrowserRouter>로 전체를 감싸줍니다.
    <BrowserRouter>
      <Navbar isLoggedIn={false} nickname="석희" />
      {/* <Login /> 
      <Signup />
      <ExtraInfoModal
        isOpen={true}
        onClose={() => console.log('닫기')}
        onSave={() => console.log('저장')}
      /> */}
      {/* <Main /> */}
      {/*<EditProfile/>*/}
      <AdminPage/>
    </BrowserRouter>
  );
}

export default App;