import { useEffect } from "react";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import ProfessionalSummarySection from "./components/ProfessionalSummarySection";
import ProjectsSection from "./components/ProjectsSection";
import SiteHeader from "./components/SiteHeader";
import SystemsExperienceSection from "./components/SystemsExperienceSection";
import TechnicalSkillsSection from "./components/TechnicalSkillsSection";
import { portfolioContent } from "./data/portfolioData";
import { useLanguage } from "./hooks/useLanguage";

function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    elements.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${Math.min(index * 40, 160)}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}

function App() {
  useScrollReveal();
  const { language, toggleLanguage } = useLanguage();
  const content = portfolioContent[language] || portfolioContent.en;

  return (
    <div className="theme-root min-h-screen bg-transparent">
      <SiteHeader navItems={content.navItems} controls={content.controls} onLanguageToggle={toggleLanguage} />
      <main className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <HeroSection hero={content.hero} />
        <ProfessionalSummarySection summary={content.summary} />
        <ExperienceSection experience={content.experience} />
        <SystemsExperienceSection systems={content.systems} />
        <TechnicalSkillsSection skills={content.skills} />
        <ProjectsSection projects={content.projects} />
        <EducationSection education={content.education} />
        <ContactSection contact={content.contact} />
      </main>
    </div>
  );
}

export default App;
