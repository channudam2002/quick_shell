<template>
    <div class="flex flex-row items-center justify-center w-screen h-screen">
        <div class="w-1/2 h-full">
            <div class="w-full h-full bg-[url('../assets/sign-up-img.jpg')] bg-center bg-cover"></div>
        </div>
        <div class=" w-1/2 flex flex-row items-center justify-center">
            <router-link :to="{ name: 'home' }"
                class="absolute top-14 right-14 text-general flex flex-row items-center hover:drop-shadow-md">
                <span class="material-symbols-outlined">arrow_back_ios</span>
                <div>
                    <p>Back</p>
                </div>
            </router-link>
            <div class="flex flex-col space-y-5 font-primary text-general items-center">
                <div class="text-3xl text-main font-bold">
                    Check your email to verify your account
                </div>
               <router-link to="/sign-in" class="text-white bg-sub px-10 p-3 rounded-md hover:shadow-md">
                    <p>Sign in</p>
               </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>