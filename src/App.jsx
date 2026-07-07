import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import WhyTMC from './pages/WhyTMC'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <Navbar />
      <main className="pt-[88px]">
        <Home />
        <About />
        <WhyTMC />
        <Contact />
      </main>
    </div>
  )
}

export default App
