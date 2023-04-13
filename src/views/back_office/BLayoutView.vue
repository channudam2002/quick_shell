<template>
    <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 font-primary">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start">
                    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
                        type="button"
                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" fill-rule="evenodd"
                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                            </path>
                        </svg>
                    </button>
                    <router-link :to="{name: 'home'}" class="flex ml-2 md:mr-24">
                        <img src="../../assets/logo.png" class="h-8 mr-3" alt="FlowBite Logo" />
                        <span
                            class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"><span class="text-main">Shellify</span> <span class="text-xs">by Quickshell</span></span>
                    </router-link>
                </div>
                <div class="flex items-center">
                    <div class="flex items-center relative">
                        <div>
                            <button type="button" @click="userDropDownClicked"
                                class="flex flex-row space-x-3 items-center text-sm rounded-full hover:shadow-md focus:shadow-md p-1 px-3">
                                <span class="sr-only">Open user menu</span>
                                <img class="w-8 h-8 rounded-full" v-if="userInfo"
                                    :src="userInfo.profile_img" alt="user photo">
                                <p v-if="userInfo">{{ userInfo.name }}</p>
                            </button>
                        </div>
                        <div v-show="userDropDownVisible" class="top-8 absolute right-1">
                            <UserinfoDropdownComponent></UserinfoDropdownComponent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <aside id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar">
        <SidebarComponent></SidebarComponent>
    </aside>

<div class="p-4 sm:ml-64">
    <ContentComponent></ContentComponent>
</div>
</template>
<script>
import SidebarComponent from '../../components/SidebarComponent.vue';
import ContentComponent from '../../components/ContentComponent.vue';
import UserinfoDropdownComponent from '../../components/UserinfoDropdownComponent.vue';
export default {
    data(){
        return{
            userInfo: undefined,
            userDropDownVisible: false
        }
    },
    components:{
        SidebarComponent,
        ContentComponent,
        UserinfoDropdownComponent,
    },
    mounted() {
        this.userInfo = {
            profile_img: localStorage.getItem('user_profile'),
            name: localStorage.getItem('user_name')
        }
        console.log(this.userInfo.profile_img)
    },
    methods:{
        userDropDownClicked(){
            this.userDropDownVisible = ! this.userDropDownVisible
        }
    }
}
</script>