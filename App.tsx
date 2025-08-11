import reactLogo from './assets/react.svg'
import './App.css'
import { useRef } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import CatFact from './TypeWriter';

function App() {
  const myRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    myRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  let urls: string[] = [
    "https://camo.githubusercontent.com/ccc13210226fc61695717f37436030b3252617333df7db2610659c50980d00f2/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f45307536623975555541416777416b3f666f726d61743d6a7067266e616d653d6d656469756d",
    "https://miro.medium.com/v2/resize:fit:1400/1*CHH1P0NwJfZzXXHo-VUzOA.png",
    "https://miro.medium.com/v2/resize:fit:1400/0*TsG7ssRjMaOdt1hk",
    
  ]
  
  const [n, setN] = useState(0);

  
  
  return (
    <div className='bg-[#0E031C]'>
      {/* Global styles */}
      <style>
      {`
        @keyframes floating {
        0% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0); }
        }
        .animate-floating {
        animation: floating 3s ease-in-out infinite;
        }
        .animate-spin-slow {
        animation: spin 6s linear infinite;
        }
        @keyframes spin {
        0% { transform: rotate(0deg);}
        100% { transform: rotate(360deg);}
        }
        @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
        }
      `}
      </style>

      <header className='w-full fixed top-[0%] z-50 flex items-center justify-between p-[2%] bg-[#0E031C] border-b border-violet-600'>
      <img src={reactLogo} className='h-12' alt='React logo' />
      
      <p className='text-white text-2xl font-bold fixed ml-15'>React Documentation</p>
      <nav className='flex space-x-4'>
        <a href='https://react.dev' className='text-white hover:text-gray-300'>Home</a>
        <a href='https://react.dev/docs/getting-started' className='text-white hover:text-gray-300'>Docs</a>
        <a href='https://react.dev/community/support' className='text-white hover:text-gray-300'>Support</a>
      </nav>
      </header>

      <main className="bg-[#0E031C] min-h-screen flex items-center w-screen relative">
        <section className="relative z-10 flex flex-col items-center w-full px-4">
          <h1 className="text-white font-bold mb-4 animate-fadeIn text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
            Welcome to the React Documentation
          </h1>
          <p className="text-white text-base sm:text-lg mb-8 text-center">
            Explore the official React documentation to learn more about building user interfaces with React.
          </p>
          <button
            onClick={handleScroll}
            className="bg-violet-600 text-white px-6 py-2 rounded hover:bg-violet-700 transition-colors w-full max-w-xs"
          >
            <a href="">Get Started</a>
          </button>
        </section>

        
      
      </main>

      <section className='bg-[#17062d] text-white p-[4%] h-[700px] w-full ' ref={myRef}>
      <h2 className='sg:text-xl md:text-2xl lg:text-3xl font-bold mt-12'>Change your coding experience...</h2>
      <p className='mt-[2%] sm:text-sm md:text-base lg:text-lg font-semibold'>
        React is a popular JavaScript library for building user interfaces.
        It enables developers to create reusable UI components and manage complex application states efficiently.
        With its declarative approach and virtual DOM, React makes it easy to build fast and interactive web applications.
        Start exploring React to enhance your development workflow and deliver seamless user experiences.
      </p>
      
      <div className="mt-[2%] flex flex-col items-center">
        <div className="relative flex items-center justify-center w-full max-w-xl">
          <IconButton
        onClick={() => setN(prev => Math.max(0, prev - 1))}
        className="!absolute left-0 z-10 bg-violet-700 hover:bg-violet-800 shadow-lg"
        size="large"
        aria-label="Previous"
        disabled={n === 0}
          >
        <ArrowBackIcon className={`text-white ${n === 0 ? 'opacity-40' : ''}`} fontSize="large" />
          </IconButton>
          <img
        className="rounded-3xl shadow-2xl transition-all duration-500 object-cover w-[400px] h-[260px] mx-16 border-4 border-violet-600 bg-[#1a0933]"
        src={urls[n]}
        alt={`Carousel ${n + 1}`}
        style={{ boxShadow: "0 8px 32px 0 rgba(76,0,255,0.25)" }}
          />
          <IconButton
        onClick={() => setN(prev => Math.min(urls.length - 1, prev + 1))}
        className="!absolute right-0 z-10 bg-violet-700 hover:bg-violet-800 shadow-lg"
        size="large"
        aria-label="Next"
        disabled={n === urls.length - 1}
          >
        <ArrowForwardIcon className={`text-white ${n === urls.length - 1 ? 'opacity-40' : ''}`} fontSize="large" />
          </IconButton>
        </div>
        <div className="flex justify-center mt-[2%] space-x-[2%]">
          {urls.map((_, idx) => (
        <span
          key={idx}
          className={`inline-block w-3 h-3 rounded-full transition-all duration-300 ${n === idx ? 'bg-violet-500 scale-125' : 'bg-gray-400 opacity-40'}`}
          style={{ boxShadow: n === idx ? "0 0 8px #7c3aed" : undefined }}
        />
          ))}
        </div>
      </div>
      </section>
      
      <h2 className='sm: text-xl md:text-2xl lg:text-3xl font-bold mt-12 ml-4'>React's Philosophy</h2>
      <section className='bg-[#0E031C] text-white p-8 h-[450px] w-full flex flex-row items-center justify-center space-x-5 mt-[200px]'>
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
          <div className="bg-[#140527] w-full sm:w-[250px] h-[200px] sm:h-[500px] border-2 border-violet-500 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-violet-300 cursor-pointer flex items-center justify-center">
            <p className="text-lg sm:text-xl font-semibold">API</p>
          </div>
          <div className="bg-[#140527] w-full sm:w-[250px] h-[200px] sm:h-[500px] border-2 border-violet-500 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-violet-300 cursor-pointer flex items-center justify-center">
            <p className="text-lg sm:text-xl font-semibold">Components</p>
          </div>
          <div className="bg-[#140527] w-full sm:w-[250px] h-[200px] sm:h-[500px] border-2 border-violet-500 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-violet-300 cursor-pointer flex items-center justify-center">
            <p className="text-lg sm:text-xl font-semibold">VDOM</p>
          </div>
        </div>

      </section>
        <div className="flex flex-col space-y-[4%] mt-[4%]">
          <p className='mt-4'>
            React provides a powerful API that allows developers to build dynamic and interactive user interfaces with ease. Its declarative approach means you describe what you want the UI to look like, and React takes care of updating the DOM efficiently when your data changes. The API includes features like hooks for managing state and side effects, as well as context for sharing data across components, making it flexible and scalable for applications of any size.
          </p>
          <p className='mt-[2%]'>
            Components are the building blocks of React applications. Each component encapsulates its own structure, logic, and styling, promoting reusability and maintainability. Under the hood, React uses a Virtual DOM (VDOM) to optimize rendering performance. Instead of updating the real DOM directly, React creates a lightweight copy (the VDOM), calculates the minimal set of changes needed, and then efficiently updates the real DOM. This approach results in faster updates and a smoother user experience.
          </p>
        </div>

      
        

        <div className='bg-[#17062d] text-white p-8 h-[500px] w-full flex flex-col items-center justify-center mt-[200px]'><CatFact /></div>
      <footer className='bg-[#0E031C] text-white p-4 text-center'>
        <p className='text-sm'>© 2023 React Documentation. All rights reserved.</p>
        <p className='text-sm'>Made with ❤️ by the React Team</p>
      </footer>
    </div>
  )
}

export default App
