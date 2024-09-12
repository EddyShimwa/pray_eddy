import Image from "next/image";
import HomePage from "./sections/page";
import AboutPage from "./sections/about";
import Projects from "./sections/projects";
import NavBar from "@/components/ui/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <HomePage />
      <Projects />
      <AboutPage />
    </main>
  );
}
