import './App.css';
import Home from './pages/Home/Home';
import Header from './shared/header/Header';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Auth from './pages/Auth/Auth';
import { AuthContext } from './shared/context/auth-context';
import { useCallback, useEffect, useState } from 'react';
import Upload from './pages/Upload/Upload';
import Delete from './pages/Delete/Delete';
import View from './pages/View/View';
import SearchViewPage from './pages/SearchView/SearchViewPage';
import Update from './pages/Update/Update';

function App() {
  const [token, setToken] = useState();
  const [userId, setUserId] = useState();

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
    localStorage.setItem('userData', JSON.stringify({
      userId: uid,
      token: token
    }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem('userData');
  }, []);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.token) {
      login(userData.userId, userData.token);
    }
  }, [login]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout
      }}
    >
      <Router>
        <main>
          <Routes>
            {!token ? (
              <>
                <Route path='/login' element={<Auth login />} />
                <Route path='/signup' element={<Auth signup />} />
                <Route path='/View/:pid' element={<><Header minimal /><View /></>} />
                <Route path='/search/:name' element={<><Header minimal /><SearchViewPage search /></>} />
                <Route path='/products' element={<><Header minimal /><SearchViewPage /></>} />
                <Route path='/Update/:pid' element={<Update />} />
                <Route path='/' element={<><Header /><Home /></>} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            ) : (
              <>
                <Route path='/' element={<><Header /><Home /></>} />
                <Route path='/upload' element={<Upload />} />
                <Route path='/View/:pid' element={<><Header minimal /><View /></>} />
                <Route path='/delete/:pid' element={<Delete />} />
                <Route path='/search/:name' element={<><Header minimal /><SearchViewPage search /></>} />
                <Route path='/products' element={<><Header minimal /><SearchViewPage /></>} />
                <Route path='/Update/:pid' element={<Update />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
