import Image from "next/image";
import HomePage from "./sections/page";
import AboutPage from "./sections/about";
import Projects from "./sections/projects";
import Header from "./Header";
export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between py-8 px-24">
     <Header logo="Eddy" />
      <HomePage />
      <Projects />
      <AboutPage />
    </main>
  );
}
