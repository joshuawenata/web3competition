"use client";
import Navbar from "@/app/components/navbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleCancel = () => {
    router.push('/your-haki')
  }
  
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
                    BARANG
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
                    BALON TIDAK TERBANG
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
                    22 Februari 2024
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
                    INDONESIA
                    </text>
                </div>
                <div 
                className="mt-3 bg-gray-50 border font-krona-one h-16 border-gray-300 rounded-lg block w-full ps-4 p-1.5" 
                style={{ width: "36rem" }} >
                    <text className="text-sm text-gray-400">
                    Status
                    </text>
                    <br />
                    <text className="text-base text-blue-500">
                    PENDING
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
                    BANDUNG
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
                    BALON INI TIDAK TERBANG LOH
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
                    KINUT
                    </text>
                </div>
                <div 
                className="mt-3 bg-gray-50 border font-krona-one h-16 border-gray-300 rounded-lg block w-full ps-4 p-1.5" 
                style={{ width: "36rem" }} >
                    <text className="text-sm text-gray-400">
                    Reason Pending
                    </text>
                    <br />
                    <text className="text-base text-blue-500">
                    MENUNGGU PEMBAYARAN
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
