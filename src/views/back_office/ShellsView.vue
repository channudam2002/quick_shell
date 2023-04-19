<template>
    <div class="font-primary flex flex-col space-y-5 items-start w-full">
        <h1 class="text-4xl text-main drop-shadow-md font-bold">Shells</h1>
        <hr class="w-full border-gray-200">
        <div class="w-full grid lg:grid-cols-4 grid-cols-1 gap-4 items-center">
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
    </div>
</template>
<script>
import router from '@/router'
import axios from 'axios'
export default {
    data() {
        return {
            shellSessions: []
        }
    },
    mounted() {
        fetch("http://104.248.153.37:8000/api/auth/user-profile", {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then(data => {
                // console.log(data.data.sessions);
                data.data.sessions.forEach(shellSession=>{
                    if(shellSession.is_removed != 1){
                        this.shellSessions.push(shellSession);
                    }
                })
            })
    },
    methods: {
        createNewShell() {
            axios.post("http://104.248.153.37:8000/api/shell-sessions", {}, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(data => {
                router.go()
            }).catch(err=>console.log(err.message))
        },
        deleteShell(id){
            axios.delete(`http://104.248.153.37:8000/api/shell-sessions/${id}`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(data => {
                router.go()
            })
        },
        goToTerminal(id){
            router.push('/shells/terminal/' + id)
        }
    }
}
</script>