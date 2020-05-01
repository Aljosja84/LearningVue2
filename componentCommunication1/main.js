Vue.component('coupon', {
    template: '<input placeholder="Enter coupon code" @blur="onCouponApplied">',

    methods: {
        onCouponApplied() {
            this.$emit('applied');
        }
    }
});

new Vue({
    el: '#root',

    methods: {
        onCouponApplied() {
            alert('It was applied!');
        }
    }
});

