<template>
    <div class="min-w-screen min-h-screen flex flex-col">
        <NavView></NavView>
        <HeroView></HeroView>
        <FeaturesView></FeaturesView>
        <PricingsView></PricingsView>
    </div>
</template>
<script>
import NavView from './NavView.vue';
import HeroView from './HeroView.vue';
import FeaturesView from './FeaturesView.vue';
import PricingsView from './PricingsView.vue';
export default {
    components: {
        NavView,
        HeroView,
        FeaturesView,
        PricingsView,
    }
}
</script>