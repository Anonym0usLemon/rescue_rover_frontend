<script setup>
  import BaseButton from '@/components/UI/BaseButton.vue';
</script>

<template>
  <div class="login-form-container">
    <form class="login-form" @submit.prevent="onSubmit">
        <div class="navigation">
          <RouterLink to="/login" activeClass="active"><h2>Login</h2></RouterLink>
          <span>/</span>
          <RouterLink to="/register" activeClass="active"><h2>Register</h2></RouterLink>
        </div>

        <div class="form-controls">
            <input v-model="username" type="text" id="username" placeholder="Username"/>
            <input v-model="password" type="password" id="password" placeholder="Password"/>
            <BaseButton @click="login" class="orange-gradient">Login</BaseButton>
          </div>
     </form>
  </div>
</template>

<script>
export default {
    data() {
      return {
        username: '',
        password: ''
      }
    }, 
    methods: {
    login() {
      const username = this.username; 
      const password = this.password

      fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password, 
        })
      })
      .then(response => {
        // Check if the response is ok
        if (!response.ok) {
          return response.json().then(data => {
            throw new Error(data.error || 'Something went wrong');
          });
        }
        // Parse the JSON data if the response is successful
        return response.json();
      })
      .then(data => {
        // Handle successful login here
        console.log('Login successful:', data);
        // Example: Store the JWT token in localStorage or sessionStorage
        // localStorage.setItem('auth_token', data.token);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
      });

      this.username = '';
      this.password = ''; 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 16px;
}

.navigation a {
  text-decoration: none;
  color: #6d6d6d;
}

.active {
  color: #171717 !important;
}

.navigation span {
  font-weight: bold;
  color: #171717;
}

.login-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 10px;
  height: 320px;
  width: 300px;
  background-color: white;
  border-radius: 5px;
  padding: 25px;
}

.form-controls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.form-controls input[type="text"], .form-controls input[type="password"]  {
  height: 50px;
  border-radius: 3px ;
  border: 1px solid #d3d3d3;
  font-size: 16px;
  padding-left: 5px;
}

.form-controls input::placeholder {
  font-size: 16px;
}
</style>
