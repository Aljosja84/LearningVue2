Vue.component('tabs', {
   template: `
   <div>
       <div class="tabs">
          <ul>
            <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive}">
                <a href="#" @click="selectTab(tab)">{{ tab.name }}</a>
            </li>
          </ul>
        </div>
        
       <div class="tab-content">
            <slot></slot>
       </div>
    </div>
   `,

    methods: {
       selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    },

    data() {
       return {
           tabs: []
       };
    },

    created() {
       this.tabs = this.$children;
    }
});

Vue.component('tab', {
    template: `
        <div v-show="isActive"><slot></slot></div>
    `,

    props: {
        name: { required: true },
        selected: { default: false }

    },

    data() {
        return {
            isActive: false
        }
    },

    mounted() {
        this.isActive = this.selected;
    }
});

new Vue({
    el: '#root'
});