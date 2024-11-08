<template>
   <button class="orange-gradient">
    <slot></slot>
   </button>
</template>

<style scoped>
button {
  height: 40px;
  color: white;
  font-size: 16px;
  padding-block: 5px;
  padding-inline: 25px;
  margin-top: 20px;
  border-radius: 20px;
  border: 2px solid hsla(0,0%,100%,.5);
  transition: 0.1s ease-in-out;
}

button:hover {
  transform: scale(1.05);
  border: 2px solid #171717;
}
</style>