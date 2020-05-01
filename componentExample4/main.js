Vue.component('message', {
    template:
        `
        <div>
            <b><slot></slot></b>
            <p>
                <i>{{ title }}</i>
            </p>
            <p>
                {{ wablief }}
            </p>
        </div>
        `,
    props: ['title'],

    data() {
        return {
            wablief: "ik hoor je niet hoor?"
        }
    }


});

new Vue({
    el: '#root'
});