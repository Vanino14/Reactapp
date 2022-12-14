
import './App.css';
import Register from './pages/register';
import Login from './pages/login';
import RegisterComponent from './comp/register-component';
import PreRegister from './comp/preregister';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Nav from './pages/nav';
import ComingsoonFeature from './pages/comingsoon-feature';
import NoPage from './pages/no-page';
import Sales from './pages/sales';


function App() {
  return (
  <Routes>
    <Route path={'/'} element={<Login />} />
    <Route path={'/register'} element={<Register />}>
      <Route path={'/register'} element={<PreRegister />} />
      <Route path={'/register/next'} element={<RegisterComponent />} />
    </Route>
    <Route path={'/'} element={<Nav />}>
      <Route path={'/home'} element={<Home />} />
      <Route path={'/sales'} element={<Sales />} />
      <Route path={'/inventory'} element={<ComingsoonFeature />} />
      <Route path={'/purchase'} element={<ComingsoonFeature />} />
      <Route path={'/user'} element={<ComingsoonFeature />} />
      <Route path='*' element={<NoPage />} />
    </Route>
  </Routes>
    );
}
export default App;
