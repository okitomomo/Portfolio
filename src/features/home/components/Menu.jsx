import { HashLink } from 'react-router-hash-link';

export default function Menu() {
    return (
        <nav className="flex flex-col md:flex-row font-eng min-h-[470px]">
            <div className="bg-[#272626] md:[writing-mode:vertical-rl] md:rotate-180 p-2 md:py-4">
                <div className="text-3xl md:text-7xl pt-12 md:pt-0 tracking-wider">
                    Portfolio
                </div>
                <div className="text-lg">Engineer TomohiroOkita's Work</div>
            </div>
            <HashLink smooth to="#about-this" className="group relative flex flex-1 cursor-pointer"> 
                <div className="absolute inset-0 bg-[url('/Portfolio/img/header_01.jpg')] bg-cover bg-left grayscale brightness-[15%] group-hover:brightness-100 transition-all duration-300"></div>
                <div className="md:absolute bottom-20 z-10 flex w-full flex-row md:flex-col items-center group-hover:text-stroke">
                    <div className="absolute md:relative text-6xl md:text-7xl font-num p-3 md:p-0 transition-transform duration-300 ease-in-out group-hover:scale-[1.5]">01</div>
                    <div className="flex items-center justify-center md:block font-thin md:font-bold grow md:grow-0 h-[75px] md:h-auto text-center md:text-left transition-transform duration-1000 ease-in-out group-hover:text-lg">About this</div>
                </div>
            </HashLink>
            <HashLink smooth to="#about-me" className="group relative flex flex-1 cursor-pointer">
                <div className="absolute inset-0 bg-[url('/Portfolio/img/header_02.jpg')] bg-cover bg-[center_25%] md:bg-[50%_center] grayscale brightness-[15%] group-hover:brightness-100 transition-all duration-300"></div>
                <div className="md:absolute bottom-20 z-10 flex w-full flex-row md:flex-col items-center group-hover:text-stroke">
                    <div className="absolute md:relative text-6xl md:text-7xl font-num p-3 md:p-0 md:mt-60 transition-transform duration-300 ease-in-out group-hover:scale-[1.5]">02</div>
                    <div className="flex items-center justify-center md:block font-thin md:font-bold grow md:grow-0 h-[75px] md:h-auto text-center md:text-left transition-transform duration-1000 ease-in-out group-hover:text-lg">About me</div>
                </div>
            </HashLink>
            <HashLink smooth to="#skill-set" className="group relative flex flex-1 cursor-pointer">
                <div className="absolute inset-0 bg-[url('/Portfolio/img/header_03.jpg')] bg-cover bg-[40%_center] grayscale brightness-[15%] group-hover:brightness-100 transition-all duration-300"></div>
                <div className="md:absolute bottom-20 z-10 flex w-full flex-row md:flex-col items-center group-hover:text-stroke">
                    <div className="absolute md:relative text-6xl md:text-7xl font-num p-3 md:p-0 md:mt-60 transition-transform duration-300 ease-in-out group-hover:scale-[1.5]">03</div>
                    <div className="flex items-center justify-center md:block font-thin md:font-bold grow md:grow-0 h-[75px] md:h-auto text-center md:text-left transition-transform duration-1000 ease-in-out group-hover:text-lg">Skill Set</div>
                </div>
            </HashLink>
            <HashLink smooth to="#production" className="group relative flex flex-1 cursor-pointer">
                <div className="absolute inset-0 bg-[url('/Portfolio/img/header_04.jpg')] bg-cover bg-[45%_center] grayscale brightness-[15%] group-hover:brightness-100 transition-all duration-300"></div>
                <div className="md:absolute bottom-20 z-10 flex w-full flex-row md:flex-col items-center group-hover:text-stroke">
                    <div className="absolute md:relative text-6xl md:text-7xl font-num p-3 md:p-0 md:mt-60 transition-transform duration-300 ease-in-out group-hover:scale-[1.5]">04</div>
                    <div className="flex items-center justify-center md:block font-thin md:font-bold grow md:grow-0 h-[75px] md:h-auto text-center md:text-left transition-transform duration-1000 ease-in-out group-hover:text-lg">Production</div>
                </div>
            </HashLink>
            <HashLink smooth to="#qualification" className="group relative flex flex-1 cursor-pointer">
                <div className="absolute inset-0 bg-[url('/Portfolio/img/header_05.jpg')] bg-cover bg-[40%_center] grayscale brightness-[15%] group-hover:brightness-100 transition-all duration-300"></div>
                <div className="md:absolute bottom-20 z-10 flex w-full flex-row md:flex-col items-center group-hover:text-stroke">
                    <div className="absolute md:relative text-6xl md:text-7xl font-num p-3 md:p-0 md:mt-60 transition-transform duration-300 ease-in-out group-hover:scale-[1.5]">05</div>
                    <div className="flex items-center justify-center md:block font-thin md:font-bold grow md:grow-0 h-[75px] md:h-auto text-center md:text-left transition-transform duration-1000 ease-in-out group-hover:text-lg">Qualification</div>
                </div>
            </HashLink>
            <HashLink smooth to="#workhistory" className="group relative flex flex-1 cursor-pointer">
                <div className="absolute inset-0 bg-[url('/Portfolio/img/header_06.png')] bg-cover bg-[center_65%] md:bg-[40%_center] grayscale brightness-[15%] group-hover:brightness-100 transition-all duration-300"></div>
                <div className="md:absolute bottom-20 z-10 flex w-full flex-row md:flex-col items-center group-hover:text-stroke">
                    <div className="absolute md:relative text-6xl md:text-7xl font-num p-3 md:p-0 md:mt-60 transition-transform duration-300 ease-in-out group-hover:scale-[1.5]">06</div>
                    <div className="flex items-center justify-center md:block font-thin md:font-bold grow md:grow-0 h-[75px] md:h-auto text-center md:text-left transition-transform duration-1000 ease-in-out group-hover:text-lg">Work History</div>
                </div>
            </HashLink>
            <HashLink smooth to="#my-life" className="group relative flex flex-1 cursor-pointer">
                <div className="absolute inset-0 bg-[url('/Portfolio/img/header_07.jpg')] bg-cover bg-[center_65%] md:bg-[60%_center] grayscale brightness-[15%] group-hover:brightness-100 transition-all duration-300"></div>
                <div className="md:absolute bottom-20 z-10 flex w-full flex-row md:flex-col items-center group-hover:text-stroke">
                    <div className="absolute md:relative text-6xl md:text-7xl font-num p-3 md:p-0 md:mt-60 transition-transform duration-300 ease-in-out group-hover:scale-[1.5]">07</div>
                    <div className="flex items-center justify-center md:block font-thin md:font-bold grow md:grow-0 h-[75px] md:h-auto text-center md:text-left transition-transform duration-1000 ease-in-out group-hover:text-lg">My life</div>
                </div>
            </HashLink>
        </nav>
    );
}