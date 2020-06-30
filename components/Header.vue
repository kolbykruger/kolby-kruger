<template>
    <header class="header">
        <div class="container">
            <div class="group">
                <button @click="toggleNavigation">
                    <svg viewBox="0 0 95 25">
                        <circle cx="10" cy="15" r="6"/>
                        <circle cx="35" cy="15" r="6"/>
                        <circle cx="60" cy="15" r="6"/>
                        <circle cx="85" cy="15" r="6"/>
                    </svg>
                </button>
            </div>
        </div>
        <Navigation :status="navigation"/>
    </header>
</template>

<script>
import Navigation from '~/components/Navigation.vue';

export default {
    name: 'Header',
    data() {
        return {
            navigation: false,
        }
    },
    components: {
        Navigation
    },
    methods: {
        toggleNavigation() {
            this.navigation = !this.navigation;
		},
	},
	watch: {
        '$route' () {
            this.navigation = false
        }
    }
}
</script>