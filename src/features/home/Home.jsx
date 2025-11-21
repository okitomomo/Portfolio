import Menu from "./components/Menu.jsx";
import AboutThis from "./components/AboutThis.jsx";
import AboutMe from "./components/AboutMe.jsx";
import SkillSet from "./components/skill-set/SkillSet.jsx";
import Production from "./components/production/Production.jsx";
import Qualification from "./components/qualification/Qualification.jsx";
import WorkHistory from "./components/work-history/WorkHistory.jsx";
import MyLife from "./components/my-life/MyLife.jsx";
import Footer from "./components/Footer.jsx";
import ModalProvider from "../components/modal/ModalProvider.jsx";
import ScrollProvider from '../components/ScrollProvider.jsx';

export default function Home() {
    return (
        <ModalProvider>
            <ScrollProvider />
            <div className="text-white mx-auto bg-[#0c0c0c] max-w-[1400px] z-10">
                <Menu />
                <div className="px-4 md:px-12 py-8">
                    <AboutThis />
                    <AboutMe />
                    <SkillSet />
                    <Production />
                    <Qualification />
                    <WorkHistory />
                    <MyLife />
                    <Footer />
                </div>
            </div>
        </ModalProvider>
    );
}