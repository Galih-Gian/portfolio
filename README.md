<!doctype html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="src/output.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
    integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
  <!-- header -->
  <header class="bg-slate-700 sticky top-0">
    <nav class="w-11/12 md:container md:flex md:justify-between mx-auto md:items-center">
      <div class="flex justify-between md:flex gap-2 items-center ">
        <a href="#portfolio" class="font-bold text-2xl md:text-3xl py-5 text-white">Tailwind <span
            class="text-slate-400">Css</span></a>
        <span class="fill-current text-sky-300 hidden md:flex"><svg width="40" role="img" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <title>Tailwind CSS</title>
            <path
              d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
          </svg></span>
        <a id="" class="md:hidden humbuger">
          <i id="bar" class="text-2xl text-white fa-solid fa-bars"></i>
          <span id="close" class="hidden"><i class="fa-solid fa-xmark text-3xl text-white hidden"></i></span>
        </a>
      </div>
      <ul id=""
        class="menu hidden md:top-0 md:w-auto md:bg-slate-700 md:relative md:divide-y-0 md:flex md:gap-5 md:py-2">
        <li class="font-semibold text-lg md:font-semibold md:text-xl text-slate-300 py-2 hover:text-slate-100">
          <a href="#home">Home</a>
        <li class="font-semibold text-lg md:font-semibold md:text-xl text-slate-300 py-2 hover:text-slate-100">
          <a href="#service">Service</a>
        <li class="font-semibold text-lg md:font-semibold md:text-xl text-slate-300 py-2 hover:text-slate-100">
          <a href="#portfolio">Portfolio</a>
        <li class="font-semibold text-lg md:font-semibold md:text-xl text-slate-300 md:px-2 py-2 hover:text-slate-100">
          <a href="#about">About</a>
        <li class="font-semibold text-lg md:font-semibold md:text-xl text-slate-300 md:py-2 py-2">
          <a href="#kontak"
            class="md:bg-slate-700 md:hover:bg-slate-700 hover:text-slate-100 md:py-2 md:px-5 md:rounded-lg md:border-2 md:border-sky-400">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
  <!-- end header -->

  <!-- home -->
  <section id="home" class="bg-slate-800 pb-15 pt-30">
    <div class="w-12/12 md:container mx-auto text-center flex items-center justify-center">
      <div class="px-2 md:px-4">
        <h3 class="font-bold text-white text-3xl md:text-5xl md:mb-4 flex justify-center items-center gap-2">Talk <span
            class="text-sky-500">Class </span>Do More <span class="fill-current text-sky-500 hover:text-sky-200"><svg
              width="40" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>StackBlitz</title>
              <path d="M10.797 14.182H3.635L16.728 0l-3.525 9.818h7.162L7.272 24l3.524-9.818Z" />
            </svg></span></h3>
        <p class="text-center text-slate-400 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur voluptas nobis praesentium?</p>
        <div class="py-12 mx-auto px-4">
          <a href="#about"
            class="font-bold text-2xl md:text-4xl bg-red-700 text-slate-100 py-2 px-5 md:py-3 md:px-7 rounded-full hover:bg-red-500 hover:text-white">Lets
            Go</a>
        </div>

      </div>
    </div>
  </section>
  <!-- end home -->
  <!-- service -->
  <section id="service" class="bg-slate-700 lg:pb-30">
    <div class="w-12/12 md:container mx-auto pb-20 pt-5">
      <h3 class="text-center text-slate-400 px-4 font-bold text-3xl md:text-5xl hover:text-slate-100 flex items-center justify-center gap-2">
        Services <span class="fill-current text-sky-500 hover:text-sky-300"><svg width="40" role="img"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Steelseries</title>
            <path
              d="M14.08008 0c-1.00234 0-1.8125.80893-1.8125 1.8086v2.57226c-4.01871.7444-7.19505 3.9119-7.93946 7.91992H1.8125c-1.001 0-1.8125.80698-1.8125 1.80664 0 .99833.8115 1.8086 1.8125 1.8086h2.51563C5.18077 20.5094 9.22875 24 14.08008 24 19.54884 24 24 19.56148 24 14.10742c0-4.83662-3.50067-8.87524-8.10742-9.72656V1.80859C15.89258.80893 15.08108 0 14.08008 0ZM4.69336 3.17578c-1.00368 0-1.8164.80955-1.8164 1.81055 0 .99966.81272 1.8125 1.8164 1.8125 1.001 0 1.8164-.81284 1.8164-1.8125 0-1.001-.8154-1.81055-1.8164-1.81055zm9.38672 4.65625c3.46809 0 6.29297 2.81398 6.29297 6.2754 0 3.46006-2.82488 6.27734-6.29297 6.27734-3.46943 0-6.29297-2.81728-6.29297-6.27735 0-3.4614 2.82354-6.27539 6.29297-6.27539zm-.01758 2.4043c-2.14634 0-3.89258 1.73986-3.89258 3.88086S11.91616 18 14.0625 18c2.14634 0 3.89258-1.74182 3.89258-3.88281 0-2.141-1.74624-3.88086-3.89258-3.88086zm0 2.7168c.6455 0 1.16797.51989 1.16797 1.16406 0 .64283-.52246 1.16797-1.16797 1.16797-.64417 0-1.16992-.52514-1.16992-1.16797 0-.64417.52575-1.16407 1.16992-1.16407z" />
          </svg></span></h3>
      <p class="text-center font-semibold text-slate-400 mt-5 px-2 md:px-4 md:text-md">Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Nemo cupiditate explicabo fugit non at error magni dignissimos, cum accusamus
        natulorem5
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 justify-center mt-5 px-4">
        <div class="flex justify-start bg-white space-x-1 lg:space-x-5 rounded-xl shadow-lg px-2 py-3 lg:px-5">
         <span class="text-3xl md:text-5xl"><i class="fa-solid fa-laptop"></i></span>
          <div class=" px-1 lg:px-4">
            <h2 class="font-semibold text-lg lg:text-2xl text-slate-800">Lorem ipsum dolor</h2>
            <p class=" text-slate-400 text-xs lg:text-base mb-3">Lorem ipsum dolor sit amet consectetur adipisicing 
              !</p>
            <a href="" class="bg-sky-700 py-2 px-3 lg:px-5 rounded-lg text-xs lg:text-base text-slate-200 font-semibold">Selanjutnya</a>
          </div>

        </div>
        <div class="flex justify-start bg-white space-x-2 lg:space-x-5 rounded-xl shadow-lg py-3 px-2 lg:px-5">
          <span class="text-3xl md:text-5xl"><i class="fa-solid fa-laptop"></i></span>
          <div class="px-2 lg:px-4">
            <h2 class="font-semibold text-lg lg:text-2xl text-slate-800">Lorem ipsum dolor</h2>
            <p class="text-slate-400 text-xs lg:text-base mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="" class="bg-sky-700 py-2 px-3 lg:px-5 rounded-lg text-xs lg:text-base text-slate-200 font-semibold">Selanjutnya</a>
          </div>

        </div>
        <div class="flex justify-start bg-white space-x-2 lg:space-x-5 rounded-xl shadow-lg py-3 px-2 lg:px-5">
        <span class="text-3xl md:text-5xl"><i class="fa-solid fa-laptop"></i></span>
          <div class="px-2 lg:px-4">
            <h2 class="font-semibold text-lg lg:text-2xl text-slate-800">Lorem ipsum dolor</h2>
            <p class=" text-slate-400 text-xs lg:text-base mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="" class="bg-sky-700 py-2 px-3 lg:px-5 rounded-lg text-xs lg:text-base text-slate-200 font-semibold">Selanjutnya</a>
          </div>
        </div>
        <div class="flex justify-start bg-white space-x-2 lg:space-x-5 rounded-xl shadow-lg py-3 px-2 lg:px-5">
           <span class="text-3xl md:text-5xl"><i class="fa-solid fa-laptop"></i></span>
          <div class="px-2 lg:px-4">
            <h2 class="font-semibold text-lg lg:text-2xl text-slate-800">Lorem ipsum.</h2>
            <p class="text-slate-400 text-xs lg:text-base mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="" class="bg-sky-700 py-2 px-3 lg:px-5 rounded-lg text-xs lg:text-base text-slate-200 font-semibold">Selanjutnya</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end service -->
  <!-- portfolio -->
  <section id="portfolio" class="bg-slate-800 max-h-full pt-20 pb-15">
    <div class="w-12/12 md:container mx-auto">
      <div class="mx-auto px-4">
        <h3 class="text-center font-bold text-3xl md:text-5xl text-slate-200 mb-5 flex gap-3 justify-center">Portfolio <span
            class="fill-current text-sky-700 hover:text-sky-500"><svg width="40" role="img" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <title>Transport for London</title>
              <path
                d="M12 2.25a9.73 9.73 0 0 0-9.49 7.5H0v4.5h2.51a9.73 9.73 0 0 0 9.49 7.5c4.62 0 8.48-3.2 9.49-7.5H24v-4.5h-2.51A9.73 9.73 0 0 0 12 2.25zM12 6c2.5 0 4.66 1.56 5.56 3.75H6.44A6.02 6.02 0 0 1 12 6zm-5.56 8.25h11.12A6.02 6.02 0 0 1 12 18a6.02 6.02 0 0 1-5.56-3.75Z" />
            </svg></span></h3>
        <p class="text-center font-medium text-slate-500 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quae, et.</p>
      </div>
      <div class="grid grid-cols-2 px-2 md:px-4 md:grid-cols-4 mx-auto gap-2 md:gap-5">
        <div class="rounded-lg shadow-lg py-2 px-4 bg-slate-500 hover:bg-slate-300 hover:text-slate-500">
          <a href="#" class="">
            <img src="./img/averie-woodard-5d20kdvFCfA-unsplash.jpg" alt="" class="w-full rounded-lg">
            <h3 class="text-center text-2xl font-bold text-slate-400 py-3">Java Script</h3>
          </a>
        </div>
        <div class="rounded-lg shadow-lg py-2 px-4 bg-slate-500 hover:bg-slate-300">
          <a href="#" class="">
            <img src="./img/becca-tapert--A_Sx8GrRWg-unsplash.jpg" alt="" class="w-full rounded-lg">
            <h3 class="text-center text-2xl font-bold text-slate-400 py-3">PHP</h3>
          </a>
        </div>
        <div class="rounded-lg shadow-lg py-2 px-4 bg-slate-500 hover:bg-slate-300 hover:text-slate-500">
          <a href="#" class="">
            <img src="./img/mohamed-nohassi-odxB5oIG_iA-unsplash.jpg" alt="" class="w-full rounded-lg">
            <h3 class="text-center text-2xl font-bold text-slate-400 py-3">Python</h3>
          </a>
        </div>
        <div class="rounded-lg shadow-lg py-2 px-4 bg-slate-500 hover:bg-slate-300 hover:text-slate-500">
          <a href="#" class="">
            <img src="./img/william-white-cF6fz9QwfrY-unsplash.jpg" alt="" class="w-full rounded-lg">
            <h3 class="text-center text-2xl font-bold text-slate-400 py-3">Java</h3>
          </a>
        </div>


      </div>
  </section>
  </div>
  <!-- end portfolio -->
  <!-- about -->
  <section id="about" class="bg-slate-700 pt-7 pb-5">
    <div class="md:container px-2 mx-auto">
      <div class="w-full md:flex justify-center items-start gap-8">
        <img src="./img/mohamed-nohassi-odxB5oIG_iA-unsplash.jpg" alt=""class="w-[300px] h-[250] md:w-[250px] md:h-[200px] mx-auto rounded-lg"
          class=" rounded-lg border-4 border-slate-300">
        <div class="px-5 border-l-2 border-b-2 border-slate-200">
          <h3 class="font-bold text-3xl md:text-5xl text-slate-400 text-center pt-10 md:pt-0 mb-3">About Me</h3>
          <p class="font-medium text-md md:text-xl text-slate-500 text-center mb-5">Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Tempore, ipsum.</p>
          <p class="font-medium text-md md:text-lg text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cumque
            pariatur non vero velit vel eaque sed sit. Culpa quae earum maxime nemo quia mollitia natus sequi provident
            minima dolorum Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facilis nobis fuga expedita.
            Enim, laudantium eum. Esse non sint suscipit?</p>
          <p class="font-medium text-md md:text-lg text-slate-400 pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            cumque pariatur non vero velit vel eaque sed sit. Culpa quae earum maxime nemo quia mollitia natus sequi
            provident minima dolorum Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facilis nobis fuga
            expedita. Enim, laudantium eum. Esse non sint suscipit?</p>
        </div>

      </div>
      <div class="flex justify-end items-center  pt-5 lg:gap-7 gap-3">
        <a href="#" class="flex justify-center items-center gap-1 fill-current text-slate-200 shadow-lg hover:text-slate-400"><span class="font-semibold">Youtube</span>
          <svg width="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>YouTube</title>
            <path
              d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
        <a href="" class="flex justify-center items-center gap-1 fill-current text-slate-200 shadow-lg  hover:text-slate-400"><span class="font-semibold">Tiktok</span>
          <svg width="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>TikTok</title>
            <path
              d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
          </svg>
        </a>
        <a href="" class="flex justify-center items-center gap-1 fill-current text-slate-200 shadow-lg  hover:text-slate-400"><span class="font-semibold">Instagram</span>
          <svg width="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Instagram</title>
            <path
              d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
          </svg>
        </a>
        <a href="" class="flex justify-center items-center gap-1 fill-current text-slate-200 shadow-lg hover:text-slate-400"><span class="font-semibold">Facebook</span>
          <svg width="20" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Facebook</title>
            <path
              d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
          </svg>
        </a>
       
      </div>
      <div class="border-b-2 border-slate-200 pt-5">
        <p class="text-center text-slate-400 pb-5 ">dibuat Oleh <span
            class="font-semibold text-sky-600 hover:text-sky-400">Galih Gian Arifianto </span>dengan <span
            class="font-semibold text-sky-600 hover:text-sky-400">Tailwind Css</span></p>
      </div>
    </div>
  </section>
  <!-- end about -->
   <!-- footer -->
    <section class="bg-slate-800 pt-10 pb-5">
      <div class="md:w-full md:container md:mx-auto md:justify-between  w-12/12 flex flex-wrap justify-center">
        <div class="md:w-1/3 w-full px-6 mb-2">
          <h3 class="font-bold text-2xl text-slate-300">Galih Gian Arifianto</h3>
          <h4 class="font-medium text-slate-400">Email: giangalih76@gmail.com</h4>
          <p class="font-medium text-slate-400">Batang Jawa Tengah Indonesia</p>
          <p class="font-medium text-slate-400">Watshapp : 087848631991</p>
          <p class="font-medium text-slate-500">Backend Laravel</p>
        </div>
       <div class="md:w-1/3 w-full px-6 mb-2">
        <h3 class="font-bold text-2xl text-slate-300">Tentang :</h3>
        <a href="#home" class="block text-slate-400 font-medium">Home</a>
        <a href="#service" class="block text-slate-400 font-medium">Services</a>
        <a href="#portfolo" class="block text-slate-400 font-medium">Portfolio</a>
        <a href="#about" class="block text-slate-400 font-medium">Contact</a>
       </div>
       <div class="md:w-1/3 px-6 w-full mb-2">
        <h3 class="font-bold text-slate-300 text-2xl">dibuat :</h3>
        <h4 class="font-semibold text-slate-400 ">2025</h4>
        <a href="" class="text-slate-400 font-semibold">Tailwind Css Versi 4</a>
      </div>
      </div>
    
    </section>
    <!-- end footer -->

  <script src="./script.js"></script>
</body>

</html>
