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
            <div class="flex flex-col space-y-5 items-start font-primary text-general">
                <div>
                    <p class="text-4xl font-bold text-main">Welcome to <span class="text-sub">Shellify</span> 🤗 </p>
                </div>
                <div>
                    <p>Please enter your details to create an account.</p>
                </div>
                <div class="w-full">
                    <form class="space-y-6 w-full" @submit.prevent="signup">
                        <div class="w-full">
                            <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                username</label>
                            <input type="username" v-model="username" name="username" id="username"
                                class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="username" required>
                        </div>
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
                        <div class="w-full">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                confirm password</label>
                            <input type="password" v-model="confirm_password" name="confirm_password" id="confirm_password"
                                placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>
                        <button type="submit"
                            class="w-full text-white bg-sub hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign
                            in
                            to your account</button>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Already registered? <router-link :to="{ name: 'sign-in' }"
                                class="text-blue-700 hover:underline dark:text-blue-500">Sign in</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import router from '@/router'
import axios from 'axios'
export default {
    data() {
        return {
            username: undefined,
            email: undefined,
            password: undefined,
            confirm_password: undefined
        }
    },
    methods: {
        signup() {
            // console.log(this.email, this.password, this.username)
            let body = {
                "name": this.username,
                "email": this.email,
                "password": this.password,
                "password_confirmation": this.confirm_password
            }
            try {
                axios.post(`http://104.248.153.37:8000/api/auth/register`, body, {
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(res => {
                    // console.log(res)
                    router.push("/verify")
                }).catch(err=>{
                    alert(err.response.data.message)
                })
            }catch(err){
                console.log(err.message)
            }
        }
    }
}
</script>