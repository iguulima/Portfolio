import HeroSection from "../components/HeroSection"
import Experience from "../components/Experience"
import HomeProjects from "../components/HomeProjects"

import '../pages/tech.css'

import '../pages/home.css';
import HomeTech from "../components/HomeTech"


const Home = () => {
  return (
    <div className="content">
        <HeroSection />
        <HomeTech/>
        <HomeProjects />
        <Experience />
    </div>
  )
}

export default Home