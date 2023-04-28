<template>
    <div class="absolute bottom-6 right-6 max-w-max text-white bg-green-700 rounded-md">
        <div class="flex flex-row space-x-3 items-center p-3">
            <span class="material-symbols-outlined">check_circle</span>
            <div>
                <p>Your action is completeted</p>
            </div>
            <span class="material-symbols-outlined cursor-pointer" @close="closeFlash">close</span>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        closeFlash(){
            this.$emit('closeFlash');
        }
    }
}
</script>