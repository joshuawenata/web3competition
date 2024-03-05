"use client";

import { useRouter } from "next/navigation";
import NavbarLoggedin from "../components/navbar-logged-in";
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

    const [pemilik, setPemilik] = useState('');
    const [items, setItems] = useState<Haki[]>([]);
    const [filteredItems, setFilteredItems] = useState<Haki[]>([]);
    const [uid, setUid] = useState(0);
    
    const fetchHaki = async () => {
        try {
            const response = await fetch("http://localhost:4000/fetch-see-haki", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const {item} = await response.json();
            setItems(item);
            setFilteredItems(item);
        } catch (error: any) {
            console.error('Error fetching Haki:', error.message);
        }
    }

    const fetchUid = async () => {
        try {
            const response = await fetch("http://localhost:4000/getUid", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const {uid} = await response.json();
            setUid(uid);
        } catch (error: any) {
            console.error('Error fetching Haki:', error.message);
        }
    }

    useEffect(() => {
        fetchHaki()
        fetchUid()
    },[])

    const handleBuy = async (hid: number) => {
        try {
            const response = await fetch("http://localhost:4000/buy-haki", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({uid: uid, hid: hid})
            })
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseBody = await response.text();

            if(responseBody=='already buy this item!'){
                router.push('/error/error-buy')
            }else{
                router.push('/payment')
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    const [filterEnabled, setFilter] = useState(false);
    const [page, setPage] = useState(1);
    const [text, setText] = useState({jenis : 'copyright type', negara : 'country', kota: 'city', tanggal: ''});
    let itemsPerPage = 10;
    let number = 0;

    const handleFilter = () => {
        if (!filterEnabled) {
            setFilter(true)
            setText({jenis : 'copyright type', negara : 'country', kota: 'city', tanggal: ''})
        }
        else {
            setFilter(false)
            setText({jenis : 'copyright type', negara : 'country', kota: 'city', tanggal: ''})
        }
    };

    async function handleExport(itemid: number) {
        try {
            const response = await fetch("http://localhost:4000/export-pdf", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({itemid: itemid}),
            });
    
            if (!response.ok) {
                throw new Error(`Failed to export PDF: ${response.statusText}`);
            }
    
            // Retrieve the PDF content type from the response headers
            const contentType = response.headers.get('Content-Type');
    
            // Check if the response is a PDF
            if (contentType && contentType.includes('application/pdf')) {
                // Create a Blob from the response data
                const blob = await response.blob();
    
                // Create a URL for the Blob
                const url = URL.createObjectURL(blob);
    
                // Open the PDF in a new browser tab
                window.open(url, '_blank');
            } else {
                console.error('Invalid response format. Expected PDF.');
            }
        } catch (error) {
            console.error('Error exporting PDF:', error);
        }
    }

    const handleNext = () => {
        let totalPage;
        if (!filteredItems.length) {
            totalPage = 1
        }
        else {
            totalPage = Math.ceil(filteredItems.length / itemsPerPage)
        }
        if (page < totalPage) {
            setPage(page+1)
        }
    }

    const handlePrev = () => {
        if (page > 1) {
            setPage(page-1)
        }
    }

    // filter
    useEffect(() => {
        setFilteredItems([]);
        if (items.length > 0) {
            items.forEach((item) => {
                if ((!filterEnabled) || 
                    ((text.jenis === 'copyright type' || item.jenis_ciptaan === text.jenis) &&
                    (text.negara === 'country' || item.negara_ciptaan === text.negara) &&
                    (text.kota === 'city' || item.kota_ciptaan === text.kota) &&
                    (text.tanggal === '' || item.tanggal_ciptaan === text.tanggal))) {
                    setFilteredItems(prevFilteredItems => [...prevFilteredItems, item]);
                }
            });
        }
    }, [text]);

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
                <button onClick={handleFilter} className="text-xl font-krona-one bg-darkblue pl-10 pr-10 pt-5 pb-5 rounded-full">
                    Filter
                </button>
            </div>
            <div className="text-4xl font-krona-one pl-10 pr-10 pt-3 pb-3 text-darkblue	">
                Discover HAKI
            </div>
            
        </div>
        
        <div>
            {filterEnabled ? (
                <div className="flex flex-row place-content-start pl-10">
                    <div className="mr-5">
                        <select 
                            id="jenis" 
                            className="bg-gray-50 border font-krona-one text-base h-12 border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            style    = {{width: `${text.jenis.length + 2}rem`}}
                            onChange={(e) => setText({...text, jenis : e.target.value})} >
                            <option selected disabled value="">Copyright Type</option>
                            <option value="work-of-sculpture">WORK OF SCULPTURE</option>
                            <option value="written-work">WRITTEN WORK</option>
                            <option value="artwork">ARTWORK</option>
                            <option value="musical-composition">MUSICAL COMPOSITION</option>
                            <option value="audio-visual-work">AUDIO VISUAL WORK</option>
                            <option value="photography">PHOTOGRAPHY</option>
                            <option value="drama-and-choreography">DRAMA AND CHOREOGRAPHY</option>
                            <option value="recording">RECORDING</option>
                            <option value="science">SCIENCE</option>
                            <option value="other-work">OTHER WORK</option>
                        </select>
                    </div>
                    <div className="mr-5">
                        <select 
                            id="negara" 
                            className="bg-gray-50 border font-krona-one text-base h-12 border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            style    = {{width: `${text.negara.length + 4}rem`}}
                            onChange={(e) => setText({...text, negara : e.target.value})} >
                            <option selected disabled value="">COUNTRY</option>
                            <option value="indonesia">INDONESIA</option>
                            <option value="afghanistan">AFGHANISTAN</option>
                            <option value="albania">ALBANIA</option>
                            <option value="algeria">ALJAZAIR</option>
                            <option value="andorra">ANDORRA</option>
                            <option value="angola">ANGOLA</option>
                            <option value="antigua_barbuda">ANTIGUA AND BARBUDA</option>
                            <option value="argentina">ARGENTINA</option>
                            <option value="armenia">ARMENIA</option>
                            <option value="australia">AUSTRALIA</option>
                            <option value="austria">AUSTRIA</option>
                            <option value="azerbaijan">AZERBAIJAN</option>
                            <option value="bahamas">BAHAMAS</option>
                            <option value="bahrain">BAHRAIN</option>
                            <option value="bangladesh">BANGLADESH</option>
                            <option value="barbados">BARBADOS</option>
                            <option value="belarus">BELARUS</option>
                            <option value="belgium">BELGIUM</option>
                            <option value="belize">BELIZE</option>
                            <option value="benin">BENIN</option>
                            <option value="bhutan">BHUTAN</option>
                            <option value="bolivia">BOLIVIA</option>
                            <option value="bosnia_herzegovina">BOSNIA AND HERZEGOVINA</option>
                            <option value="botswana">BOTSWANA</option>
                            <option value="brazil">BRAZIL</option>
                            <option value="uk">UK</option>
                            <option value="brunei">BRUNEI</option>
                            <option value="bulgaria">BULGARIA</option>
                            <option value="burkina_faso">BURKINA FASO</option>
                            <option value="burundi">BURUNDI</option>
                            <option value="czech_republic">CZECH REPUBLIC</option>
                            <option value="chad">CHAD</option>
                            <option value="chile">CHILE</option>
                            <option value="china">CHINA</option>
                            <option value="colombia">COLOMBIA</option>
                            <option value="comoros">COMOROS</option>
                            <option value="congo">CONGO</option>
                            <option value="costa_rica">COSTA RICA</option>
                            <option value="croatia">CROATIA</option>
                            <option value="cuba">CUBA</option>
                            <option value="japan">JAPAN</option>
                            <option value="kuwait">KUWAIT</option>
                            <option value="kyrgyzstan">KIRGIZSTAN</option>
                            <option value="laos">LAOS</option>
                            <option value="latvia">LATVIA</option>
                            <option value="lebanon">LEBANON</option>
                            <option value="lesotho">LESOTHO</option>
                            <option value="liberia">LIBERIA</option>
                            <option value="libya">LIBYA</option>
                            <option value="liechtenstein">LIECHTENSTEIN</option>
                            <option value="lithuania">LITUANIA</option>
                            <option value="luxembourg">LUXEMBOURG</option>
                            <option value="madagascar">MADAGASCAR</option>
                            <option value="malawi">MALAWI</option>
                            <option value="malaysia">MALAYSIA</option>
                            <option value="maldives">MALDIVES</option>
                            <option value="mali">MALI</option>
                            <option value="malta">MALTA</option>
                            <option value="mauritania">MAURITANIA</option>
                            <option value="mauritius">MAURITIUS</option>
                            <option value="mexico">MEXICO</option>
                            <option value="micronesia">MICRONESIA</option>
                            <option value="moldova">MOLDOVA</option>
                            <option value="monaco">MONACO</option>
                            <option value="mongolia">MONGOLIA</option>
                            <option value="montenegro">MONTENEGRO</option>
                            <option value="morocco">MOROCCO</option>
                            <option value="mozambique">MOZAMBIQUE</option>
                            <option value="myanmar">MYANMAR (BURMA)</option>
                            <option value="namibia">NAMIBIA</option>
                            <option value="nauru">NAURU</option>
                            <option value="nepal">NEPAL</option>
                            <option value="netherlands">NETHERLANDS</option>
                            <option value="new_zealand">NEW ZEALAND</option>
                            <option value="nicaragua">NICARAGUA</option>
                            <option value="niger">NIGER</option>
                            <option value="nigeria">NIGERIA</option>
                            <option value="north_korea">NORTH KOREA</option>
                            <option value="norway">NORWAY</option>
                            <option value="oman">OMAN</option>
                            <option value="pakistan">PAKISTAN</option>
                            <option value="palau">PALAU</option>
                            <option value="palestine">PALESTINE</option>
                            <option value="panama">PANAMA</option>
                            <option value="papua_new_guinea">PAPUA NEW GUINEA</option>
                            <option value="paraguay">PARAGUAY</option>
                            <option value="peru">PERU</option>
                            <option value="philippines">PHILIPPHINES</option>
                            <option value="poland">POLAND</option>
                            <option value="portugal">PORTUGAL</option>
                            <option value="qatar">QATAR</option>
                            <option value="romania">ROMANIA</option>
                            <option value="russia">RUSSIA</option>
                            <option value="rwanda">RWANDA</option>
                            <option value="saint_kitts_nevis">SAINT KITTS AND NEVIS</option>
                            <option value="saint_lucia">SAINT LUCIA</option>
                            <option value="saint_vincent_grenadines">SAINT VINCENT AND GRENADINES</option>
                            <option value="samoa">SAMOA</option>
                            <option value="san_marino">SAN MARINO</option>
                            <option value="sao_tome_principe">SAO TOME AND PRINCIPE</option>
                            <option value="saudi_arabia">SAUDI ARABIA</option>
                            <option value="senegal">SENEGAL</option>
                            <option value="other-country">OTHER COUNTRY</option>
                        </select>
                    </div>
                    <div className="mr-5">
                        <select 
                            id="kota" 
                            className="bg-gray-50 border font-krona-one text-base h-12 border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            style    = {{width: `${text.kota.length + 4}rem`}}
                            onChange={(e) => setText({...text, kota : e.target.value})} >
                            <option selected disabled value="">CITY</option>
                            <option value="jakarta">JAKARTA</option>
                            <option value="surabaya">SURABAYA</option>
                            <option value="bandung">BANDUNG</option>
                            <option value="medan">MEDAN</option>
                            <option value="semarang">SEMARANG</option>
                            <option value="yogyakarta">YOGYAKARTA</option>
                            <option value="makassar">MAKASSAR</option>
                            <option value="denpasar">DENPASAR</option>
                            <option value="palembang">PALEMBANG</option>
                            <option value="manado">MANADO</option>
                            <option value="banjarmasin">BANJARMASIN</option>
                            <option value="malang">MALANG</option>
                            <option value="padang">PADANG</option>
                            <option value="samarinda">SAMARINDA</option>
                            <option value="bogor">BOGOR</option>
                            <option value="tangerang">TANGERANG</option>
                            <option value="balikpapan">BALIKPAPAN</option>
                            <option value="yogyakarta">YOGYAKARTA</option>
                            <option value="bengkulu">BENGKULU</option>
                            <option value="jambi">JAMBI</option>
                            <option value="pekanbaru">PEKANBARU</option>
                            <option value="bekasi">BEKASI</option>
                            <option value="tangerang">TANGERANG</option>
                            <option value="bali">BALI</option>
                            <option value="bandar lampung">BANDAR LAMPUNG</option>
                            <option value="cirebon">CIREBON</option>
                            <option value="tasikmalaya">TASIKMALAYA</option>
                            <option value="purwokerto">PURWOKERTO</option>
                            <option value="baturaja">BATURAJA</option>
                            <option value="tarakan">TARAKAN</option>
                            <option value="sukabumi">SUKABUMI</option>
                            <option value="kediri">KEDIRI</option>
                            <option value="madiun">MADIUN</option>
                            <option value="jember">JEMBER</option>
                            <option value="solo">SOLO</option>
                            <option value="pontianak">PONTIANAK</option>
                            <option value="palu">PALU</option>
                            <option value="kendari">KENDARI</option>
                            <option value="gorontalo">GORONTALO</option>
                            <option value="bontang">BONTANG</option>
                            <option value="batam">BATAM</option>
                            <option value="ambon">AMBON</option>
                            <option value="jayapura">JAYAPURA</option>
                            <option value="mataram">MATARAM</option>
                            <option value="palangkaraya">PALANGKARAYA</option>
                            <option value="bima">BIMA</option>
                            <option value="singkawang">SINGKAWANG</option>
                            <option value="tegal">TEGAL</option>
                            <option value="other-city">OTHER CITY</option>
                        </select>
                    </div>
                    <div>
                        <input 
                        type="date" 
                        id="date" 
                        className="bg-gray-50 border font-krona-one text-base h-12 border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        style={{ width: "16rem" }} 
                        onChange={(e) => setText({...text, tanggal : e.target.value})}  />
                    </div>
                </div>
            ) : (null)}
            <div className="flex flex-row place-content-center pl-10 pr-10 pt-5 pb-5">
                <table className="table w-screen font-krona-one">
                    <thead>
                        <tr className="py-10">
                            <th className="border border-blue-600 pl-2 bg-darkblue px-1 py-2">No</th>
                            <th className="border border-blue-600 pl-2 bg-darkblue">Copyright ID</th>
                            <th className="border border-blue-600 pl-2 bg-darkblue">Title</th>
                            <th className="border border-blue-600 pl-2 bg-darkblue">Description</th>
                            <th className="border border-blue-600 pl-2 bg-darkblue">Export to PDF</th>
                            <th className="border border-blue-600 pl-2 bg-darkblue">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => ((Math.floor(index / itemsPerPage) + 1 == page) ? (
                                <tr key={index} className={(number % 2 == 0 ? ("bg-lgtbluebg text-black") : ("bg-darkbluebg text-black"))}>
                                    <td className="border border-blue-600 pl-2 px-1 py-1">{(++number)+(page-1)*10}</td>
                                    <td className="border border-blue-600 pl-2">{item.id}</td>
                                    <td className="border border-blue-600 pl-2">{item.judul_ciptaan}</td>
                                    <td className="border border-blue-600 pl-2">{item.deskripsi_ciptaan}</td>
                                    <td className="border border-blue-600 text-white">
                                        <button onClick={() => {handleExport(item.id)}} className="font-krona-one bg-yellow-500 mx-2 my-1 px-2 py-2 rounded-xl w-11/12">EXPORT</button>
                                    </td>
                                    <td className="border border-blue-600 text-white">
                                        <button onClick={() => handleBuy(item.id)} className="font-krona-one bg-blue-700 mx-2 my-1 px-2 py-2 rounded-xl w-11/12">BUY</button>
                                    </td>
                                </tr>) : (null)))) : (
                                <tr>
                                    <td className="border text-lgtblue border-blue-600 pl-2 px-1 py-1 text-center" colSpan={6}>No items</td>
                                </tr>)}
                    </tbody>
                </table>
            </div>
            
            <div className="grid grid-cols-6 gap-4">
                <div className="col-start-1 font-krona-one text-black pl-10">
                    Page {page} of {!filteredItems.length ? (1) : (Math.ceil(filteredItems.length / itemsPerPage))}
                </div>
            <div className="col-end-7 col-span-2">
                <div className="flex flex-row-reverse pr-10">
                <div className="pl-1">
                    <button onClick={handleNext} className="text-xl font-krona-one bg-darkblue pl-5 pr-5 pt-2 pb-2 rounded-xl">
                        &gt;
                    </button>
                </div>
                <div className="pl-1 pr-1">
                    <button onClick={handlePrev} className="text-xl font-krona-one bg-darkblue pl-5 pr-5 pt-2 pb-2 rounded-xl">
                        &lt;
                    </button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </main>
    );
}
