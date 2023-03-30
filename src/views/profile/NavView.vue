<template>
    <div class="w-screen py-3 sm:px-20 px-10 bg-white text-general flex flex-row items-center justify-between space-x-5 font-primary fixed top-0 left-0 z-50">
        <div id="logo" class="sm:w-32 w-24">
            <img src="../../assets/logo.png" alt="logo" class="w-full">
        </div>
        <div class="sm:hidden block">
            <span class="material-symbols-outlined bg-main p-1 rounded-md text-white">menu</span>
        </div>
        <div class="sm:flex flex-row space-x-32 items-center hidden">
            <div id="nav" class="flex flex-row space-x-10 items-center uppercase font-bold">
                <router-link :to="{name: 'back-office'}">
                    <div class="flex flex-row space-x-3 items-center rounded-md bg-main text-white p-3 px-5 hover:bg-sub hover:shadow-md hover:transition-all border-sub hover:drop-shadow-md">
                        <span class="material-symbols-outlined">dashboard</span>
                        <p>Dashboard</p>
                    </div>
                </router-link>
                <a href="#hero">
                    <div class="hover:border-b-2 border-sub hover:drop-shadow-md">
                        home
                    </div>
                </a>
                <a href="#features">
                    <div class="hover:border-b-2 border-sub hover:drop-shadow-md">
                        features
                    </div>
                </a>
                <a href="#pricings">
                    <div class="hover:border-b-2 border-sub hover:drop-shadow-md">
                        pricing
                    </div>
                </a>
                <router-link to="#">
                    <div class="hover:border rounded-md border-main p-3 hover:bg-main hover:text-white transition-all flex flex-row space-x-3 items-center">
                        <p>contact us</p>
                        <span class="material-symbols-outlined">contacts</span>
                    </div>
                </router-link>
            </div>
            <div class="flex flex-row space-x-5 items-center">
                <router-link :to="{name: 'sign-in'}">
                    <div class="hover:border-b-2 border-sub hover:drop-shadow-md">
                        Sign in
                    </div>
                </router-link>
                <div>
                    |
                </div>
                <router-link :to="{name: 'sign-up'}">
                    <div class="flex flex-row space-x-3 items-center hover:border-b-2 border-sub hover:drop-shadow-md">
                        <span class="material-symbols-outlined">app_registration</span>
                        <p>Register</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>