<template>
    <div class="font-primary flex flex-col space-y-5 items-start w-full">
        <h1 class="text-4xl text-main drop-shadow-md font-bold">Shells</h1>
        <hr class="w-full border-gray-200">
        <div class="w-full grid lg:grid-cols-4 grid-cols-1 gap-4 items-center" v-if="shellSessions && !isLoading">
            <div v-for="shellSession in shellSessions" :key="shellSession.id">
                <div v-if="shellSession && shellSession.is_removed == 0"
                    class="p-3 bg-white text-general shadow-md rounded-md hover:bg-general hover:text-white group cursor-pointer">
                    <div
                        class="border border-dashed p-3 rounded-md border-general flex flex-row space-x-3 items-center justify-start group-hover:border-white w-full">
                        <div class="flex flex-col space-y-3 items-start w-full" @click.self="goToTerminal(shellSession.id)">
                            <p class="flex flex-row space-x-3 items-center"><span
                                    class="material-symbols-outlined">language</span> <span>{{ shellSession.publicip
                                    }}</span>
                            </p>
                            <p class="flex flex-row space-x-3 items-center"><span
                                    class="material-symbols-outlined">door_open</span> <span>{{ shellSession.port }}</span>
                            </p>
                            <div class="flex flex-row space-x-3 items-center self-end">
                                <p @click="deleteShell(shellSession.id)"
                                    class="flex flex-row space-x-3 items-center self-end p-1 rounded-md text-general bg-gray-100 px-3 hover:bg-red-100 hover:text-red-500">
                                    <span class="material-symbols-outlined">delete</span>
                                </p>
                                <p
                                    class="flex flex-row space-x-3 items-center self-end p-1 rounded-md bg-green-100 px-3 group-hover:text-general">
                                    <span class="w-3 h-3 rounded-full bg-green-700"></span> <span
                                        class="text-green-500">Active</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div @click="createNewShell"
                class="p-3 h-full bg-white text-general shadow-md rounded-md hover:bg-general hover:text-white group cursor-pointer">
                <div
                    class="border h-full border-dashed p-3 rounded-md border-general flex flex-row space-x-3 items-center justify-center group-hover:border-white">
                    <span class="material-symbols-outlined">add_circle</span>
                    <div>
                        <p>Add new shell</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isLoading" class="w-full flex flex-row justify-center p-5">
            <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor" />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
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
            shellSessions: [],
            isLoading: false
        }
    },
    mounted() {
        this.isLoading = true;
        setTimeout(() => {
            fetch("https://webapi.shellify.systems/api/auth/user-profile", {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => res.json())
                .then(data => {
                    // console.log(data.data.sessions);
                    if (data.data.sessions) {
                        data.data.sessions.forEach(shellSession => {
                            if (shellSession.is_removed != 1) {
                                this.shellSessions.push(shellSession);
                            }
                        })
                    }
                    this.isLoading = false;
                })
        }, 10);
    },
    methods: {
        createNewShell() {
            axios.post("https://webapi.shellify.systems/api/shell-sessions", {}, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(data => {
                router.go();
            }).catch(err => console.log(err.message))
        },
        deleteShell(id) {
            if (confirm('Are you sure to delete this session?')) {
                axios.delete(`https://webapi.shellify.systems/api/shell-sessions/${id}`, {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }).then(data => {
                    // router.go()
                }).catch(err => {
                    console.log(err.message)
                }).finally(()=>{
                    router.go();
                });
            }
        },
        goToTerminal(id) {
            router.push('/shells/terminal/' + id)
        },
    }
}
</script>