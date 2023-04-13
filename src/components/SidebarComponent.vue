<template>
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 font-primary">
        <ul class="space-y-2 font-medium">
            <li>
                <router-link :to="{name: 'home'}"
                    class="flex items-center p-2 text-general rounded-lg dark:text-white hover:bg-gray-100 hover:shadow-md dark:hover:bg-gray-700">
                    <span class="material-symbols-outlined">dashboard</span>
                    <span class="ml-3">Dashboard</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'home'}"
                    class="flex items-center p-2 text-general rounded-lg dark:text-white hover:bg-gray-100 hover:shadow-md dark:hover:bg-gray-700">
                    <span class="material-symbols-outlined">language</span>
                    <span class="flex-1 ml-3 whitespace-nowrap">Hosting</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'shells'}"
                    class="flex items-center p-2 text-general rounded-lg dark:text-white hover:bg-gray-100 hover:shadow-md dark:hover:bg-gray-700">
                    <span class="material-symbols-outlined">terminal</span>
                    <span class="flex-1 ml-3 whitespace-nowrap">Shells</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'account'}"
                    class="flex items-center p-2 text-general rounded-lg dark:text-white hover:bg-gray-100 hover:shadow-md dark:hover:bg-gray-700">
                    <span class="material-symbols-outlined">person</span>
                    <span class="flex-1 ml-3 whitespace-nowrap">Account</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'home'}"
                    class="flex items-center p-2 text-general rounded-lg dark:text-white hover:bg-gray-100 hover:shadow-md dark:hover:bg-gray-700">
                    <span class="material-symbols-outlined">credit_card</span>
                    <span class="flex-1 ml-3 whitespace-nowrap">Payment</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'home'}"
                    class="flex items-center p-2 text-general rounded-lg dark:text-white hover:bg-gray-100 hover:shadow-md dark:hover:bg-gray-700">
                    <span class="material-symbols-outlined">settings</span>
                    <span class="flex-1 ml-3 whitespace-nowrap">Settings</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {

}
</script>