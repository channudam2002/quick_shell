<template>
    <div class="min-w-screen min-h-screen relative">
        <NavView></NavView>
        <HeroView></HeroView>
        <FeaturesView></FeaturesView>
    </div>
</template>
<script>
import NavView from './NavView.vue';
import HeroView from './HeroView.vue';
import FeaturesView from './FeaturesView.vue';
export default {
    components: {
        NavView,
        HeroView,
        FeaturesView
    }
}
</script>