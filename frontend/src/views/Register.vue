<template>
  <div class="register">
      <SignUp />
  </div>
</template>

<script>
// @ is an alias to /src
import SignUp from '@/components/SignUp.vue'

export default {
   name: 'Register',
  components: {
    SignUp,
  }
};
</script>
