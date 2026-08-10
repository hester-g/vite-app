import { Link, Route, Routes } from 'react-router'

import './App.css'
import Home from './pages/home.tsx'
import MySpotify from './pages/my-spotify.tsx'
import NewAlbums from './pages/new-albums.tsx'

function App() {
  return (
    <>
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
          <Route index element={<MySpotify />} />
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
    </>
  )
}

export default App
