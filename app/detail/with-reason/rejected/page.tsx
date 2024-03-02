"use client";
import Navbar from "@/app/components/navbar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Haki {
  id: number;
  uid: number;
  jenis_ciptaan: string
  judul_ciptaan: string
  tanggal_ciptaan: string
  negara_ciptaan: string
  kota_ciptaan: string
  deskripsi_ciptaan: string
  status: string   
  reason: string
}

export default function Home() {
  const router = useRouter();

  const handleCancel = async () => {
    const responses = await fetch("http://localhost:4000/get-username", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    if (!responses.ok) {
      throw new Error('Network response was not ok');
    }

    const {username} = await responses.json();

    username=="admin"?
      router.push('/admin-page/approval')
    :
      router.push('/your-haki')
  }

  const [hakis, setHakis] = useState<Haki>();
  const [pemilik, setPemilik] = useState('');

  const itemid = localStorage.getItem('itemid');
  const findHaki = async () => {
    try {
      const response = await fetch("http://localhost:4000/find-haki", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({itemid: itemid}),
          credentials: 'include',
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const {item} = await response.json();
      setHakis(item[0]);

      const responses = await fetch("http://localhost:4000/get-username-by-id", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({uid: item[0]?.uid})
      });

      if (!responses.ok) {
          throw new Error('Network response was not ok');
      }

      const {username} = await responses.json();
      setPemilik(username);
      console.log(username)
    } catch (error: any) {
        console.error('Error fetching Haki:', error.message);
    }
  }

  useEffect(() => {
    findHaki()
  },[])
  
  return (
    <main className="bg-background min-h-screen w-screen">
      {/* font krona one */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
      <link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet"/>
      
      {/* font luckiest guy */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
      <link href="https://fonts.googleapis.com/css2?family=Krona+One&family=Luckiest+Guy&display=swap" rel="stylesheet"/>
      
      <Navbar />

      <div className="flex flex-row place-content-center">

      <div>
          <div className="flex justify-center">
            <form> 
                <div 
                className="mt-3 bg-gray-50 border font-krona-one h-16 border-gray-300 rounded-lg block w-full ps-4 p-1.5" 
                style={{ width: "36rem" }} >
                    <text className="text-sm text-gray-400">
                    Jenis Ciptaan
                    </text>
                    <br />
                    <text className="text-base text-blues">
                    {hakis?.jenis_ciptaan}
                    </text>
                </div>

                <div 
                className="mt-3 bg-gray-50 border font-krona-one h-16 border-gray-300 rounded-lg block w-full ps-4 p-1.5" 
                style={{ width: "36rem" }} >
                    <text className="text-sm text-gray-400">
                    Judul Ciptaan
                    </text>
                    <br />
                    <text className="text-base text-blues">
                    {hakis?.judul_ciptaan}
                    </text>
                </div>

                <div 
                className="mt-3 bg-gray-50 border font-krona-one h-16 border-gray-300 rounded-lg block w-full ps-4 p-1.5" 
                style={{ width: "36rem" }} >
                    <text className="text-sm text-gray-400">
                    Tanggal Ciptaan Diumumkan
                    </text>
                    <br />
                    <text className="text-base text-blues">
                    {hakis?.tanggal_ciptaan}
                    </text>
                </div>
                <div 
                className="mt-3 bg-gray-50 border font-krona-one h-16 border-gray-300 rounded-lg block w-full ps-4 p-1.5" 
                style={{ width: "36rem" }} >
                    <text className="text-sm text-gray-400">
                    Negara Ciptaan Diumumkan
                    </text>
                    <br />
                    <text className="text-base text-blues">
                    {hakis?.negara_ciptaan}
                    </text>
                </div>
                <div 
                className="mt-3 bg-gray-50 border font-krona-one h-16 border-gray-300 rounded-lg block w-full ps-4 p-1.5" 
                style={{ width: "36rem" }} >
                    <text className="text-sm text-gray-400">
                    Status
                    </text>
                    <br />
                    <text className="text-base text-red-500">
                    {hakis?.status}
                    </text>
                </div>
    
            </form>
          </div>

          
        </div>

        {/* form section */}
        <div className="pl-5">
          <div className="flex justify-center">
          <form> 
                <div 
                className="mt-3 bg-gray-50 border font-krona-one h-16 border-gray-300 rounded-lg block w-full ps-4 p-1.5" 
                style={{ width: "36rem" }} >
                    <text className="text-sm text-gray-400">
                    Kota Ciptaan Diumumkan
                    </text>
                    <br />
                    <text className="text-base text-blues">
                    {hakis?.kota_ciptaan}
                    </text>
                </div>

                <div 
                className="mt-3 bg-gray-50 border font-krona-one border-gray-300 rounded-lg block w-full ps-4 p-1.5" 
                style={{ width: "36rem", height: "8.75rem"}} >
                    <text className="text-sm text-gray-400">
                    Deskripsi Singkat
                    </text>
                    <br />
                    <text className="text-base text-blues">
                    {hakis?.deskripsi_ciptaan}
                    </text>
                </div>

                <div 
                className="mt-3 bg-gray-50 border font-krona-one h-16 border-gray-300 rounded-lg block w-full ps-4 p-1.5" 
                style={{ width: "36rem" }} >
                    <text className="text-sm text-gray-400">
                    Pemilik
                    </text>
                    <br />
                    <text className="text-base text-blues">
                    {pemilik}
                    </text>
                </div>
                <div 
                className="mt-3 bg-gray-50 border font-krona-one h-16 border-gray-300 rounded-lg block w-full ps-4 p-1.5" 
                style={{ width: "36rem" }} >
                    <text className="text-sm text-gray-400">
                    Reason Rejected
                    </text>
                    <br />
                    <text className="text-base text-red-500">
                    {hakis?.reason}
                    </text>
                </div>
    
            </form>
          </div>
        
          
        </div>
        
      </div>
      <div className="flex justify-center mt-10">
            <button 
              onClick={handleCancel}
              className="text-xl font-krona-one bg-bluesk pl-10 pr-10 pt-5 pb-5 rounded-xl"
              style={{ width: "24rem" }} >
              CANCEL
            </button>
          </div>

    </main>
  );
}
