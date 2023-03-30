<template>
    <div class="w-screen py-3 px-20 bg-white text-general flex flex-row items-center justify-between space-x-5 font-primary sticky top-0 left-0 z-50">
        <div id="logo" class="w-32">
            <img src="../../assets/logo.png" alt="logo" class="w-full">
        </div>
        <div class="flex flex-row space-x-32 items-center">
            <div id="nav" class="flex flex-row space-x-10 items-center uppercase font-bold">
                <router-link to="#">
                    <div class="rounded-md bg-main text-white p-3 px-5 hover:bg-sub hover:shadow-md hover:transition-all border-sub hover:drop-shadow-md">
                        Dashboard
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
                <router-link to="#">
                    <div class="hover:border-b-2 border-sub hover:drop-shadow-md">
                        pricing
                    </div>
                </router-link>
                <router-link to="#">
                    <div class="hover:border rounded-md border-main p-3 hover:bg-main hover:text-white transition-all flex flex-row space-x-3 items-center">
                        <p>contact us</p>
                        <span class="material-symbols-outlined">contacts</span>
                    </div>
                </router-link>
            </div>
            <div class="flex flex-row space-x-5 items-center">
                <router-link to="#">
                    <div class="hover:border-b-2 border-sub hover:drop-shadow-md">
                        Sign in
                    </div>
                </router-link>
                <div>
                    |
                </div>
                <router-link to="#">
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