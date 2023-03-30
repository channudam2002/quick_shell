<template>
    <div id="hero" class="w-screen h-screen flex flex-row items-center justify-between px-32">
        <div class="flex flex-col space-y-10">
            <div class="flex flex-col space-y-5 items-start justify-center">
                <div class="text-6xl font-primary text-main font-bold">
                    <p><span class="text-3xl text-sub">Host your projects</span> <br> in few tips of finger</p>
                </div>
                <div class=" border-l-8 border-sub font-primary text-general px-3 text-xl">
                    <p>QuickShell makes a FREE online hosting easily for student. <br> With hybrid controll and customize.
                    </p>
                </div>
            </div>
            <div class="flex flex-col space-y-5 items-start font-primary text-general text-xl w-fit">
                <p>Drop your email in waiting list. 🚀</p>
                <div class="w-full flex flex-row space-x-3 items-center">
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                        </div>
                        <input type="text" id="input-group-1"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="your email here">
                    </div>  
                    <div>
                        <button class="py-2 px-4 text-center text-white bg-sub rounded-md text-base" type="submit"><p>Subscribe</p></button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <img src="../../assets/hero-img.png" alt="hero-img" class="w-3/4 drop-shadow-lg">
        </div>
    </div>
</template>