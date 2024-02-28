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
}

export default function Home() {
    const [items, setItems] = useState<Haki[]>([]);

    const fetchHaki = async () => {
        try {
            const response = await fetch("http://localhost:4000/fetch-inventory", {
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
        } catch (error: any) {
            console.error('Error fetching Haki:', error.message);
        }
    }

    useEffect(() => {
        fetchHaki()
    },[])

    const [filterEnabled, setFilter] = useState(false);
    const [text, setText] = useState({jenis : '', negara: '', kota: '', tanggal: ''});
    let filterCount = 0;
    let itemsPerPage = 10;

    const handleFilter = () => {
        if (filterEnabled) {
            setFilter(false)
            setText({jenis : '', negara : '', kota: '', tanggal: ''})
            
        }
        else {
            setFilter(true)
            setText({jenis : 'jenis ciptaan', negara : 'negara', kota: 'kota', tanggal: ''})
        }
    };   

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
                HAKI Inventory
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
                            <option selected disabled value="">Jenis Ciptaan</option>
                            <option value="karya-benda">KARYA BENDA</option>
                            <option value="karya-tulis">KARYA TULIS</option>
                            <option value="karya-seni">KARYA SENI</option>
                            <option value="komposisi-musik">KOMPOSISI MUSIK</option>
                            <option value="karya-audio-visual">KARYA AUDIO VISUAL</option>
                            <option value="karya-fotografi">KARYA FOTOGRAFI</option>
                            <option value="karya-drama-dan-koreografi">KARYA DRAMA DAN KOREOGRAFI</option>
                            <option value="karya-rekaman">KARYA REKAMAN</option>
                            <option value="ilmu-pengetahuan">ILMU PENGETAHUAN</option>
                            <option value="karya-lainnya">KARYA LAINNYA</option>
                        </select>
                    </div>
                    <div className="mr-5">
                        <select 
                            id="negara" 
                            className="bg-gray-50 border font-krona-one text-base h-12 border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            style    = {{width: `${text.negara.length + 4}rem`}}
                            onChange={(e) => setText({...text, negara : e.target.value})} >
                            <option selected disabled value="">NEGARA</option>
                            <option value="indonesia">INDONESIA</option>
                            <option value="afghanistan">AFGHANISTAN</option>
                            <option value="albania">ALBANIA</option>
                            <option value="algeria">ALJAZAIR</option>
                            <option value="andorra">ANDORRA</option>
                            <option value="angola">ANGOLA</option>
                            <option value="antigua_barbuda">ANTIGUA DAN BARBUDA</option>
                            <option value="argentina">ARGENTINA</option>
                            <option value="armenia">ARMENIA</option>
                            <option value="australia">AUSTRALIA</option>
                            <option value="austria">AUSTRIA</option>
                            <option value="azerbaijan">AZERBAIJAN</option>
                            <option value="bahamas">BAHAMA</option>
                            <option value="bahrain">BAHRAIN</option>
                            <option value="bangladesh">BANGLADESH</option>
                            <option value="barbados">BARBADOS</option>
                            <option value="belarus">BELARUS</option>
                            <option value="belgium">BELGIA</option>
                            <option value="belize">BELIZE</option>
                            <option value="benin">BENIN</option>
                            <option value="bhutan">BHUTAN</option>
                            <option value="bolivia">BOLIVIA</option>
                            <option value="bosnia_herzegovina">BOSNIA DAN HERZEGOVINA</option>
                            <option value="botswana">BOTSWANA</option>
                            <option value="brazil">BRASIL</option>
                            <option value="uk">BRITANIA RAYA</option>
                            <option value="brunei">BRUNEI</option>
                            <option value="bulgaria">BULGARIA</option>
                            <option value="burkina_faso">BURKINA FASO</option>
                            <option value="burundi">BURUNDI</option>
                            <option value="czech_republic">CEKO</option>
                            <option value="chad">CHAD</option>
                            <option value="chile">CHILI</option>
                            <option value="china">CHINA</option>
                            <option value="colombia">KOLOMBIA</option>
                            <option value="comoros">KOMORO</option>
                            <option value="congo">KONGO</option>
                            <option value="costa_rica">KOSTA RIKA</option>
                            <option value="croatia">KROASIA</option>
                            <option value="cuba">KUBA</option>
                            <option value="japan">JEPANG</option>
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
                            <option value="luxembourg">LUXEMBURG</option>
                            <option value="madagascar">MADAGASKAR</option>
                            <option value="malawi">MALAWI</option>
                            <option value="malaysia">MALAYSIA</option>
                            <option value="maldives">MALADWEEP</option>
                            <option value="mali">MALI</option>
                            <option value="malta">MALTA</option>
                            <option value="mauritania">MAURITANIA</option>
                            <option value="mauritius">MAURITIUS</option>
                            <option value="mexico">MEKSIKO</option>
                            <option value="micronesia">MIKRONESIA</option>
                            <option value="moldova">MOLDOVA</option>
                            <option value="monaco">MONAKO</option>
                            <option value="mongolia">MONGOLIA</option>
                            <option value="montenegro">MONTENEGRO</option>
                            <option value="morocco">MAROKO</option>
                            <option value="mozambique">MOZAMBIK</option>
                            <option value="myanmar">MYANMAR (BURMA)</option>
                            <option value="namibia">NAMIBIA</option>
                            <option value="nauru">NAURU</option>
                            <option value="nepal">NEPAL</option>
                            <option value="netherlands">BELANDA</option>
                            <option value="new_zealand">SELANDIA BARU</option>
                            <option value="nicaragua">NIKARAGUA</option>
                            <option value="niger">NIGER</option>
                            <option value="nigeria">NIGERIA</option>
                            <option value="north_korea">KOREA UTARA</option>
                            <option value="norway">NORWEGIA</option>
                            <option value="oman">OMAN</option>
                            <option value="pakistan">PAKISTAN</option>
                            <option value="palau">PALAU</option>
                            <option value="palestine">PALESTINA</option>
                            <option value="panama">PANAMA</option>
                            <option value="papua_new_guinea">PAPUA NUGINI</option>
                            <option value="paraguay">PARAGUAY</option>
                            <option value="peru">PERU</option>
                            <option value="philippines">FILIPINA</option>
                            <option value="poland">POLANDIA</option>
                            <option value="portugal">PORTUGAL</option>
                            <option value="qatar">QATAR</option>
                            <option value="romania">RUMANIA</option>
                            <option value="russia">RUSIA</option>
                            <option value="rwanda">RWANDA</option>
                            <option value="saint_kitts_nevis">SAINT KITTS DAN NEVIS</option>
                            <option value="saint_lucia">SAINT LUCIA</option>
                            <option value="saint_vincent_grenadines">SAINT VINCENT DAN GRENADIN</option>
                            <option value="samoa">SAMOA</option>
                            <option value="san_marino">SAN MARINO</option>
                            <option value="sao_tome_principe">SAO TOME DAN PRINCIPE</option>
                            <option value="saudi_arabia">ARAB SAUDI</option>
                            <option value="senegal">SENEGAL</option>
                            <option value="negara-lainnya">NEGARA LAINNYA</option>
                        </select>
                    </div>
                    <div className="mr-5">
                        <select 
                            id="kota" 
                            className="bg-gray-50 border font-krona-one text-base h-12 border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            style    = {{width: `${text.kota.length + 4}rem`}}
                            onChange={(e) => setText({...text, kota : e.target.value})} >
                            <option selected disabled value="">KOTA</option>
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
                            <option value="kota-lainnya">KOTA LAINNYA</option>
                        </select>
                    </div>
                    <div>
                        <input 
                        type="date" 
                        id="date" 
                        className="bg-gray-50 border font-krona-one text-base h-12 border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Tanggal Ciptaan Diumumkan"
                        style={{ width: "16rem" }} 
                        onChange={(e) => setText({...text, tanggal : e.target.value})}  />
                    </div>
                </div>
            ) : (null)}
            <div className="flex flex-row place-content-center pl-10 pr-10 pt-5 pb-5">
                <table className="table w-screen font-krona-one">
                    <thead>
                        <tr className="py-10">
                            <th className="border border-blue-600 pl-2 bg-darkblue px-1">No</th>
                            <th className="border border-blue-600 pl-2 bg-darkblue">Item ID</th>
                            <th className="border border-blue-600 pl-2 bg-darkblue">Judul</th>
                            <th className="border border-blue-600 pl-2 bg-darkblue">Deskripsi</th>
                            <th className="border border-blue-600 pl-2 bg-darkblue">Barcode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length > 0 ? (
                            items.map((item, index) => (
                                ((!filterEnabled) || (
                                 (text.jenis == 'jenis ciptaan' || item.jenis_ciptaan == text.jenis) && 
                                 (text.negara == 'negara' || item.negara_ciptaan == text.negara) &&
                                 (text.kota == 'kota' || item.kota_ciptaan == text.kota) &&
                                 (text.tanggal == '' || item.tanggal_ciptaan == text.tanggal))) ? (

                                <tr key={index} className={(filterCount % 2 == 0 ? ("bg-lgtbluebg text-black") : ("bg-darkbluebg text-black"))}>
                                    <td className="border border-blue-600 pl-2 px-1 py-1">{++filterCount}</td>
                                    <td className="border border-blue-600 pl-2">{item.id}</td>
                                    <td className="border border-blue-600 pl-2">{item.judul_ciptaan}</td>
                                    <td className="border border-blue-600 pl-2">{item.deskripsi_ciptaan}</td>
                                    <td className="border border-blue-600 pl-2 text-lgtblue"><a href="#">Tampilkan</a></td>
                                </tr>) : (null)))) : (
                                <tr>
                                    <td className="border text-lgtblue border-blue-600 pl-2 px-1 py-1 text-center" colSpan={6}>No items</td>
                                </tr>)}
                            {(!filterCount ? (
                                <tr>
                                    <td className="border text-lgtblue border-blue-600 pl-2 px-1 py-1 text-center" colSpan={6}>No items</td>
                                </tr>
                            ) : (null))}
                    </tbody>
                </table>
            </div>
            
            <div className="grid grid-cols-6 gap-4">
                <div className="col-start-1 font-krona-one text-black pl-10">
                    Halaman 1 dari {Math.floor(filterCount / itemsPerPage) + 1}
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
        </div>    
    {filterCount = 0}
    </main>
    );
}
