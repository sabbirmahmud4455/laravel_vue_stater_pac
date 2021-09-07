<template>
  <div>
    <div>
		{{message}}

		<router-link :to="{name:'page1'}">page 1</router-link>
		<router-link :to="{name:'page2'}">page 2</router-link>


    <Layout></Layout>


    <router-view></router-view>

		
	</div>
  </div>
</template>
<script>
const default_layout = "default";

import  Layout from './components/Backend/layout.vue';

export default {
  computed: {},
  data() {
      return {
          message:'Hello World'
      }
  },
  components:{
    Layout
  }
};
</script>