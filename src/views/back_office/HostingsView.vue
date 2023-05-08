<template>
    <div class="relative flex flex-col space-y-5 items-start w-full font-primary">
        <h1 class="text-4xl text-main drop-shadow-md font-bold">Hostings</h1>
        <hr class="w-full border-gray-200">
        <div class="w-full p-3 flex flex-col space-y-5 items-center justify-center">
            <div class="w-full p-6 border rounded-md bg-neutral-100 shadow-md">
                <form class="grid grid-cols-4 gap-5" @submit.prevent="registerDomain">
                    <div>
                        <label for="first_name" class="text-general block mb-2 text-sm font-medium dark:text-white">Domain
                            name</label>
                        <input type="text" v-model="domainName" id="first_name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="custom domain" required>
                    </div>

                    <div class="flex items-end">
                        <input type="text" id="disabled-input" aria-label="disabled input"
                            class="text-center bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value=".client.shellify.systems" disabled>
                    </div>

                    <div>
                        <label for="countries" class="block mb-2 text-sm font-medium text-general dark:text-white">Selecta
                            Shell session</label>
                        <select v-model="selectedSession" id="countries"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected :value="undefined">Choose a session</option>
                            <option v-if="sessions != undefined" v-for="session in sessions"
                                :value="session.domain == null ? session : undefined" :v-if="session.domain == null">
                                <div v-if="session.domain == null">
                                    {{ session.publicip }}
                                </div>
                                <div v-else>
                                    {{ session.publicip }} (Aready existed)
                                </div>
                            </option>
                        </select>
                    </div>

                    <div class="flex items-end justify-start">
                        <button type="submit" class="py-2 px-3 text-white hover:shadow-md bg-sub rounded-md">Register
                            Domain
                        </button>
                    </div>
                </form>
            </div>
            <div class="w-full flex flex-col space-y-3 items-start text-main drop-shadow-md text-xl">
                <p>Available Hostings</p>
                <hr class="w-full">
            </div>
            <div class="w-full grid grid-cols-3 gap-5" v-for="shellSession in sessions" :key="shellSession.id"
                v-if="!isLoading">
                <div v-if="shellSession && shellSession.is_removed == 0 && shellSession.domain != null"
                    class="w-full p-3 bg-white text-general shadow-md rounded-md hover:bg-general hover:text-white group">
                    <div
                        class="border border-dashed p-3 rounded-md border-general flex flex-row space-x-3 items-center justify-start group-hover:border-white w-full">
                        <div class="flex flex-col space-y-3 items-start w-full">
                            <p class="flex flex-row space-x-3 items-center"><span
                                    class="material-symbols-outlined">language</span> <span>{{ shellSession.domain
                                    }}.client.shellify.systems</span>
                            </p>
                            <p class="flex flex-row space-x-3 items-center"><span
                                    class="material-symbols-outlined">door_open</span> <span>{{ shellSession.port }}</span>
                            </p>
                            <div class="flex flex-row space-x-3 items-center self-end">
                                <p @click="deleteDomain(shellSession.domain)"
                                    class=" cursor-pointer flex flex-row space-x-3 items-center self-end p-1 rounded-md text-general bg-gray-100 px-3 hover:bg-red-100 hover:text-red-500">
                                    <span class="material-symbols-outlined">delete</span>
                                </p>
                                <p @click="showModel = !showModel"
                                    class="cursor-pointer  flex flex-row space-x-3 items-center self-end p-1 rounded-md bg-orange-100 px-3 group-hover:text-general">
                                    <span class="w-3 h-3 rounded-full bg-orange-700"></span> <span
                                        class="text-orange-500"><button type="button" data-modal-toggle="staticModal">Point
                                            my domain</button></span>
                                </p>
                            </div>
                            <div class="w-full flex flex-row space-x-3 items-center justify-end" v-if="showModel">
                                <input type="text" class="text-gray-900 w-4/6 py-2 px-3 rounded-md">
                                <div class="flex items-end justify-start">
                                    <button class="py-2 px-3 text-white hover:shadow-md bg-orange-500 rounded-md">Point
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex items-center justify-center p-10" v-if="isLoading">
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
    </div>
    <!-- <div @click.self="showModel = false"
        class="w-screen h-screen bg-black bg-opacity-50 absolute top-0 left-0 flex flex-row items-center justify-center z-50"
        v-if="showModel">
        <div class="font-primary min-w-max bg-white rounded-md p-6 flex flex-col space-y-3 items-start">
            <div class="text-xl text-main drop-shadow-md flex flex-row justify-between items-center w-full">
                <p>Point my domian</p>
                <span @click="showModel=false" class="material-symbols-outlined text-xs hover:text-red-500 cursor-pointer">cancel</span>
            </div>
            <hr class="w-full">
            <div class="flex flex-row space-x-3 items-center">
                <input type="text" v-model="domainName" id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="your domain name" required>
                <div class="flex items-end justify-start">
                    <button class="py-2 px-3 text-white hover:shadow-md bg-orange-500 rounded-md">Point
                    </button>
                </div>
            </div>
        </div>
    </div> -->
</template>
<script>
import router from '@/router';
import axios from 'axios';
export default {
    data() {
        return {
            sessions: undefined,
            selectedSession: undefined,
            domainName: undefined,
            isLoading: false,
            showModel: false
        }
    },
    mounted() {
        this.isLoading = true;
        setTimeout(() => {
            axios.get('https://webapi.shellify.systems/api/auth/user-profile', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(data => {
                this.sessions = data.data.data.sessions
            }).catch(err => {
                console.log(err.message);
            }).finally(() => {
                this.isLoading = false;
            })
        }, 10)
    },
    methods: {
        async registerDomain() {
            if (this.selectedSession != undefined) {
                this.isLoading = true;
                await axios.post('https://webapi.shellify.systems/api/register_dns_record_forward', {
                    domain: this.domainName,
                    port: this.selectedSession.port,
                    publicip: this.selectedSession.publicip,
                    container_id: this.selectedSession.container_id
                }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }).then(data => {
                    console.log(data);
                }).catch(err => {
                    console.log(err.message);
                }).finally(() => {
                    router.go();
                    this.selectedSession = undefined,
                        this.domainName = undefined
                })
            }
        },
        async deleteDomain(domain) {
            this.isLoading = true
            axios.delete(`https://webapi.shellify.systems/api/delete_dns_record?domain=${domain}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(data => {
                console.log(data);
            }).catch(err => {
                console.log(err.message);
            }).finally(() => {
                router.go();
            })
        },
        pointDomain() {
            console.log('yes')
        }
    }
}
</script>