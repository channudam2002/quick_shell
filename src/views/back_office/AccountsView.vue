<template>
    <div class="font-primary flex flex-col space-y-5 items-start w-full">
        <h1 class="text-4xl text-main drop-shadow-md font-bold">Account</h1>
        <hr class="w-full border-gray-200">
        <div class="w-full flex flex-row space-x-3 items-start justify-between" v-if="user">
            <div class="w-1/2 flex flex-col space-y-5 items-start text-general">
                <div class="flex flex-row items-center space-x-3">
                    <span class="material-symbols-outlined">person</span> 
                    <p>Account name: <span class="p-1 px-3 bg-gray-100 text-main  rounded-md">{{ user.name }}</span></p>
                </div>
                <div class="flex flex-row items-center space-x-3">
                    <span class="material-symbols-outlined">mail</span> 
                    <p>Account email: <span class="p-1 px-3 bg-gray-100 text-main   rounded-md">{{ user.email }}</span></p>
                </div>
                <div class="flex flex-row items-center space-x-3">
                    <span class="material-symbols-outlined">calendar_month</span> 
                    <p>Account created at: <span class="p-1 px-3 bg-gray-100 text-main   rounded-md">{{ user.created_at }}</span></p>
                </div>
                <div class="flex flex-row items-center space-x-3 bg-blue-100 text-blue-500 hover:shadow-md rounded-md p-2 px-3 cursor-pointer hover:shadow-blue-300" @click="resetPassword=!resetPassword">
                    <span class="material-symbols-outlined">key</span> 
                    <p>Change password</p>
                </div>
                <div class="w-full" v-if="resetPassword">
                    <ResetPasswordComponent :user_id="user.id"></ResetPasswordComponent>
                </div>
            </div>
            <div class="w-1/2">
                <img :src="user.profile" alt="user-profile-img" class="w-1/4" >
            </div>
        </div>
    </div>
</template>
<script>
import ResetPasswordComponent from "../../components/ResetPasswordComponent.vue"
export default {
    components: {
        ResetPasswordComponent,
    },
    data(){
        return{
            user: undefined,
            resetPassword: false
        }
    },
    mounted(){
        fetch("https://webapi.shellify.systems/api/auth/user-profile", {
            headers:{
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res=>res.json()).then(data=>{
            // console.log(data)
            this.user = data.data
        })
    }
}
</script>