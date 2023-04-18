<template>
    <div class="flex flex-row items-center justify-center w-screen h-screen">
        <div class="w-1/2 flex flex-row items-center justify-center">
            <router-link :to="{name: 'home'}" class="absolute top-14 left-14 text-general flex flex-row items-center hover:drop-shadow-md">
                <span class="material-symbols-outlined">arrow_back_ios</span>
                <div>
                    <p>Back</p>
                </div>
            </router-link>
            <div class="flex flex-col space-y-5 items-start font-primary text-general">
                <div>
                    <p class="text-4xl font-bold text-main">Hey, Welcome back 👋</p>
                </div>
                <div>
                    <p>Welcome back! please enter your details. </p>
                </div>
                <div class="w-full">
                    <form class="space-y-6 w-full" @submit.prevent="singin">
                        <div class="w-full">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input type="email" v-model="email" name="email" id="email"
                                class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="name@gmail.com" required>
                        </div>
                        <div class="w-full">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                password</label>
                            <input type="password" v-model="password" name="password" id="password" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>
                        <div class="flex justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" type="checkbox" value=""
                                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                        >
                                </div>
                                <label for="remember"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                        </div>
                        <button type="submit"
                            class="w-full text-white bg-sub hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in
                            to your account</button>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <router-link :to="{name: 'sign-up'}" class="text-blue-700 hover:underline dark:text-blue-500">Create
                                account</router-link>
                        </div>
                    </form>
                </div>
            </div>
    </div>
    <div class="w-1/2 h-full">
        <div class="w-full h-full bg-[url('../assets/sign-in-img.jpg')] bg-center bg-cover"></div>
    </div>
</div></template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            email: undefined,
            password: undefined
        }
    },
    methods:{
        async singin(){
            // console.log(this.email, this.password)
            let body = {
                "email": this.email,
                "password": this.password,
                "notification_key": "test",
                "device_type": "laptop"
            }
            await axios.post(`https://webapi.shellify.systems/api/auth/login`, body, {
                headers:{
                    'Accept': 'application/json'
                }
            }).then(res=>{
                localStorage.setItem('user_name', res.data.user.name)
                localStorage.setItem('user_email', res.data.user.email)
                localStorage.setItem('user_profile', res.data.user.profile)
                localStorage.setItem("token", res.data.access_token);
            }).catch(err=>{
                console.log(err.message);
            })
            this.$router.push('/back-office');
        }
    }
}
</script>
