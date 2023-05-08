<template>
    <div class="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 font-primary">
        <div class="px-4 py-3" role="none">
            <p class="text-sm text-gray-900 dark:text-white" role="none" v-if="userInfo">
                {{userInfo.name}}
            </p>
            <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none" v-if="userInfo">
                {{userInfo.email}}
            </p>
        </div>
        <ul class="py-1" role="none">
            <li>
                <router-link :to="{name : 'account'}"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">Profile</router-link>
            </li>
            <li>
                <router-link :to="{name : 'home'}"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">Settings</router-link>
            </li>
            <li>
                <a type="button" @click="signout"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                    role="menuitem">Sign out</a>
            </li>
        </ul>
    </div>
</template>
<script>
import router from '@/router';
import axios from 'axios';
export default {
    data(){
        return{
            visible: false,
            userInfo: undefined
        }
    },
    mounted(){
        axios.get(`https://webapi.shellify.systems/api/auth/user-profile`, {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }).then(res => {
                    // console.log('Yes')
                }).catch(err=>{
                    if(err.message == 'Request failed with status code 401'){
                        localStorage.clear();
                        router.go();
                    }
                //    console.log(err.message)
                })
        this.userInfo = {
            name: localStorage.getItem('user_name'),
            email: localStorage.getItem('user_email'),
            profile_img: localStorage.getItem('user_profile'),
        }
    },
    methods:{
        signout(){
            localStorage.removeItem('token');
            this.$router.push('/sign-in');
        }
    }
}
</script>