"use client";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import NavbarLoggedin from "../components/navbar-logged-in";

export default function Home() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('your-haki')
  }


  return (
    <main className="bg-background h-screen w-screen">
      {/* font krona one */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
      <link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet"/>
      
      {/* font luckiest guy */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
      <link href="https://fonts.googleapis.com/css2?family=Krona+One&family=Luckiest+Guy&display=swap" rel="stylesheet"/>
      
      <NavbarLoggedin />

      <div className="flex flex-row place-content-center">

        <svg width="321" height="498" viewBox="0 0 321 498" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-20">
            <path d="M24.248 324.406H124.904V484.161H24.248V324.406Z" fill="#B2B2B2"/>
            <path d="M124.511 324.406H225.167V484.161H124.511V324.406Z" fill="#D1D1D1"/>
            <path d="M177.246 130.694L181.537 216.566L201.714 279.537H165.389L146.522 225.281L140.626 163.621L177.246 130.694Z" fill="#F7EBE7"/>
            <path d="M178.26 430.836L170.955 464.876L195.489 467.792L202.466 434.276L178.26 430.836Z" fill="#FCC9A7"/>
            <path d="M169.482 461.81C170.105 459.975 172.07 459.32 173.413 460.499C176.033 462.826 180.75 465.676 187.727 464.988C194.966 464.267 197.685 460.008 198.733 456.928C199.29 455.323 200.829 454.504 202.205 455.192L246.129 477.274C248.783 478.617 250.879 481.107 251.927 484.22C252.91 487.136 250.944 490.281 248.193 490.215L172.299 488.119C169.319 488.053 167.026 485.104 167.288 481.697L168.533 464.988C168.566 464.726 168.598 464.431 168.696 464.169L169.482 461.81Z" fill="#1F252A"/>
            <path d="M178.686 266.235H235.647C235.647 266.235 270.335 264.302 272.399 292.774C274.462 321.245 221.53 402.695 213.243 446.205L165.617 442.273L199.912 323.964L114.617 324.456C108.296 324.488 102.007 323.571 96.0452 321.507C79.4383 315.741 54.0859 307.484 67.9085 261.747L178.686 266.235Z" fill="#092330"/>
            <path d="M134.73 430.963L123.134 471.655L147.668 474.571L158.936 434.403L134.73 430.963Z" fill="#FCC9A7"/>
            <path d="M121.66 468.569C122.282 466.734 124.247 466.079 125.59 467.258C128.211 469.585 132.927 472.435 139.904 471.747C147.143 471.026 149.862 466.767 150.91 463.687C151.467 462.082 153.007 461.263 154.382 461.951L198.307 484.033C200.96 485.376 203.056 487.866 204.105 490.979C205.087 493.895 203.122 497.04 200.37 496.975L123.166 494.878C120.186 494.812 117.893 491.863 118.155 488.456L120.743 471.747C120.775 471.485 120.808 471.19 120.906 470.928L121.66 468.569Z" fill="#1F252A"/>
            <path d="M110.623 96.9327C109.345 98.1777 52.1877 112.757 52.1877 112.757L64.4054 145.226L126.902 140.508L110.623 96.9327Z" fill="#F7EBE7"/>
            <path d="M134.205 104.765C134.205 104.765 171.448 118.362 177.245 130.681C175.247 148.078 169.122 164.82 159.034 179.138C146.652 196.699 131.356 226.874 134.172 266.222H26.5064C26.5064 266.222 32.3041 155.516 64.1748 113.022L134.205 104.765Z" fill="#F7EBE7"/>
            <path d="M121.99 122.317C111.41 120.155 104.597 109.835 106.758 99.252L113.08 68.2908L151.371 76.1209L145.049 107.082C142.887 117.665 132.569 124.48 121.99 122.317Z" fill="#FCC9A7"/>
            <path d="M110.46 79.1177C110.46 79.1177 114.489 104.214 134.011 105.721C151.109 107.032 149.472 82.2958 149.472 82.2958L110.46 79.1177Z" fill="#F4BE9A"/>
            <path d="M132.471 91.958L129.097 91.1716C112.163 87.2401 101.616 70.3343 105.546 53.4285L110.001 34.131C113.931 17.1923 130.833 6.6426 147.735 10.5742L151.108 11.3605C168.043 15.2921 178.59 32.1978 174.659 49.1037L170.205 68.4013C166.274 85.3398 149.372 95.8895 132.471 91.958Z" fill="#FCC9A7"/>
            <path d="M116.159 61.4643C116.946 62.8076 117.699 64.8389 117.961 67.9186C118.256 71.8175 120.221 75.5197 123.497 77.6821C132.897 83.9071 140.071 68.148 153.959 70.9329C153.959 70.9329 159.396 71.7519 160.477 77.8131C161.558 83.8415 169.124 73.2918 170.795 66.0839C172.465 58.876 173.317 101.763 139.121 98.1263C139.121 98.1263 121.859 97.5693 110.231 79.9755C108.953 78.0425 108.2 75.7818 108.134 73.4556C108.036 70.0155 108.527 64.8061 111.803 61.0711C112.949 59.6951 115.242 59.8917 116.159 61.4643Z" fill="#1C2226"/>
            <path d="M116.125 51.7271C116.125 51.7271 130.898 46.8454 128.409 25.2545C128.409 25.2545 165.094 59.9834 192.281 34.4937C192.281 34.4937 180.129 31.2501 175.117 22.9283C165.979 7.75896 139.709 -13.1439 118.68 11.0353C118.68 11.0353 93.0985 7.07097 100.436 46.485L116.125 51.7271Z" fill="#1C2226"/>
            <path d="M116.126 51.734C114.718 57.7624 108.691 61.5302 102.664 60.1541C96.604 58.7453 92.8702 52.7169 94.2459 46.6885C95.6544 40.66 101.681 36.8923 107.708 38.2683C113.768 39.6771 117.534 45.7056 116.126 51.734Z" fill="#FCC9A7"/>
            <path d="M134.795 121.121L118.975 121.416L130.046 144.35L142.002 122.366L134.795 121.121Z" fill="#0C2C40"/>
            <path d="M105.414 97.952L125.787 121.738L112.522 136.973L88.1188 103.423C88.1188 103.423 94.3753 93.3652 105.414 97.952Z" fill="#FFF7F3"/>
            <path d="M134.795 121.126L146.521 134.362L154.776 113.721C154.776 113.721 152.614 104.449 145.866 106.218L134.795 121.126Z" fill="#FFF7F3"/>
            <path d="M130.472 136.943C130.472 136.943 145.769 176.848 141.969 233.463L126.902 247.224L109.313 230.285L128.278 134.354L130.472 136.943Z" fill="#0C2C40"/>
            <path d="M101.876 231.697L134.631 242.476L136.793 261.708L93.3592 248.734L101.876 231.697Z" fill="#FCC9A7"/>
            <path d="M129.75 255.198C129.75 266.436 138.856 275.577 150.124 275.577C161.359 275.577 170.498 266.469 170.498 255.198C170.498 243.961 161.392 234.82 150.124 234.82C138.889 234.82 129.75 243.928 129.75 255.198Z" fill="#FCC9A7"/>
            <path d="M134.206 266.217H191.135C191.135 266.217 225.822 264.284 227.886 292.755C229.949 321.226 173.119 407.918 164.832 451.394L117.206 447.463L155.399 323.913L70.1044 324.404C63.7827 324.437 57.4937 323.52 51.5323 321.456C34.9254 315.689 9.57333 307.433 23.396 261.696L134.206 266.217Z" fill="#0C2C40"/>
            <path d="M305.941 165.556H207.512C204.269 165.556 201.485 167.817 200.797 170.995L182.258 257.948C181.34 262.207 184.616 266.237 188.972 266.237H289.039C292.315 266.237 295.132 263.911 295.754 260.701L312.656 173.747C313.507 169.488 310.264 165.556 305.941 165.556Z" fill="#B2B2B2"/>
            <path d="M311.607 165.556H213.211C209.968 165.556 207.184 167.817 206.496 170.995L187.957 257.948C187.04 262.207 190.283 266.237 194.672 266.237H294.706C297.981 266.237 300.798 263.911 301.421 260.701L318.322 173.747C319.174 169.488 315.931 165.556 311.607 165.556Z" fill="#D1D1D1"/>
            <path d="M184.943 258.803H117.697C115.633 258.803 113.995 260.474 113.995 262.506C113.995 264.57 115.666 266.208 117.697 266.208H186.253L184.943 258.803Z" fill="#B2B2B2"/>
            <path d="M250.682 213.615C250.682 219.545 255.465 224.328 261.393 224.328C267.322 224.328 272.104 219.512 272.104 213.615C272.104 207.685 267.289 202.901 261.393 202.901C255.465 202.901 250.682 207.685 250.682 213.615Z" fill="white"/>
            <path d="M75.6722 143.684L39.7071 201.773L125.787 232.505L113.996 257.995C113.996 257.995 40.3949 249.738 4.82286 222.316C1.54736 219.793 -0.0903854 215.698 0.466454 211.602C2.13696 198.497 9.27757 166.684 39.7071 121.471C45.8978 112.264 58.2137 109.479 67.8109 115.049C77.8012 120.815 81.306 133.593 75.6722 143.684Z" fill="#F7EBE7"/>
            <path d="M102.892 224.329L39.7077 201.788L71.3164 150.711" stroke="#EADDD8" stroke-width="0.7599" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M145.671 205.08L161.229 163.995" stroke="#EADDD8" stroke-width="0.7599" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M101.877 256.271C101.877 256.271 53.53 250.21 29.1602 236.253" stroke="#EADDD8" stroke-width="0.7599" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        {/* form section */}
        <div className="pl-40">
          <div className="flex justify-center">
            <form> 
                <div className="relative w-full mt-3">
                    <input 
                      type="text" 
                      id="jenis" 
                      className="bg-gray-50 border font-krona-one text-base h-16 border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="Jenis Ciptaan"
                      style={{ width: "36rem" }} 
                      required />
                </div>
                <div className="relative w-full mt-3">
                    <input 
                      type="text" 
                      id="title" 
                      className="bg-gray-50 border font-krona-one text-base h-16 border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="Judul Ciptaan"
                      style={{ width: "36rem" }} 
                      required />
                </div>
                <div className="relative w-full mt-3">
                    <input 
                      type="date" 
                      id="date" 
                      className="bg-gray-50 border font-krona-one text-base h-16 border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="Tanggal Ciptaan Diumumkan"
                      style={{ width: "36rem" }} 
                      required />
                </div>
                <div className="relative w-full mt-3">
                    <input 
                      type="text" 
                      id="country" 
                      className="bg-gray-50 border font-krona-one text-base h-16 border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="Negara Ciptaan Diumumkan"
                      style={{ width: "36rem" }} 
                      required />
                </div>
                <div className="relative w-full mt-3">
                    <input 
                      type="text" 
                      id="city" 
                      className="bg-gray-50 border font-krona-one text-base h-16 border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="Kota Ciptaan Diumumkan"
                      style={{ width: "36rem" }} 
                      required />
                </div>
                <div className="relative w-full mt-3">
                    <textarea
                      id="description" 
                      className="bg-gray-50 border font-krona-one text-base h-32 border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="Deskripsi Singkat"
                      style={{ width: "36rem" }} 
                      required />
                </div>
    
            </form>
          </div>

          <div className="flex justify-center mt-10">
            <button 
              onClick={handleSubmit}
              className="text-xl font-krona-one bg-bluesk pl-10 pr-10 pt-5 pb-5 rounded-xl"
              style={{ width: "36rem" }} >
              SUBMIT
            </button>
          </div>
        </div>
      </div>

    </main>
  );
}
