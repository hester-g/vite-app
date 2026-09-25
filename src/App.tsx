import { Link, Route, Routes } from 'react-router'

import './App.css'
import { LoginProvider } from './components/login-provider'
import ProcessLogin from './components/process-login'
import Home from './pages/home'
import MySpotify from './pages/my-spotify'
import NewAlbums from './pages/new-albums'

function App() {
  return (
    <LoginProvider>
      <div
        className={'flex justify-evenly p-4 w-full bg-cyan-400 text-indigo-500'}
      >
        <Link to='/'>Home</Link>
        <Link to='/my-spotify'>My Spotify</Link>
        <Link to='/new-albums'>New Albums</Link>
      </div>

      <Routes>
        <Route index element={<Home />} />

        <Route path='callback'>
          <Route index element={<ProcessLogin />} />
        </Route>
        {/*<Route path='about' element={<About />} />*/}

        {/*<Route element={<AuthLayout />}>*/}
        {/*  <Route path='login' element={<Login />} />*/}
        {/*  <Route path='register' element={<Register />} />*/}
        {/*</Route>*/}
        <Route path='my-spotify'>
          <Route index element={<MySpotify />} />
        </Route>

        <Route path='new-albums'>
          <Route index element={<NewAlbums />} />
        </Route>
      </Routes>
    </LoginProvider>
  )
}

export default App
