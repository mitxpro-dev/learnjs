import RootLayout from '@/RootLayout'
import Home from '@/pages'
import About from '@/pages/about'
import Challenges from '@/pages/challenges'
import SingleChallenge from '@/pages/challenges/challenge'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route path='/challenges'>
          <Route index element={<Challenges />} />
          <Route path=':id' element={<SingleChallenge />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
