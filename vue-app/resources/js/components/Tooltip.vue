<template>
    <div>
        <div ref="body" v-show="false">
            <slot></slot>
        </div>
    </div>

</template>

<script>
    import PopperTooltip from 'tooltip.js';

    export default {
        name: "Tooltip",
        props: {
            name: {}
        },

        mounted() {
            document
                .querySelectorAll(`[data-tooltip-name=${this.name}]`)
                .forEach(elem => {
                    new PopperTooltip(elem, {
                        placement: 'left',
                        title: this.$refs.body.innerHTML,
                        html: true
                    });
                });

        }
    };
</script>

<style scoped>

</style>
