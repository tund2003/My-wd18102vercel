import Banner from "../components/Banner";
import Header from "../components/Header";
import { posts } from "../dataFake";

const HomePage = () => {
    return `
        <div class="leading-normal tracking-normal ">
        <header class="fixed w-full
        ">
        <nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div class="flex flex-wrap items-center space-x-8  max-w-screen-xl  mx-auto">
        <div class="pl-4 flex items-center">
          <a class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
            <!--Icon from: http://www.potlabicons.com/ -->
            <svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
              <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
              <path
                class="plane-take-off"
                d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
              />
            </svg>
            LANDING
          </a>
        </div>
        <div class="block lg:hidden pr-4">
          <button id="nav-toggle" class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-white p-4 lg:p-0 z-20" id="nav-content">
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
              <a class="inline-block py-2 px-4 text-white font-bold no-underline" href="/">Home</a>
            </li>
            <li class="mr-3">
              <a class="inline-block text-white no-underline hover:text-red-800 hover:text-underline py-2 px-4" href="/about">About</a>
            </li>
            <li class="mr-3">
              <a class="inline-block text-white no-underline hover:text-red-800 hover:text-underline py-2 px-4" href="/product">Product</a>
            </li>
          </ul>
          <button
            id="navAction"
            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Action
          </button>
        </div>
      </div>
      <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
    </header>
    <div class="pt-24">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <!--Left Col-->
        <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p class="uppercase tracking-loose w-full">What business are you?</p>
          <h1 class="my-4 text-5xl font-bold leading-tight">
            Main Hero Message to sell yourself!
          </h1>
          <p class="leading-normal text-2xl mb-8">
            Sub-hero message, not too long and not too short. Make it just right!
          </p>
          <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Subscribe
          </button>
        </div>
        <!--Right Col-->
        <div class="w-full md:w-3/5 py-6 text-center">
          <img class="w-full md:w-4/5 z-50" src="https://img.freepik.com/free-photo/beautiful-attractive-elegance-asian-woman-brown-dress-face-model-pose-studio-photo-shoot-isolate-white-background_609648-1419.jpg?w=740&t=st%3D1685199897~exp%3D1685200497~hmac%3D92d38b6df87010385b05b97d09b5e92f220305d32f66c936371edc67ae54f0a5&fbclid=IwAR1R6MVg5lxRKEsIm-Qj8FjbKWM02_U_nD3aYPfC0g8rnsZ0PcZsDxL49YA" />
        </div>
      </div>
    </div>
                
    <div class="py-32 px-4">
    <h2>Bài viết</h2>
    <div class="grid grid-cols-4 gap-8">
    
        ${posts
            .map(function (post) {
                return `<div>
                <h3>${post.title}</h3>
                <p>${post.content}</p>
            </div>`;
            })
            .join("")}
    </div>
             </div>
             <footer class="bg-white">
             <div class="container mx-auto px-8">
               <div class="w-full flex flex-col md:flex-row py-6">
                 <div class="flex-1 mb-6 text-black">
                   <a class="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                     <!--Icon from: http://www.potlabicons.com/ -->
                     <svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                       <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                       <path
                         class="plane-take-off"
                         d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                       />
                     </svg>
                     LANDING
                   </a>
                 </div>
                 <div class="flex-1">
                   <p class="uppercase text-gray-500 md:mb-6">Links</p>
                   <ul class="list-reset mb-6">
                     <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                       <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</a>
                     </li>
                     <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                       <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</a>
                     </li>
                     <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                       <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</a>
                     </li>
                   </ul>
                 </div>
                 <div class="flex-1">
                   <p class="uppercase text-gray-500 md:mb-6">Legal</p>
                   <ul class="list-reset mb-6">
                     <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                       <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>
                     </li>
                     <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                       <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>
                     </li>
                   </ul>
                 </div>
                 <div class="flex-1">
                   <p class="uppercase text-gray-500 md:mb-6">Social</p>
                   <ul class="list-reset mb-6">
                     <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                       <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
                     </li>
                     <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                       <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Linkedin</a>
                     </li>
                     <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                       <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</a>
                     </li>
                   </ul>
                 </div>
                 <div class="flex-1">
                   <p class="uppercase text-gray-500 md:mb-6">Company</p>
                   <ul class="list-reset mb-6">
                     <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                       <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Official Blog</a>
                     </li>
                     <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                       <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">About Us</a>
                     </li>
                     <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                       <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </footer>
            </div>
    `;
};

export default HomePage;
