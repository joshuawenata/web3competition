"use client";
import { useRouter } from "next/navigation";
import Navbar from "../../components/navbar";


export default function Home() {
    const router = useRouter();

    const handleSubmit = () => {
        router.push('/')
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
      
      <Navbar/>

      <div className="flex flex-row place-content-center">
        <div>
          <div className="flex justify-center mt-20">
            <form>
              <div className="flex justify-center mt-3">
                <input 
                  className="text-xl text-gray-700 font-krona-one pl-5 bg-white w-full h-16 rounded-xl"
                  type="text" 
                  id="username"
                  placeholder="Email"
                  name="email" />
              
              </div>
              <div className="flex justify-center mt-3">
                <input 
                  className="text-xl text-gray-700 font-krona-one pl-5 bg-white w-full h-16 rounded-xl"
                  type="password" 
                  id="username"
                  placeholder="Password"
                  name="password" />
              
              </div>
            </form>
          </div>

          

          <div className="flex justify-center mt-10">
            <button onClick={handleSubmit} className="text-xl font-krona-one bg-bluesk pl-10 pr-10 pt-5 pb-5 rounded-xl w-80">
              LOGIN
            </button>
          </div>

        </div>

        <div className="ml-20">

          <svg width="400" height="480" viewBox="0 0 461 554" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.9607 548.996C51.9544 549.346 62.9481 549.245 73.9414 549.095C104.613 548.694 135.284 548.343 165.956 547.939C170.724 547.891 176.899 546.987 177.201 543.722C177.502 540.809 172.632 538.952 168.516 538.048C153.808 534.882 138.346 534.23 123.086 533.628C100.647 532.774 78.1581 532.071 55.7193 531.469C41.7139 531.118 27.3068 530.816 14.2551 534.029C7.12685 535.787 -3.31444 543.219 8.03047 546.885C11.193 547.891 17.5181 547.49 20.9316 547.738C27.6081 548.292 34.2343 548.744 40.9607 548.996Z" fill="url(#paint0_linear_29_643)"/>
            <path opacity="0.22" d="M40.9521 548.996C51.9457 549.346 62.9394 549.245 73.9327 549.095C104.604 548.694 135.275 548.343 165.947 547.939C170.716 547.891 176.89 546.987 177.192 543.722C177.493 540.809 172.624 538.952 168.507 538.048C153.799 534.882 138.338 534.23 123.077 533.628C100.638 532.774 78.1494 532.071 55.7106 531.469C41.7052 531.118 27.298 530.816 14.2463 534.029C7.11806 535.787 -3.32323 543.219 8.02168 546.885C11.1842 547.891 17.5093 547.49 20.9228 547.738C27.5993 548.292 34.2253 548.744 40.9521 548.996Z" fill="url(#paint1_linear_29_643)"/>
            <path d="M102.706 154.727C96.4813 142.223 91.4615 129.216 86.4417 116.21C84.5842 111.339 83.2791 105.062 87.0943 101.497C89.4035 99.3372 93.0175 98.9857 96.0293 99.99C99.0414 100.994 101.551 103.104 103.76 105.363C107.023 108.728 109.734 112.544 112.294 116.411C123.89 134.037 125.747 157.338 127.253 178.379C128.358 194.097 125.848 210.769 132.574 225.031C130.064 225.985 127.504 226.939 124.994 227.893C124.392 228.094 123.739 228.345 123.137 228.044C122.534 227.742 122.334 227.039 122.133 226.386C119.071 214.736 116.862 202.985 112.896 191.435C108.83 179.634 108.178 166.026 102.706 154.727Z" fill="#EDEDED"/>
            <path d="M153.991 239.194C155.195 239.395 156.45 239.646 157.555 239.144C159.01 238.542 159.713 236.935 160.315 235.428C168.046 215.291 170.255 193.497 171.61 171.954C167.042 170.146 162.022 169.744 157.153 169.393C143.85 168.388 130.498 167.384 117.195 166.38C109.364 165.777 101.433 165.225 93.7018 166.681C92.7984 188.576 91.8447 210.42 90.9409 232.315C90.8406 233.671 148.82 238.24 153.991 239.194Z" fill="#E2E2E2"/>
            <path d="M131.464 202.73C131.565 202.73 131.715 202.68 131.816 202.579C131.615 202.579 131.515 202.63 131.464 202.73Z" fill="white"/>
            <path d="M124.527 207.866C128.192 208.619 131.906 209.272 135.621 209.825C136.173 209.925 136.575 209.573 136.776 209.222C137.177 209.021 137.479 208.619 137.328 208.067C135.772 202.543 134.216 197.019 132.66 191.495C132.359 190.441 130.953 190.541 130.652 191.495C128.945 196.718 126.686 201.639 123.925 206.41C123.573 206.862 123.824 207.715 124.527 207.866ZM131.505 195.161C132.66 199.329 133.864 203.447 135.019 207.615C132.107 207.163 129.246 206.661 126.385 206.109C128.393 202.543 130.099 198.927 131.505 195.161Z" fill="white"/>
            <path d="M99.233 82.7223C96.0203 86.7396 91.2011 89.1499 86.5827 91.3596C82.7678 93.2175 78.752 95.0756 74.5353 94.674C67.2563 93.9709 62.538 86.8402 58.9236 80.4626C53.5021 70.8709 47.9299 60.7773 47.8294 49.78C47.6788 39.7867 52.3978 29.8437 60.1785 23.6168C67.9592 17.3899 78.7017 15.0297 88.3902 17.3397C100.036 20.1519 113.59 28.3372 110.678 41.8455C109.373 47.9722 107.114 53.7469 106.06 59.9739C104.805 67.6068 104.203 76.4451 99.233 82.7223Z" fill="#EDDCD1"/>
            <path d="M113.587 29.5966C116.85 36.8278 117.804 44.9129 118.256 52.8471C118.306 53.5502 118.306 54.3536 117.905 54.9061C117.202 55.8602 115.746 55.7596 114.591 55.559C102.293 53.3493 90.0444 51.1398 77.7456 48.9804C73.5792 48.2273 68.5594 47.7751 65.8485 50.9892C64.3424 52.7467 63.991 55.2074 63.8404 57.5174C63.439 62.991 63.8404 68.4648 64.995 73.838C61.7321 69.6698 60.4269 64.3469 59.9749 59.074C59.7241 56.0612 58.9712 52.0939 55.9591 51.6921C52.9974 51.3408 51.1905 55.3077 51.9936 58.1703C52.7968 61.0828 55.0057 63.3425 56.11 66.1044C56.9635 68.2638 57.164 70.6239 57.4149 72.9339C58.1178 79.4621 59.3726 85.9903 62.2341 91.8657C65.0953 97.7411 69.6634 103.014 75.6369 105.676C70.7177 103.717 65.8485 101.708 60.929 99.7499C55.7583 97.6908 50.6382 95.5817 45.5178 93.4726C41.8531 91.9664 38.1388 90.3091 35.3779 87.4969C33.4704 85.5888 32.0647 83.2284 31.0106 80.7178C25.5891 68.3642 27.4966 54.0524 31.3118 41.1466C34.3236 31.053 38.8414 20.7585 47.5258 14.7324C57.6157 7.75227 70.9183 8.15403 83.1165 9.25879C95.6162 10.5142 108.266 17.7956 113.587 29.5966Z" fill="#EDDDB2"/>
            <path d="M34.1766 402.956C35.7829 366.398 32.2691 329.085 32.47 292.327C31.3657 279.572 33.1226 266.566 37.5401 254.564C37.7912 253.81 38.0921 253.057 38.6444 252.505C40.351 250.747 43.2628 251.651 45.5719 252.605C67.3581 261.594 93.11 259.435 112.938 246.68C116.854 252.655 118.009 260.037 119.013 267.118C120.619 278.618 122.326 290.067 122.777 301.619V301.666C122.878 304.128 122.928 306.637 122.878 309.099C122.627 323.512 119.866 337.673 117.758 351.886C116.352 361.124 115.148 370.464 115.047 379.855C114.947 387.539 116.051 394.52 114.344 402.051C110.178 420.582 110.178 440.717 108.421 459.601C106.563 479.839 106.212 479.186 104.706 499.471C104.656 500.277 104.606 501.079 104.505 501.882C103.501 502.134 87.9396 505.748 87.9396 501.732C86.6345 462.413 83.7733 443.934 82.4681 404.612C81.9158 388.04 83.0201 332.098 78.8035 316.331C77.0966 316.481 75.34 316.681 73.6331 316.882C64.246 368.958 54.7081 439.262 45.3208 491.338C44.5176 495.908 43.5136 500.879 40.5015 503.84C37.4898 506.805 31.8677 506 30.9642 501.43C33.7251 461.659 32.4697 442.778 34.1766 402.956Z" fill="#736357"/>
            <path d="M76.1766 132.628C76.227 132.628 76.328 132.678 76.3787 132.678C76.2774 132.678 76.227 132.628 76.1766 132.628Z" fill="white"/>
            <path d="M75.7893 132.534C75.8397 132.534 75.84 132.585 75.8903 132.585C75.84 132.534 75.7893 132.534 75.7893 132.534Z" fill="white"/>
            <path d="M75.9405 132.585C75.8899 132.585 75.8902 132.534 75.8902 132.534C75.9917 132.585 76.0932 132.585 76.1946 132.636C76.0932 132.636 76.042 132.636 75.9405 132.585Z" fill="#1D4360"/>
            <path d="M29.1007 250.45C37.5341 235.335 41.851 217.658 39.5921 200.434C37.8852 187.478 32.6143 174.321 36.0781 161.716C37.8852 155.188 41.9013 149.514 45.4154 143.739C53.447 130.481 58.9688 115.718 61.6797 100.452C61.8303 99.6481 61.9809 98.8446 62.5329 98.2924C63.6875 97.1374 65.6452 97.7902 67.1513 98.3424C72.5225 100.401 78.5463 100.652 84.0682 99.1962C87.2305 98.3424 87.984 97.1374 89.9417 99.7987C91.598 102.059 92.4015 105.875 93.4052 108.486C97.9233 120.237 101.889 132.339 102.843 144.944C103.345 151.271 103.094 157.699 104.951 163.775C106.457 168.747 109.318 173.116 111.678 177.786C120.111 194.709 121.165 214.294 127.44 232.171C128.444 235.084 129.649 237.946 129.95 241.009C130.251 244.072 129.599 247.387 127.39 249.546C125.834 251.103 123.675 251.856 121.617 252.559C118.605 253.614 115.543 254.718 112.531 255.773C108.314 257.28 104.098 258.736 99.7305 259.589C94.4092 260.644 88.9374 260.694 83.4659 260.744C73.4259 260.845 63.4366 260.996 53.3967 261.096C47.674 261.146 42.0016 261.247 36.2789 260.795C32.464 260.493 27.695 258.987 27.3938 255.17C27.3436 253.563 28.2473 251.956 29.1007 250.45Z" fill="#F2F2F2"/>
            <path d="M92.2473 500.376C91.0927 500.325 89.8878 500.172 88.8841 500.777C87.7795 501.43 87.2272 502.736 86.926 503.99C84.9683 511.773 87.9803 519.808 88.8338 527.794C89.3358 532.514 89.0846 537.335 89.8378 542.055C91.4441 541.905 93.0504 541.752 94.657 541.602C94.3056 538.79 94.2553 535.979 94.5565 533.167C94.6567 532.262 94.8076 531.358 95.3096 530.606C95.8116 529.852 96.8154 529.399 97.6688 529.702C98.4217 530.001 98.7731 530.807 99.0746 531.558C99.7272 533.316 100.279 535.125 100.681 536.934C100.881 537.937 101.082 539.042 101.785 539.794C102.839 541 104.696 541.099 106.353 541.051C112.327 540.95 118.3 540.851 124.224 540.749C126.784 540.698 129.645 540.497 131.252 538.539C133.21 536.128 132.005 532.313 129.796 530.202C127.537 528.043 124.525 526.938 121.915 525.282C119.054 523.473 116.644 520.964 114.937 518.002C112.026 512.98 111.925 505.395 108.06 501.029C106.454 499.22 104.646 499.519 102.438 499.873C99.0743 500.325 95.7108 500.576 92.2473 500.376Z" fill="#3D322B"/>
            <path d="M30.0533 494.267C29.5011 494.216 28.9489 494.267 28.4971 494.566C28.196 494.767 27.9951 495.12 27.8445 495.471C25.686 499.891 25.7862 505.011 24.8827 509.833C23.6277 516.663 20.465 522.94 17.8547 529.366C17.1017 531.226 16.3991 533.185 16.4493 535.191C16.5497 539.108 19.7123 542.474 23.3768 543.881C27.0413 545.286 31.1576 545.034 35.0229 544.33C35.826 544.181 36.6292 544.031 37.3317 543.678C38.0849 543.327 38.6872 542.725 39.2395 542.123C43.9582 537 44.2093 529.366 44.4602 522.386C44.6111 518.37 44.8616 514.402 45.1628 510.435C45.4139 507.072 46.6691 502.801 46.0668 499.489C45.5648 496.674 43.4565 496.474 40.9967 496.174C37.332 495.572 33.768 494.467 30.0533 494.267Z" fill="#3D322B"/>
            <path d="M57.4173 229.102C58.0698 254.01 60.2285 279.319 73.2801 302.822C68.5615 298.452 57.869 298.854 50.2891 301.163C42.709 303.472 35.9823 307.189 27.6995 308.144C20.5713 308.946 12.8908 307.44 7.82071 304.176C-1.96806 297.95 -0.612694 287.856 1.54585 279.169C12.2884 235.58 24.487 192.042 31.0127 148.153C32.3179 139.515 33.5228 130.576 40.0989 122.943C43.9641 118.474 49.6362 114.507 51.1926 109.485C51.9957 106.924 51.6446 104.263 52.9497 101.802C54.2549 99.3415 65.0474 96.6296 69.0632 97.2824C75.4385 104.413 64.4951 113 63.3908 121.035C62.1859 129.723 61.1822 138.36 60.3287 147.047C58.5718 164.724 57.5678 182.45 57.2164 200.177C57.1664 209.819 57.1661 219.461 57.4173 229.102Z" fill="#ACB18F"/>
            <path d="M98.1268 255.266C96.5202 269.478 93.9099 284.091 99.9337 297.85C100.586 299.306 101.339 300.813 102.895 301.969C106.911 304.931 114.19 304.628 120.415 304.478C134.973 304.077 133.969 300.361 147.071 304.38C143.808 285.497 140.545 266.615 137.282 247.733C133.517 225.839 129.701 203.844 119.21 182.853C104.552 153.526 102.293 129.924 90.647 100.095C89.8938 98.137 79.553 98.7895 76.5912 97.8857C73.7301 100.497 78.9507 107.929 80.1053 111.143C81.9625 116.215 83.7194 121.287 85.3257 126.409C88.5386 136.603 91.2495 146.898 93.4082 157.242C97.7754 178.032 99.9837 199.023 100.084 220.014C100.084 231.714 99.432 243.515 98.1268 255.266Z" fill="#ACB18F"/>
            <path d="M78.2454 218.527C79.8015 218.677 81.5587 218.778 82.4121 220.084C82.8638 220.787 82.9641 221.741 83.667 222.243C84.1187 222.594 84.7213 222.594 85.2733 222.695C87.5825 223.147 89.49 225.306 89.5905 227.666C89.6908 230.026 88.0845 232.387 85.8256 233.09C83.2653 233.893 80.5043 232.688 78.1449 231.382C73.7273 229.022 69.561 226.31 65.5952 223.247C65.1435 222.896 64.6917 222.544 64.4909 222.042C63.3866 219.582 65.1435 215.916 67.6535 215.715C70.6153 215.514 74.9825 218.276 78.2454 218.527Z" fill="#EDDCD1"/>
            <path d="M61.6899 210.133C52.4031 202.5 45.7767 192.005 41.4095 180.856C40.1043 177.492 38.9497 174.027 38.498 170.462C37.8957 166.093 38.2971 161.724 38.6486 157.355C39.1506 151.429 39.6526 145.403 41.6606 139.829C42.9658 136.113 44.9232 132.598 46.4293 128.932C48.6882 123.358 49.8431 117.432 50.9974 111.557C51.3488 109.849 51.6499 108.092 51.2988 106.435C50.9474 104.728 49.7425 103.121 48.0356 102.819C46.1784 102.518 44.4715 103.823 43.0661 105.129C30.6167 116.83 23.9402 133.552 21.0287 150.375C18.9705 162.276 18.7195 174.931 23.5386 185.979C25.5465 190.548 28.3577 194.716 31.3695 198.684C40.2046 210.233 51.4491 220.628 65.3039 224.947C65.8059 225.098 66.3585 225.248 66.76 224.997C67.1617 224.796 67.312 224.345 67.5128 223.943C68.4163 221.784 70.7258 218.569 69.6215 216.159C68.6174 213.899 63.5473 211.69 61.6899 210.133Z" fill="#EDEDED"/>
            <path d="M347.783 552.356C356.868 552.305 366.004 551.754 375.089 551.2C400.441 549.646 425.79 548.089 451.19 546.531C455.157 546.28 460.228 545.175 460.377 541.911C460.527 539 456.462 537.29 453.049 536.589C440.8 533.978 428 533.927 415.349 533.927C396.777 533.927 378.152 534.077 359.577 534.329C347.983 534.478 336.036 534.781 325.343 538.446C319.521 540.455 311.037 548.289 320.575 551.503C323.185 552.407 328.457 551.703 331.267 551.856C336.689 552.206 342.26 552.407 347.783 552.356Z" fill="url(#paint2_linear_29_643)"/>
            <path opacity="0.22" d="M347.768 552.356C356.856 552.305 365.992 551.754 375.077 551.2C400.426 549.646 425.778 548.089 451.178 546.531C455.145 546.28 460.213 545.175 460.365 541.911C460.515 539 456.45 537.29 453.034 536.589C440.788 533.978 427.988 533.927 415.337 533.927C396.762 533.927 378.14 534.077 359.565 534.329C347.968 534.478 336.021 534.781 325.328 538.446C319.506 540.455 311.022 548.289 320.56 551.503C323.17 552.407 328.442 551.703 331.252 551.856C336.674 552.206 342.248 552.407 347.768 552.356Z" fill="url(#paint3_linear_29_643)"/>
            <path d="M303.482 105.274C303.179 103.416 301.775 101.959 300.368 100.654C299.668 100.001 298.914 99.2978 298.161 98.6953C294.195 95.5818 289.025 94.0249 283.954 94.4768C282.499 94.6274 280.993 94.929 279.939 95.8831C279.085 96.6865 278.583 97.7912 278.382 98.9462C278.332 99.1975 278.282 99.4987 278.382 99.7497C278.583 100.704 279.738 101.055 280.692 101.206C281.696 101.357 282.75 101.558 283.553 102.16C284.356 102.763 284.858 103.968 284.356 104.822C284.105 105.224 283.703 105.525 283.603 105.977C283.452 106.73 284.206 107.383 284.959 107.634C287.719 108.538 290.731 107.081 293.543 107.684C294.396 107.885 295.249 108.236 296.103 108.488C296.956 108.688 297.91 108.789 298.713 108.337C299.515 108.236 300.368 108.086 301.174 107.885C301.976 107.684 302.88 107.383 303.281 106.68C303.533 106.278 303.584 105.776 303.482 105.274Z" fill="#EADDD0"/>
            <path d="M257.859 73.0205C264.435 72.0664 271.111 71.062 277.788 71.3633C279.093 71.4136 280.498 71.5639 281.452 72.4177C282.356 73.2211 282.657 74.4767 282.958 75.6818C289.785 105.009 296.562 134.335 303.389 163.662C303.491 164.164 303.64 164.666 303.539 165.169C303.338 166.324 302.186 166.976 301.18 167.479C284.113 175.764 264.435 176.116 245.51 176.267C243.853 176.267 242.096 176.267 240.791 175.313C239.335 174.308 238.783 172.5 238.281 170.793C230.551 143.123 228.743 114.098 222.268 86.0769C221.816 84.1184 221.314 82.0093 221.967 80.0509C223.372 75.8324 233.211 76.6358 236.826 76.134C243.803 75.1296 250.831 74.0749 257.859 73.0205Z" fill="#545454"/>
            <path d="M258.201 76.7961C264.275 75.892 270.45 74.9882 276.574 75.1389C277.779 75.1889 279.084 75.2895 279.937 76.0426C280.741 76.7458 281.042 77.8002 281.293 78.8549C287.267 104.265 293.24 129.674 299.214 155.134C299.314 155.536 299.414 155.988 299.314 156.44C299.113 157.444 298.059 158.047 297.106 158.499C281.293 165.881 263.121 166.383 245.652 166.735C244.146 166.785 242.539 166.785 241.284 165.981C239.979 165.128 239.427 163.521 239.026 162.064C232.199 138.061 230.793 112.902 225.12 88.5969C224.719 86.8897 224.317 85.0818 224.92 83.3743C226.275 79.6583 235.311 80.3111 238.624 79.8089C245.2 78.7542 251.726 77.7501 258.201 76.7961Z" fill="#F7F7F7"/>
            <path d="M269.455 170.788C269.605 171.039 269.857 171.24 270.057 171.391C270.609 171.742 271.212 171.943 271.864 171.893C272.517 171.843 273.119 171.592 273.521 171.14C274.776 169.684 274.274 167.173 272.115 167.022C270.509 166.922 268.501 169.231 269.455 170.788Z" fill="#F7F7F7"/>
            <path d="M337.775 143.985C332.704 137.708 329.241 130.276 324.071 124.099C317.093 115.763 309.663 109.787 305.044 99.9446C302.886 103.309 295.658 106.674 293.5 110.038C301.883 121.437 310.265 131.029 313.779 146.696C315.438 153.928 323.269 164.725 327.032 171.152C329.04 174.567 331.752 177.53 334.611 180.292C340.787 186.268 348.115 191.49 356.551 192.997C369.351 195.257 381.849 186.82 381.597 173.111C381.349 160.808 364.681 161.963 356.248 158.146C349.07 154.932 342.646 150.061 337.775 143.985Z" fill="#E0C74E"/>
            <path d="M361.221 93.2109C365.235 94.8681 369.099 95.9228 371.91 95.9728C375.224 96.0232 378.286 94.366 381.199 92.8094C387.171 89.5453 393.446 85.9296 396.508 79.8532C398.265 76.2879 398.717 72.2203 399.07 68.2531C399.924 58.2601 400.325 48.2669 400.223 38.2233C400.175 33.1013 399.924 27.6276 397.062 23.3591C392.293 16.1279 382.403 14.8724 373.718 14.3703C365.184 13.8681 356.15 13.4664 348.57 17.4838C340.688 21.702 342.496 27.9289 341.891 35.6623C341.14 45.3543 340.688 55.0963 340.586 64.7883C340.538 70.3122 340.739 76.1373 343.601 80.8576C346.361 85.3271 353.991 90.2481 361.221 93.2109Z" fill="#EADDD0"/>
            <path d="M410.811 404.648C409.407 366.886 412.167 328.417 411.865 290.404C412.718 277.247 411.263 263.839 407.599 251.436C407.347 250.682 407.147 249.879 406.695 249.276C405.288 247.469 402.929 248.423 401.073 249.377C383.351 258.717 362.37 256.558 346.154 243.451C342.942 249.628 342.038 257.261 341.287 264.593C340.032 276.444 338.676 288.295 338.323 300.247V300.298C338.275 302.858 338.224 305.419 338.275 307.979C338.524 322.844 340.784 337.458 342.592 352.119C343.744 361.663 344.801 371.303 344.9 380.945C345.002 388.881 344.149 396.11 345.552 403.845C349.016 422.927 349.067 443.718 350.522 463.252C352.129 484.142 353.686 505.032 354.991 525.974C355.039 526.827 355.09 527.63 355.141 528.483C355.994 528.786 368.644 532.451 368.644 528.282C369.599 487.658 370.551 447.03 371.506 406.405C371.907 389.33 370.854 331.583 374.215 315.262C375.622 315.463 377.026 315.612 378.433 315.813C386.213 369.545 395.55 463.704 403.333 517.436C404.034 522.155 404.839 527.279 407.297 530.343C409.757 533.403 414.325 532.502 415.077 527.83C412.619 486.753 412.317 445.725 410.811 404.648Z" fill="#4D4D4D"/>
            <path d="M374.158 528.139C374.006 527.69 373.907 527.186 373.757 526.734C372.201 520.607 371.395 514.28 371.395 507.952C371.395 505.089 371.548 502.179 370.896 499.367C367.231 499.415 356.94 498.762 353.276 498.813C352.973 498.813 352.623 498.813 352.372 499.013C352.12 499.214 352.021 499.618 351.971 499.918C350.363 508.656 355.784 518.248 353.827 526.935C353.024 530.4 349.812 531.654 346.849 533.412C344.289 534.969 339.218 538.737 336.156 538.737C334.399 539.44 332.543 540.141 331.238 541.548C329.932 542.953 329.429 545.265 330.636 546.771C331.69 548.077 333.596 548.176 335.255 548.226C348.004 548.328 360.804 547.223 373.353 544.911C374.108 544.762 374.91 544.612 375.464 544.058C375.916 543.606 376.116 543.004 376.266 542.453C377.721 536.877 375.613 532.96 374.158 528.139Z" fill="#BE9F3E"/>
            <path d="M420.746 531.412C420.345 530.055 419.441 528.902 418.989 527.597C418.486 526.24 418.738 524.533 418.738 523.075C418.738 516.448 418.738 509.869 418.738 503.242C418.738 501.232 418.537 498.872 416.831 497.866C415.675 497.163 414.17 497.366 412.864 497.615C409 498.268 405.084 498.971 401.22 499.624C400.217 499.825 399.061 500.025 398.508 500.879C397.957 501.732 398.106 502.837 398.307 503.844C399.463 510.219 399.915 516.699 399.714 523.126C399.663 524.985 399.513 526.842 399.714 528.702C395.245 532.517 390.326 535.832 385.004 538.392C383.45 539.147 381.843 539.898 380.738 541.204C379.634 542.561 379.331 544.669 380.538 545.924C381.591 547.029 383.298 547.029 384.755 546.93C396.2 546.226 407.644 544.417 418.738 541.554C419.39 541.405 420.094 541.204 420.546 540.653C420.896 540.249 421.049 539.698 421.147 539.147C421.701 536.634 421.549 533.924 420.746 531.412Z" fill="#BE9F3E"/>
            <path d="M361.155 106.98C362.81 106.428 364.468 105.775 366.073 105.172C374.257 102.009 382.438 98.8449 390.572 95.7315C391.775 95.2796 393.08 94.7774 394.335 95.0283C395.34 95.2293 396.143 95.8321 396.945 96.4849C412.257 108.788 416.424 128.824 420.639 147.053C435.549 211.482 440.318 278.019 434.747 343.803C398.25 350.08 361.406 354.198 324.358 356.108C326.418 356.006 330.582 310.962 331.085 306.542C333.845 280.53 335.303 254.317 335 228.154C334.698 201.89 336.054 175.677 337.913 149.464C338.664 138.868 339.518 128.272 340.472 117.676C340.823 113.508 352.821 109.24 355.832 108.587C357.691 108.085 359.448 107.533 361.155 106.98Z" fill="#FCEE9F"/>
            <path d="M278.997 139.454C275.433 134.884 272.321 130.013 269.159 125.092C268.004 123.234 266.95 120.824 268.204 119.016C268.958 117.961 270.413 117.509 271.718 117.66C273.023 117.81 274.228 118.463 275.333 119.216C276.939 120.321 278.345 121.627 279.75 123.033C285.925 129.26 288.635 138.6 290.995 147.037C292.752 153.364 293.103 160.344 297.019 165.617C296.065 166.219 295.111 166.822 294.157 167.425C293.956 167.575 293.655 167.726 293.404 167.626C293.153 167.575 293.003 167.274 292.852 167.023C290.643 162.503 288.786 157.934 286.175 153.565C283.565 149.095 282.16 143.622 278.997 139.454Z" fill="#EDEDED"/>
            <path d="M306.903 169.631C307.403 169.631 307.957 169.631 308.358 169.329C308.909 168.978 309.062 168.224 309.16 167.572C310.618 158.734 309.714 149.644 308.508 140.756C306.502 140.404 304.443 140.655 302.383 140.906C296.863 141.609 291.341 142.312 285.819 143.016C282.556 143.417 279.293 143.869 276.281 145.074C277.737 154.063 279.192 163.052 280.598 172.041C280.698 172.643 304.745 169.681 306.903 169.631Z" fill="#E2E2E2"/>
            <path d="M271.565 110.37C270.561 112.279 268.804 113.634 267.097 114.94C265.692 115.995 264.236 117.099 262.479 117.3C259.467 117.602 256.957 115.091 254.949 112.781C251.937 109.316 248.825 105.65 247.871 101.181C246.967 97.1131 248.072 92.694 250.732 89.4799C253.393 86.3164 257.56 84.408 261.726 84.5586C266.696 84.7595 272.92 86.9189 272.87 92.694C272.87 95.3053 272.418 97.8663 272.519 100.478C272.619 103.742 273.121 107.407 271.565 110.37Z" fill="#EDDCD1"/>
            <path d="M273.011 87.5763C274.969 90.2379 275.973 93.4517 276.826 96.6658C276.926 96.9671 276.977 97.2683 276.876 97.5193C276.676 97.9714 276.073 98.0717 275.571 98.0717C270.4 98.1721 265.18 98.323 260.009 98.4233C258.253 98.4736 256.194 98.6743 255.341 100.231C254.889 101.085 254.939 102.089 255.04 103.043C255.341 105.303 255.943 107.513 256.847 109.622C255.19 108.216 254.186 106.107 253.584 103.997C253.232 102.792 252.58 101.236 251.325 101.336C250.07 101.436 249.668 103.194 250.271 104.299C250.823 105.403 251.927 106.157 252.63 107.211C253.182 108.015 253.433 108.969 253.734 109.873C254.538 112.484 255.592 115.045 257.248 117.205C258.905 119.364 261.214 121.121 263.875 121.724C261.716 121.322 259.557 120.921 257.399 120.519C255.14 120.117 252.831 119.665 250.572 119.213C248.966 118.912 247.309 118.56 245.953 117.606C245 117.004 244.247 116.15 243.594 115.196C240.382 110.626 239.93 104.6 240.432 99.0258C240.833 94.657 241.787 90.0873 244.849 86.9235C248.363 83.2578 253.835 82.3037 258.905 81.7512C264.126 81.249 269.848 83.1572 273.011 87.5763Z" fill="#EDDDB2"/>
            <path d="M256.9 184.592C259.058 177.712 259.359 170.18 257 163.35C255.243 158.228 251.98 153.307 252.382 147.884C252.582 145.071 253.737 142.41 254.691 139.748C256.85 133.672 257.904 127.194 257.753 120.766C257.753 120.415 257.753 120.063 257.903 119.812C258.255 119.26 259.108 119.36 259.811 119.461C262.17 119.862 264.63 119.461 266.789 118.406C267.993 117.803 268.194 117.251 269.248 118.155C270.102 118.959 270.754 120.415 271.357 121.419C274.168 125.838 276.778 130.458 278.234 135.48C278.937 137.991 279.389 140.652 280.644 142.962C281.698 144.87 283.203 146.427 284.559 148.084C289.428 154.261 291.436 162.195 295.503 168.925C296.155 170.029 296.858 171.084 297.259 172.339C297.661 173.544 297.661 174.951 296.908 176.055C296.406 176.808 295.603 177.311 294.8 177.763C293.645 178.466 292.491 179.118 291.386 179.822C289.78 180.776 288.224 181.73 286.517 182.433C284.408 183.287 282.2 183.789 279.991 184.241C275.925 185.144 271.859 185.998 267.793 186.902C265.483 187.404 263.174 187.907 260.815 188.208C259.209 188.409 257.15 188.208 256.749 186.651C256.448 185.998 256.699 185.295 256.9 184.592Z" fill="#F2F2F2"/>
            <path d="M266.692 173.554C269.001 183.648 272.013 193.792 279.292 202.278C276.983 200.872 272.665 201.927 269.804 203.534C266.893 205.09 264.483 207.2 261.17 208.254C258.309 209.158 255.096 209.208 252.737 208.305C248.219 206.597 247.968 202.329 248.119 198.663C248.871 179.982 250.227 161.251 249.223 142.821C249.022 139.206 248.771 135.439 250.829 131.774C252.034 129.614 253.992 127.555 254.243 125.396C254.343 124.291 253.992 123.237 254.343 122.132C254.694 121.027 258.861 119.019 260.517 118.918C263.73 121.278 259.965 125.697 260.166 129.062C260.417 132.678 260.718 136.293 261.07 139.909C261.823 147.241 262.877 154.572 264.232 161.803C264.985 165.72 265.788 169.637 266.692 173.554Z" fill="#ACB18F"/>
            <path d="M285.462 180.821C285.964 186.746 286.165 192.923 289.729 198.045C290.131 198.597 290.532 199.15 291.285 199.451C293.193 200.355 296.105 199.602 298.615 198.999C304.488 197.643 303.784 196.187 309.457 196.739C306.547 189.307 303.685 181.875 300.773 174.443C297.41 165.856 294.046 157.168 288.022 149.485C279.639 138.739 276.728 129.298 269.499 118.099C269.047 117.346 264.881 118.501 263.576 118.351C262.622 119.656 265.383 122.268 266.136 123.473C267.341 125.381 268.445 127.339 269.549 129.248C271.708 133.165 273.666 137.131 275.423 141.149C278.936 149.284 281.597 157.62 283.354 166.157C284.308 171.028 285.011 175.899 285.462 180.821Z" fill="#ACB18F"/>
            <path d="M274.338 167.454C274.991 167.353 275.694 167.303 276.145 167.755C276.397 168.006 276.497 168.408 276.848 168.559C277.049 168.659 277.3 168.609 277.551 168.609C278.555 168.609 279.459 169.312 279.71 170.266C279.961 171.22 279.459 172.325 278.605 172.777C277.601 173.329 276.397 173.028 275.343 172.726C273.334 172.124 271.427 171.371 269.57 170.467C269.369 170.366 269.168 170.266 269.017 170.065C268.365 169.161 268.766 167.504 269.77 167.203C270.975 166.851 272.983 167.655 274.338 167.454Z" fill="#EDDCD1"/>
            <path d="M266.857 165.456C262.439 163.096 258.875 159.38 256.164 155.212C255.361 153.956 254.608 152.651 254.106 151.245C253.504 149.537 253.303 147.679 253.052 145.872C252.751 143.411 252.5 140.9 252.801 138.49C253.052 136.883 253.554 135.276 253.855 133.669C254.307 131.208 254.307 128.697 254.257 126.186C254.257 125.483 254.257 124.73 253.955 124.077C253.654 123.424 253.052 122.872 252.298 122.872C251.495 122.922 250.943 123.575 250.492 124.228C246.375 130.053 245.07 137.385 245.271 144.516C245.422 149.537 246.375 154.709 249.237 158.827C250.441 160.535 251.947 161.991 253.503 163.347C258.071 167.314 263.493 170.628 269.517 171.231C269.718 171.231 269.969 171.281 270.119 171.131C270.27 171.03 270.32 170.829 270.32 170.628C270.521 169.674 271.173 168.168 270.521 167.264C270.019 166.41 267.76 165.908 266.857 165.456Z" fill="#EDEDED"/>
            <path d="M288.274 171.65C287.722 169.591 287.12 167.532 286.066 165.624C284.71 163.163 282.552 161.205 280.142 159.799C278.636 158.895 276.829 158.192 275.122 158.644C273.616 159.096 272.512 160.452 272.01 161.908C271.508 163.414 271.608 165.021 271.86 166.578C272.964 173.056 279.439 183.551 287.22 181.844C288.576 181.543 290.082 180.739 290.232 179.333C290.282 178.831 290.132 178.329 290.031 177.826C289.429 175.818 288.827 173.759 288.274 171.65Z" fill="#EADDD0"/>
            <path d="M364.792 200.286C361.026 209.275 355.805 219.168 346.319 221.528C340.143 223.034 333.668 220.825 327.795 218.264C316.099 213.142 305.005 206.664 294.865 198.93C288.439 194.009 281.712 186.828 283.67 178.994C283.971 177.789 284.524 176.584 285.578 175.881C288.037 174.274 291.1 176.533 293.258 178.492C303.799 188.134 317.102 194.812 331.16 197.524C332.914 197.876 334.773 198.127 336.479 197.725C341.047 196.671 343.307 191.599 344.762 187.129C350.686 169.453 355.754 151.525 359.972 133.397C360.774 129.882 361.58 126.316 363.636 123.354C366.8 118.784 372.973 116.474 378.394 117.83C396.014 122.299 385.525 143.24 382.01 154.137C376.888 169.704 371.168 185.121 364.792 200.286Z" fill="#E0C74E"/>
            <path d="M456.16 142.677C453.349 139.513 448.781 137.504 447.775 133.336C447.023 130.072 448.93 126.758 451.19 124.297C453.498 121.837 456.258 119.727 457.917 116.815C461.278 110.789 458.066 102.101 451.541 99.741C448.879 98.7869 445.97 98.7872 443.359 97.6822C440.749 96.6278 438.438 93.7653 439.492 91.1037C440.548 88.3417 444.814 86.6848 443.859 83.9226C443.56 83.1192 442.907 82.5167 442.204 82.0145C439.944 80.3072 437.435 78.9513 434.774 77.9469C432.717 77.1434 430.508 76.5409 428.751 75.2353C424.183 71.7702 424.081 64.8905 420.618 60.3207C419.914 59.3666 419.061 58.5632 418.157 57.8601C418.208 57.3579 418.208 56.8557 418.208 56.3535C418.31 52.3865 418.361 48.319 416.903 44.6027C416.05 42.3933 414.646 40.4348 413.49 38.3757C413.439 38.3257 413.439 38.2251 413.388 38.1751C417.406 39.1795 421.872 38.627 425.135 36.066C428.901 33.1031 430.356 27.3281 427.847 23.2605C426.844 21.6536 425.386 20.4484 424.231 18.9419C420.618 14.121 420.016 9.14959 413.089 8.54699C409.072 8.19549 404.303 8.84825 402.094 12.5141C395.921 4.22831 385.279 -0.241052 374.937 0.0100337C364.043 0.261119 353.653 5.23263 345.421 12.3635C342.861 14.6232 340.401 17.1341 338.895 20.1973C337.389 23.2605 336.937 26.6753 336.635 30.04C336.335 33.3541 335.782 38.3257 337.389 41.3889L337.087 43.0964C335.581 45.1552 337.539 48.0174 339.598 49.524C352.8 59.5173 372.88 56.4541 385.579 67.0999C390.949 71.5693 394.314 78.0472 396.322 84.7764C397.274 87.9905 397.978 91.3549 397.628 94.7193C396.825 102.252 391.2 108.127 386.935 114.405C381.765 121.987 378.301 130.775 377.044 139.865C376.392 144.434 376.493 149.707 379.756 152.971C382.819 156.085 387.988 156.687 390.296 160.403C393.209 165.073 389.647 171.099 389.797 176.623C389.946 181.846 393.963 186.717 399.082 187.822C403.249 188.726 407.515 187.37 411.733 186.868C415.951 186.416 420.968 187.269 422.977 191.036C424.383 193.697 423.881 197.011 425.087 199.774C426.844 203.791 431.861 205.498 436.181 204.795C440.498 204.092 444.26 201.581 447.877 199.07C449.834 197.715 451.942 196.108 452.193 193.748C452.343 192.09 451.541 190.483 450.586 189.128C447.625 184.759 443.207 180.139 444.763 175.117C445.769 171.803 449.08 169.794 451.741 167.584C455.354 164.571 458.216 160.554 459.222 155.984C460.225 151.264 459.27 146.142 456.16 142.677Z" fill="#5E625E"/>
            <defs>
            <linearGradient id="paint0_linear_29_643" x1="3.23338" y1="537.545" x2="177.079" y2="545.846" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1"/>
            </linearGradient>
            <linearGradient id="paint1_linear_29_643" x1="3.22459" y1="537.545" x2="177.07" y2="545.846" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1"/>
            </linearGradient>
            <linearGradient id="paint2_linear_29_643" x1="316.267" y1="542.372" x2="460.318" y2="544.048" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1"/>
            </linearGradient>
            <linearGradient id="paint3_linear_29_643" x1="316.252" y1="542.372" x2="460.303" y2="544.048" gradientUnits="userSpaceOnUse">
            <stop/>
            <stop offset="1"/>
            </linearGradient>
            </defs>
          </svg>

        </div>

      </div>
    </main>
    )
}