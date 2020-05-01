Vue.component('modal', {
   template: `
   <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <p>
                    <slot></slot>
                </p>
            </div>
            <!-- Any other Bulma elements you want -->
        </div>
        <button class="modal-close is-large" @click="$emit('close')" aria-label="close"></button>
    </div>
   `
});

new Vue({
    el: '#root',

    data: {
        showModal: false
    }
});