<template>
    <div class="font-primary flex flex-col space-y-5 items-start w-full">
        <div class="flex flex-col space-y-3 items-start w-full">
            <div class="text-xs bg-gray-300 text-general p-1 px-3 rounded-md">
                <h1>{{ $route.params.id }}</h1>
            </div>
            <div class="flex flex-row w-full items-center justify-between">
                <div class="text-4xl text-main drop-shadow-md font-bold">
                    <h1>Terminal</h1>
                </div>
                <div>
                    <router-link :to="{ name: 'shells' }"
                        class=" text-base flex flex-row space-x-3  items-center hover:drop-shadow-md p-2 px-3 rounded-md bg-sub text-white">
                        <span class="material-symbols-outlined">
                            arrow_circle_left
                        </span>
                        <p>Back</p>
                    </router-link>
                </div>
            </div>
        </div>
        <hr class="w-full border-gray-200">
        <div class="w-full">
            <div id="terminal" class="w-full h-full"></div>
        </div>
    </div>
</template>
<script>
import { RunXtermJs } from '@/controllers/runXterm';
export default {
    data() {
        return {
            socket_id: undefined,
            shell_id: undefined,
            host: undefined,
            port: undefined,
            password: undefined,
        }
    },
    async mounted() {
        this.shell_id = this.$route.params.id;
        await fetch(`https://webapi.shellify.systems/api/shell-sessions/${this.shell_id}`, {
            headers:{
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res=>res.json()).then(data=>{
            this.port = data.data.container.port
            this.password = String(data.data.container.secret)
            this.host = String(data.data.server.publicip)
            console.log(this.host, this.port, this.password)
        })
        const runXtermJs = new RunXtermJs();
        runXtermJs.term.open(document.getElementById('terminal'));
        this.socket_id = runXtermJs.getSockId();
        runXtermJs.socket.emit("ssh_connection", this.host, this.port, 'root', this.password, this.socket_id)
        // runXtermJs.socket.emit("ssh_connection", '188.166.180.255', 32770, 'root', 'hello', this.socket_id)
        runXtermJs.runTerminal();
    },
}

</script>

<style>

.xterm {
  padding: 20px 10px 20px 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
}

.xterm-viewport{
  border-radius: 15px;
}

</style>