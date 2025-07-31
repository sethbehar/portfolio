import { Linkedin } from "lucide-react";
import ScatterText from "../motions/scatter";
import SplitText from "../motions/SplitText";
import { Link } from 'react-router-dom';
import {
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export default function Hero({ isPaid, user, isLoaded }) {

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Navigation */}
      <nav className="flex items-center justify-center pt-12 pb-8">
        <div className="flex items-center gap-8">
          {!isLoaded ? (
            // while Clerk is booting up, show the loading.gif
            <img
              src="/loading.gif"
              alt="Loading…"
              className="w-8 h-8 animate-spin select-none"
            />
          ) : user ? (
            // once loaded, if we have a user, show their UserButton
            <UserButton className='select-none' />
          ) : (
            // otherwise show the SignInButton
            <SignInButton
              href="/"
              className="select-none text-[#0a0614] font-medium hover:opacity-70 transition-opacity"
            >
              Login
            </SignInButton>
          )}

          {isPaid ? <Link
            to="/about"
            className="select-none text-[#0a0614] font-medium hover:opacity-70 transition-opacity"
          >
            About
          </Link>
            : <div
              className="text-[#0a0614] font-medium hover:opacity-70 transition-opacity flex flex-row gap-2 items-center cursor-pointer"
            >
              <img src='/lock.svg' alt='x' width={15} height={15} className="select-none"/>
              <span className="select-none">About</span>
            </div>
          }
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="select-none bg-[#2349ff] hover:bg-[#2349ff]/90 text-[#ffffff] px-8 py-2 rounded-full font-medium"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl">
          <SplitText
            style="text-6xl md:text-7xl lg:text-8xl font-bold text-[#0a0614] mb-8 leading-tight select-none"
            words="Hi, I'm Seth"
          />
          <ScatterText
            style="text-lg text-gray-600 mb-16 max-w-2xl mx-auto font-light select-none"
          />
        </div>

        {/* LinkedIn Icon */}
        <div className="flex flex-row items-center gap-8 ">
          <div className="">
           <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8 cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/seth-behar", "_blank")}/>
          </div>
          <div className="">
           <img src="/git.png" alt="GitHub" className="w-8 h-8 cursor-pointer" onClick={() => window.open("https://github.com/seth-behar", "_blank")}/>
          </div>
        </div>
      </main>
    </div>
  );
}
