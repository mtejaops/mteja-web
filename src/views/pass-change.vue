<template>
  <div class="h-100">
      <div class="container">
          <div class="flex items-center column mt-3">
            <h2 class="has-text-black-bis is-size-4 is-family-primary">Change password</h2>
            <hr>
            <PassForm/>
          </div>
      </div>
  </div>
</template>

<script>
import PassForm from "@/components/pwd-change-form.vue";

export default {
    name: "PassChange",
    components: {
        PassForm
    }
}
</script>

<style>

</style>