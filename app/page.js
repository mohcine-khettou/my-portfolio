import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import Sidebar from "./components/Sidebar";


export default function Home() {
  return (
    <main className="container">
        <Sidebar />
        <div className="main">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
            
        </div>
        
    </main>
  );
}
