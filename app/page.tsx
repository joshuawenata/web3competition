"use client";

import Navbar from "./components/navbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/dashboard')
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

          <div className="mt-5 text-8xl font-luckiest-guy flex flex-row items-center justify-center">
            
            <span className="text-blues"> 
              WELCOME 
            </span>
            
          </div>

          <div className="text-8xl font-luckiest-guy flex flex-row items-center justify-center">
          
            <span className="text-blues"> 
              TO H
            </span>
            <span className="text-bluesa"> 
              A
            </span>
            <span className="text-bluesk"> 
              K
            </span>
            <span className="text-bluesi"> 
              I
            </span>

          </div>

          <div className="text-xl font-krona-one text-blues justify-center flex mt-10">
            HAKI helps you to get
          </div>
          
          <div className="text-xl font-krona-one text-blues justify-center flex">
            your copyright registered
          </div>

          <div className="text-xl font-krona-one text-blues justify-center flex">
            in blockchain ecosystem.
          </div>

          <div className="flex justify-center mt-10">
            <button onClick={handleGetStarted} className="text-xl font-krona-one bg-bluesk pl-10 pr-10 pt-5 pb-5 rounded-xl">
              GET STARTED
            </button>
          </div>

        </div>

        <div className="ml-10">

          <svg width="250" height="471" viewBox="0 0 310 584" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M88.6236 533.874L76.8496 562.154L57.6534 551.96L69.3679 524.223L88.6236 533.874Z" fill="#FCC9A7"/>
            <path d="M83.3179 560.503C83.3179 558.805 81.8573 557.702 80.3967 558.328C77.5352 559.549 72.8259 560.592 67.1922 558.06C61.3499 555.438 60.2768 551.117 60.247 548.287C60.247 546.797 59.1739 545.665 57.8326 545.873L14.9988 552.041C12.4055 552.428 9.96128 553.918 8.23244 556.242C6.59302 558.417 7.36801 561.576 9.66321 562.291L73.6006 581.718C76.1044 582.492 78.8467 580.675 79.5919 577.755L83.1986 563.453C83.2583 563.214 83.2881 562.976 83.2881 562.738L83.3179 560.503Z" fill="#1F252A"/>
            <path d="M262.193 465.281L289.02 480.06L276.828 498.027L250.508 483.367L262.193 465.281Z" fill="#FCC9A7"/>
            <path d="M288.067 473.445C286.368 473.266 285.116 474.607 285.563 476.097C286.457 479.047 286.994 483.874 283.864 489.177C280.615 494.69 276.203 495.315 273.371 494.988C271.881 494.839 270.659 495.762 270.689 497.103L272.149 540.337C272.239 542.959 273.461 545.551 275.577 547.518C277.544 549.365 280.794 548.978 281.747 546.743L308.009 485.334C309.052 482.92 307.532 480 304.73 478.957L290.898 473.803C290.66 473.713 290.421 473.654 290.183 473.624L288.067 473.445Z" fill="#1F252A"/>
            <path d="M102.812 260.714L113.155 327.04L165.438 420.987L255.457 499.231L276.442 462.135L205.052 395.571L163.172 261.847L102.812 260.714Z" fill="#092330"/>
            <path d="M187.763 256.92C187.763 256.92 198.166 276.585 182.011 307.991L131.844 403.696L93.601 548.743L55.626 535.483L82.9 388.798L131.248 274.321L102.812 260.704L187.763 256.92Z" fill="#0C2C40"/>
            <path d="M78.3987 70.3074C85.0161 77.5478 96.2535 78.0543 103.467 71.4694C110.71 64.8547 111.217 53.6217 104.63 46.3812C98.0122 39.1408 86.8045 38.6343 79.5314 45.2192C72.2882 51.8637 71.7814 63.067 78.3987 70.3074Z" fill="#FCC9A7"/>
            <path d="M64.2103 79.4183L79.6507 60.8257L91.9612 73.191L77.4747 90.9196L64.2103 79.4183Z" fill="#FCC9A7"/>
            <path d="M99.0552 35.9104L84.8965 54.8606C83.0484 57.3336 83.108 60.7602 85.0455 63.1438L96.5215 77.2969C99.2042 80.6042 104.212 80.634 106.924 77.3863L122.931 58.3467C125.137 55.7246 125.018 51.8512 122.663 49.3483L109.339 35.2846C106.477 32.2753 101.559 32.5434 99.0552 35.9104Z" fill="#1C2226"/>
            <path d="M113.691 102.707L57.5634 130.865L88.3846 83.3401L68.0558 65.7605L3.79037 153.778C-2.05193 161.346 0.213461 172.37 8.58941 176.989C12.8519 179.343 17.9788 179.581 22.45 177.614L105.673 144.571L113.691 102.707Z" fill="#F7ECE7"/>
            <path d="M93.6003 129.738C93.6003 129.738 103.526 207.535 102.811 260.721C102.811 260.721 132.589 273.831 195.722 254.672L180.102 110.013L149.698 99.7931L113.691 102.713L93.6003 129.738Z" fill="#F7ECE7"/>
            <path d="M123.885 95.1294L124.66 100.195C124.719 100.552 124.6 100.94 124.332 101.208L116.552 109.461C115.837 110.206 114.585 109.789 114.465 108.776L113.661 102.698C113.601 102.31 113.75 101.923 114.048 101.655L121.828 94.4143C122.573 93.7588 123.765 94.1461 123.885 95.1294Z" fill="#FCF3F0"/>
            <path d="M134.287 108.231C143.528 107.486 150.413 99.3515 149.668 90.1148L147.432 63.0604L113.929 65.8016L120.844 103.195C121.947 107.963 125.017 108.976 134.287 108.231Z" fill="#FCC9A7"/>
            <path d="M148.566 72.5176C148.566 72.5176 141.353 93.0172 126.717 90.4845C113.274 88.1604 113.929 65.7837 113.929 65.7837L148.566 72.5176Z" fill="#F4BE9A"/>
            <path d="M129.042 83.0412L132.022 82.7138C146.867 81.1048 157.627 67.7562 156.018 52.9178L154.199 35.9938C152.59 21.1553 139.236 10.3989 124.392 12.0079L121.411 12.3356C106.567 13.9446 95.8061 27.2933 97.4157 42.1317L99.234 59.0558C100.844 73.924 114.197 84.6502 129.042 83.0412Z" fill="#FCC9A7"/>
            <path d="M129.042 83.0412L132.022 82.7138C146.867 81.1048 157.627 67.7562 156.018 52.9178L154.199 35.9938C152.59 21.1553 139.236 10.3989 124.392 12.0079L121.411 12.3356C106.567 13.9446 95.8061 27.2933 97.4157 42.1317L99.234 59.0558C100.844 73.924 114.197 84.6502 129.042 83.0412Z" fill="#FCC9A7"/>
            <path d="M155.422 47.5563C153.395 47.3478 144.899 53.7837 142.694 50.9829C139.653 47.1094 136.881 40.0478 140.816 32.718C141.472 31.4963 141.65 30.0661 141.233 28.7253C140.458 26.3118 138.372 23.511 132.619 25.5371C123.408 28.7849 102.692 39.2135 96.7004 24.2856C89.1292 5.48442 148.685 10.7285 148.685 10.7285L162.247 30.3343L156.435 58.2829L155.422 47.5563Z" fill="#1C2226"/>
            <path d="M147.135 50.3873C147.702 55.691 152.471 59.5346 157.777 58.9387C163.082 58.3726 166.928 53.6052 166.331 48.3016C165.765 42.9979 160.996 39.1542 155.69 39.7501C150.384 40.3461 146.569 45.0836 147.135 50.3873Z" fill="#FCC9A7"/>
            <path d="M131.247 113.965L138.848 231.093L124.689 244.383L116.283 231.511L124.689 111.642L131.247 113.965Z" fill="#0C2C40"/>
            <path d="M119.921 105.899L121.083 104.29L120.785 102.889H137.537L138.849 107.269L127.7 117.102L119.921 105.899Z" fill="#0C2C40"/>
            <path d="M148.595 88.5276L132.737 99.314C130.949 100.536 130.71 103.098 132.26 104.618L144.72 116.863C146.121 118.234 148.416 118.174 149.728 116.685L162.277 102.591C163.499 101.221 163.439 99.1054 162.128 97.8242L152.947 88.8553C151.784 87.7529 149.966 87.6039 148.595 88.5276Z" fill="#FCF3F0"/>
            <path d="M81.4096 94.0994L57.6827 79.7971" stroke="#EADDD8" strokeWidth="0.7599" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M124.631 206.419L116.315 295.301C115.987 298.639 118.282 301.678 121.591 302.333L223.563 321.82C227.319 322.535 230.866 319.913 231.283 316.129L240.613 231.656C240.97 228.379 238.824 225.34 235.605 224.565L132.62 200.698C128.774 199.775 125.019 202.486 124.631 206.419Z" fill="#AFAFAF"/>
            <path d="M131.874 207.998L123.558 296.88C123.26 300.218 125.525 303.257 128.834 303.912L230.806 323.399C234.562 324.114 238.109 321.492 238.526 317.708L247.856 233.236C248.214 229.958 246.068 226.919 242.848 226.144L139.863 202.248C135.988 201.354 132.232 204.065 131.874 207.998Z" fill="#D1D1D1"/>
            <path d="M170.355 289.81C162.158 282.302 149.401 282.868 141.889 291.061C134.378 299.255 134.944 312.008 143.141 319.517C151.338 327.025 164.096 326.459 171.607 318.265C179.119 310.041 178.553 297.319 170.355 289.81Z" fill="#FCC9A7"/>
            <path d="M185.468 278.068L169.908 300.653L154.766 287.9L169.312 266.418L185.468 278.068Z" fill="#FCC9A7"/>
            <path d="M180.133 110.012C180.133 110.012 202.936 112.306 209.553 149.581L235.784 204.048C236.499 206.432 236.976 208.875 237.215 211.318L182.041 290.546L157.151 275.797L201.773 204.286L174.678 161.41L180.133 110.012Z" fill="#F7ECE7"/>
            <path d="M165.258 265.091L190.386 278.558" stroke="#EADDD8" strokeWidth="0.7599" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M187.942 182.422L171.876 154.473" stroke="#EADDD8" strokeWidth="0.7599" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M102.841 30.9282C91.4545 25.7735 93.8391 12.4845 96.4324 8.28327C96.4324 8.28327 96.9391 15.7621 102.036 14.0339C102.036 14.0339 101.351 2.8902 116.284 0C116.284 0 110.77 10.0114 130.413 8.10449C154.528 5.75061 155.929 21.0061 154.587 39.9563L147.195 34.6527L141.472 21.4531H121.948L102.841 30.9282Z" fill="#1C2226"/>
          </svg>

        </div>

      </div>
    </main>
  );
}