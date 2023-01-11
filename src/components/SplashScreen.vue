<template>
  <div :class="{ splash: true, fadeout: !isLoading }">
    <div class="container">
      <div class="avatar">
        <img src="../assets/artGalleryImages/avatar.png" alt="" />
      </div>
      <div class="progress">
        <div class="progress-value"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SplashScreen",
  props: ["isLoading"],
};
</script>

<style lang="scss" src="../styles/SplashScreen.scss"></style>
