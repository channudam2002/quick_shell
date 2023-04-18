<template>
    <form @submit.prevent="changePass()" class="flex flex-row space-x-5 items-center font-primary">
        <div class="relative z-0">
            <input v-model="new_pass" required type="text" id="floating_standard"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " />
            <label for="floating_standard"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">New Password</label>
        </div>
        <div class="relative z-0">
            <input v-model="new_pass_confirm" required type="text" id="floating_standard"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " />
            <label for="floating_standard"
                class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm New Password</label>
        </div>
        <button type="submit" class="bg-sub text-white py-2 px-3 rounded-md">
            Confirm
        </button>
    </form>
</template>
<script>
import router from '@/router';
import axios from 'axios';
export default {
    props:[
        'user_id'
    ],
    data(){
        return{
            new_pass: undefined,
            new_pass_confirm: undefined
        }
    },
    methods:{
        changePass(){
            let body = {
                "user_id" : this.user_id,
                "password": this.new_pass,
                "password_confirmation" : this.new_pass_confirm
            }
            console.log(body)
            axios.post("https://webapi.shellify.systems/api/auth/reset-password", body, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(data=>{
                localStorage.removeItem('token');
                router.push("/sign-in")
            })
        }
    }
}
</script>