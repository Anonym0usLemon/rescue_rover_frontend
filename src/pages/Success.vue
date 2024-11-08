<script setup>
import BaseButton from '@/components/UI/BaseButton.vue';
</script>

<template>
   <section>
      <div class="card">
         <h2>Account Created Successfully! Welcome to Rescue Rover!</h2>
         <p>
            Congratulations, you're all set up! Your account is now ready to help you find the perfect furry companion.
            Browse through our list of adoptable dogs, connect with shelters, and start your journey towards giving a dog a home!
         </p>
         <p>Ready to meet your new best friend? Let's get started!</p>
         <RouterLink to="/login"><BaseButton>Login</BaseButton></RouterLink>
      </div>
   </section>
</template>

<style scoped>
   section {
      width: 100%;
      margin-top: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .card {
      background-color: white;
      border-radius: 5px;
      padding: 25px;
      padding-inline: 50px;
      width: 600px;
      text-align: center;
   }
</style>