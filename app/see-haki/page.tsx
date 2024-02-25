"use client";

import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import NavbarLoggedin from "../components/navbar-logged-in";

export default function Home() {
    const router = useRouter();

    const handleDetailRejected = () => {
      router.push('/detail/with-reason/rejected')
    }  
    const handleDetailPending = () => {
      router.push('/detail/with-reason/pending')
    }  
    const handleDetailApproved = () => {
      router.push('/detail/without-reason/approved')
    }

    return(
    <main className="bg-background min-h-screen w-screen">
      {/* font krona one */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
      <link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet"/>
      
      {/* font luckiest guy */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
      <link href="https://fonts.googleapis.com/css2?family=Krona+One&family=Luckiest+Guy&display=swap" rel="stylesheet"/>
      
      <NavbarLoggedin />

        <div className="flex flex-row place-content-start pl-10 pr-10 pt-5 pb-5">
            <div className="">
                <button className="text-xl font-krona-one bg-darkblue pl-10 pr-10 pt-5 pb-5 rounded-full">
                    Filter
                </button>
            </div>
            <div className="text-4xl font-krona-one pl-10 pr-10 pt-3 pb-3 text-darkblue	">
                Discover HAKI
            </div>
            
        </div>
        <div className="flex flex-row place-content-center pl-10 pr-10 pt-5 pb-5">
            <table className="table w-screen font-krona-one">
                <thead>
                    <tr className="py-10">
                    <th className="border border-blue-600 pl-2 bg-darkblue px-1">No</th>
                    <th className="border border-blue-600 pl-2 bg-darkblue px">Item ID</th>
                    <th className="border border-blue-600 pl-2 bg-darkblue">Judul</th>
                    <th className="border border-blue-600 pl-2 bg-darkblue">Deskripsi</th>
                    <th className="border border-blue-600 pl-2 bg-darkblue">Barcode</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-lgtbluebg text-black">
                       <td className="border border-blue-600 pl-2 px-1 py-1">1</td>
                       <td className="border border-blue-600 pl-2">0xHA7235921</td>
                       <td className="border border-blue-600 pl-2">JUDUL Ciptaan #1</td>
                       <td className="border border-blue-600 pl-2">Deskripsi</td>
                       <td className="border border-blue-600 pl-2 text-lgtblue"><a href="#">Tampilkan</a></td>
                    </tr>
                    <tr className="bg-darkbluebg text-black">
                        <td className="border border-blue-600 pl-2 px-1 py-1">2</td>
                       <td className="border border-blue-600 pl-2">0xPL1836529</td>
                       <td className="border border-blue-600 pl-2">JUDUL Ciptaan #2</td>
                       <td className="border border-blue-600 pl-2">Deskripsi</td>
                       <td className="border border-blue-600 pl-2 text-lgtblue"><a href="#">Tampilkan</a></td>
                    </tr>
                    <tr className="bg-lgtbluebg text-black">
                        <td className="border border-blue-600 pl-2 px-1 py-1">3</td>
                       <td className="border border-blue-600 pl-2">0xMK5998716</td>
                       <td className="border border-blue-600 pl-2">JUDUL Ciptaan #3</td>
                       <td className="border border-blue-600 pl-2">Deskripsi</td>
                       <td className="border border-blue-600 pl-2 text-lgtblue"><a href="#">Tampilkan</a></td>
                    </tr>
                    <tr className="bg-darkbluebg text-black">
                        <td className="border border-blue-600 pl-2 px-1 py-1">4</td>
                       <td className="border border-blue-600 pl-2">0xFH3935275</td>
                       <td className="border border-blue-600 pl-2">JUDUL Ciptaan #4</td>
                       <td className="border border-blue-600 pl-2">Deskripsi</td>
                       <td className="border border-blue-600 pl-2 text-lgtblue"><a href="#">Tampilkan</a></td>
                    </tr>
                    <tr className="bg-lgtbluebg text-black">
                        <td className="border border-blue-600 pl-2 px-1 py-1">5</td>
                       <td className="border border-blue-600 pl-2">0xLK8255649</td>
                       <td className="border border-blue-600 pl-2">JUDUL Ciptaan #5</td>
                       <td className="border border-blue-600 pl-2">Deskripsi</td>
                       <td className="border border-blue-600 pl-2 text-lgtblue"><a href="#">Tampilkan</a></td>
                    </tr>
                    <tr className="bg-darkbluebg text-black">
                        <td className="border border-blue-600 pl-2 px-1 py-1">6</td>
                       <td className="border border-blue-600 pl-2">0xKU7624108</td>
                       <td className="border border-blue-600 pl-2">JUDUL Ciptaan #6</td>
                       <td className="border border-blue-600 pl-2">Deskripsi</td>
                       <td className="border border-blue-600 pl-2 text-lgtblue"><a href="#">Tampilkan</a></td>
                    </tr>
                    <tr className="bg-lgtbluebg text-black">
                        <td className="border border-blue-600 pl-2 px-1 py-1">7</td>
                       <td className="border border-blue-600 pl-2">0xUY8172562</td>
                       <td className="border border-blue-600 pl-2">JUDUL Ciptaan #7</td>
                       <td className="border border-blue-600 pl-2">Deskripsi</td>
                       <td className="border border-blue-600 pl-2 text-lgtblue"><a href="#">Tampilkan</a></td>
                    </tr>
                    <tr className="bg-darkbluebg text-black">
                        <td className="border border-blue-600 pl-2 px-1 py-1">8</td>
                       <td className="border border-blue-600 pl-2">0xMB9125420</td>
                       <td className="border border-blue-600 pl-2">JUDUL Ciptaan #8</td>
                       <td className="border border-blue-600 pl-2">Deskripsi</td>
                       <td className="border border-blue-600 pl-2 text-lgtblue"><a href="#">Tampilkan</a></td>
                    </tr>
                    <tr className="bg-lgtbluebg text-black">
                        <td className="border border-blue-600 pl-2 px-1 py-1">9</td>
                       <td className="border border-blue-600 pl-2">0xGQ2012393</td>
                       <td className="border border-blue-600 pl-2">JUDUL Ciptaan #9</td>
                       <td className="border border-blue-600 pl-2">Deskripsi</td>
                       <td className="border border-blue-600 pl-2 text-lgtblue"><a href="#">Tampilkan</a></td>
                    </tr>
                    <tr className="bg-darkbluebg text-black">
                        <td className="border border-blue-600 pl-2 px-1 py-1">10</td>
                       <td className="border border-blue-600 pl-2">0xAK4712073</td>
                       <td className="border border-blue-600 pl-2">JUDUL Ciptaan #10</td>
                       <td className="border border-blue-600 pl-2">Deskripsi</td>
                       <td className="border border-blue-600 pl-2 text-lgtblue"><a href="#">Tampilkan</a></td>
                    </tr>
                </tbody>
            </table>    
        </div>


        <div className="grid grid-cols-6 gap-4">
            <div className="col-start-1 font-krona-one text-black pl-10">
                Halaman 1 dari 914
            </div>
            <div className="col-end-7 col-span-2">
                <div className="flex flex-row-reverse pr-10">
                <div className="pl-1">
                    <button className="text-xl font-krona-one bg-darkblue pl-5 pr-5 pt-2 pb-2 rounded-xl">
                        &gt;
                    </button>
                </div>
                <div className="pl-1 pr-1">
                    <button className="text-xl font-krona-one bg-darkblue pl-5 pr-5 pt-2 pb-2 rounded-xl">
                        &lt;
                    </button>
                </div>
            </div>
            </div>
        </div>
        

    </main>
    );
}