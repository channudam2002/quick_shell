<template>
    <div class="flex flex-col space-y-5 items-start w-full font-primary">
        <h1 class="text-4xl text-main drop-shadow-md font-bold">Dashboard</h1>
        <hr class="w-full border-gray-200">
        <div class="w-full grid lg:grid-cols-4 grid-cols-1 gap-4">
            <div class="w-full border-2 border-green-500 bg-green-100 text-green-500 p-3 px-6 rounded-md">
                <div class="flex flex-row justify-between items-center">
                    <div class="flex flex-col space-y-1 items-start justify-start">
                        <div class="text-base uppercase font-bold">
                            <p>Total</p>
                        </div>
                        <div class="text-3xl">
                            <p>Active Shells</p>
                        </div>
                    </div>
                    <div class="text-6xl self-center p-3 bg-green-500 text-white rounded-md">
                        <p>9</p>
                    </div>
                </div>
            </div>
            <div class="w-full border-2 border-blue-500 bg-blue-100 text-blue-500 p-3 px-6 rounded-md">
                <div class="flex flex-row justify-between items-center">
                    <div class="flex flex-col space-y-1 items-start justify-start">
                        <div class="text-base uppercase font-bold">
                            <p>Total</p>
                        </div>
                        <div class="text-3xl">
                            <p>Hosting Projects</p>
                        </div>
                    </div>
                    <div class="text-6xl self-center p-3 bg-blue-500 text-white rounded-md">
                        <p>9</p>
                    </div>
                </div>
            </div>
            <div class="w-full border-2 border-purple-500 bg-purple-100 text-purple-500 p-3 px-6 rounded-md">
                <div class="flex flex-row justify-between items-center">
                    <div class="flex flex-col space-y-1 items-start justify-start">
                        <div class="text-base uppercase font-bold">
                            <p>Total</p>
                        </div>
                        <div class="text-3xl">
                            <p>Time Spent (h)</p>
                        </div>
                    </div>
                    <div class="text-6xl self-center p-3 bg-purple-500 text-white rounded-md">
                        <p>9</p>
                    </div>
                </div>
            </div>
            <div class="w-full border-2 border-orange-500 bg-orange-100 text-orange-500 p-3 px-6 rounded-md">
                <div class="flex flex-row justify-between items-center">
                    <div class="flex flex-col space-y-1 items-start justify-start">
                        <div class="text-base uppercase font-bold">
                            <p>Total</p>
                        </div>
                        <div class="text-3xl">
                            <p>Paid ($)</p>
                        </div>
                    </div>
                    <div class="text-6xl self-center p-3 bg-orange-500 text-white rounded-md">
                        <p>9</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>