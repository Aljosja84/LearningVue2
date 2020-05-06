Vue.component('menu-list', {
    props: ['items'],

    template: `
    <div>
        <ul>
            <li v-for="item in items" >
                <slot :item="item"></slot>
            </li>
        </ul>
    </div>
    `
});

new Vue({
    el: '#root'
});