<template>
    <div class="font-primary flex flex-col space-y-5 items-start w-full">
        <h1 class="text-4xl text-main drop-shadow-md font-bold">Shells</h1>
        <hr class="w-full border-gray-200">
        <div class="w-full grid grid-cols-4 gap-4">
            <div class="p-3 bg-white text-general shadow-md rounded-md hover:bg-general hover:text-white group cursor-pointer">
                <div class="border border-dashed p-3 rounded-md border-general flex flex-row space-x-3 items-center justify-center group-hover:border-white">
                    <span class="material-symbols-outlined">add_circle</span>
                    <div><p>Add new shell</p></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>