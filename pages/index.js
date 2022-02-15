import Head from 'next/head'
import Navbar from '../components/Navbar'
//import TypeWriter from "react-typewriter"
//import Image from 'next/image'
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Furrier</title>
        <meta name="description" content="Generated by create next app" />
        {/*<link rel="icon" href="../public/logo.png" />*/}
      </Head>

      <Navbar />

      {/* Head */}
      {/*<div className="mt-7 bg-slate-800 h-screen w-full bg-[url('../public/header.jpeg')] bg-cover bg-blend-overlay">*/}
      {/*<div className="mt-7 px-20 md:pl-40 flex flex-col justify-center items-center h-screen w-full bg-slate-700">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-1/2 gap-20">
        <div className="flex flex-col justify-center items-center">
        <h1 className="title font-sans text-xl md:text-3xl font-medium text-cyan-600 mb-10">About Us</h1>
        </div>
        <div className="w-full bg-[url('../public/header.jpeg')] bg-no-repeat bg-contain" ></div>  
        </div>
  </div>*/}
  

      {/* About Us */}
      <div className="px-20 md:pl-40 flex flex-col justify-center items-center h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-1/2 gap-20">
        <div className="flex flex-col justify-center items-center">
        <h1 className="title font-sans text-xl md:text-3xl font-medium text-cyan-600 mb-10">About Us</h1>
        <p>Furrier is an Animal Welfare platform and an Information Hub for current and prospective pet owners, which aims to assist the owners in taking better care for their pets, by connecting them with essential facilities/services and by providing services like health/medication monitoring, diet plans for pets etc.</p>
        <br /> 
        <p>Furthermore, we also aim to Promote and assist adoption of animals and contribute towards other animal welfare programs as well as create awareness regarding prominent issues of Animal Welfare, and propose possible solutions</p>
        </div> 
        <div className="hidden lg:inline-block w-full bg-[url('../public/about-us.png')] bg-no-repeat bg-contain" ></div>  
        </div>
        <button className="mt-20 border-r-2 border-b-2 border-l-2 border-gray-200 bg-white shadow-md rounded-r-full rounded-l-full p-4 font-bold text-cyan-600 text-md hover:shadow-lg w-full md:w-40">Know More</button>
      </div>

      {/* Services */}
      <hr/>
      <div className="px-20 md:pl-40 flex flex-col justify-center items-center h-screen bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-1/2 gap-20">
        <div className="hidden lg:inline-block w-full bg-[url('../public/services.png')] bg-no-repeat bg-contain" ></div>
        <div className="flex flex-col justify-center items-center">
        <h1 className="title font-sans text-xl md:text-3xl font-medium text-cyan-600 mb-10">Services</h1>
        <p >We provide various services that are important for your pet. Check out our services and provide your pet with the best facilities available in the town</p>  
        </div>
        </div>
        <button className="mt-20 border-r-2 border-b-2 border-l-2 border-gray-200 bg-white shadow-md rounded-r-full rounded-l-full p-4 font-bold text-cyan-600 text-md hover:shadow-lg w-full md:w-40">View Page</button>
      </div>

      {/* Adoption */}
      <hr/>
      <div className="px-20 md:pl-40 flex flex-col justify-center items-center h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-1/2 gap-20">
        <div className="flex flex-col justify-center items-center">
        <h1 className="title font-sans text-xl md:text-3xl font-medium text-cyan-600 mb-10">Adoption</h1>
        <p>Check out the necessary guidelines required to adopt a pet to prevent yourself from any unknown legal troubles. Also, check out the 'Available Pets' section to know your options.  </p>  
        </div>
        <div className="hidden lg:inline-block w-full bg-[url('../public/adopt.jpeg')] bg-no-repeat bg-contain" ></div>
        </div>
        <button className="mt-20 border-r-2 border-b-2 border-l-2 border-gray-200 bg-white shadow-md rounded-r-full rounded-l-full p-4 font-bold text-cyan-600 text-md hover:shadow-lg w-full md:w-40">View Page</button>
      </div>

      {/* Help Desk - FAQs */}
      <hr/>
      <div className="px-20 md:pl-40 flex flex-col justify-center items-center h-screen bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-1/2 gap-20">
        <div className="hidden lg:inline-block w-full bg-[url('../public/faq.png')] bg-no-repeat bg-contain" ></div>
        <div className="flex flex-col justify-center items-center">
        <h1 className="title font-sans text-xl md:text-3xl font-medium text-cyan-600 mb-10">Help Desk - FAQs</h1>
        <p>Check out the FAQs in the Help Desk tab. Feel free to contact us in case of any further queries.</p>  
        </div>
        </div>
        <button className="mt-20 border-r-2 border-b-2 border-l-2 border-gray-200 bg-white shadow-md rounded-r-full rounded-l-full p-4 font-bold text-cyan-600 text-md hover:shadow-lg w-full md:w-40">View Page</button>
      </div>
      <Footer />
    </div>
  );
}

        