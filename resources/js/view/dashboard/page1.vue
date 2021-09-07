<template>
  <div>
    {{message}}
    <div>
      <h2 style="background: red;" class="hello">hello</h2>
    </div>
  </div>
</template>
<script>
const default_layout = "default";


export default {
  computed: {},
  data() {
      return {
          message:'Hello page 1'
      }
  }
};
</script>