import { lazy,Suspense } from "react"
import { FullScreenLoader } from "./ui/common/Loader";
const Contact = lazy(()=>import("./ui/common/LeftMenu/Contact"));
const Hero = lazy(()=>import("./ui/common/LeftMenu/Hero"));
const Navbar = lazy(()=>import("./ui/common/LeftMenu/Navbar"));
const Services = lazy(()=>import("./ui/common/LeftMenu/Services"))

const About =lazy(()=>import( "./ui/common/LeftMenu/About"))
function App() {
  

  return (
    <Suspense fallback={<FullScreenLoader/>}>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Contact/>
    </Suspense>
  )
}



export default App