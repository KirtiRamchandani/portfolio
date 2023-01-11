<template>
  <div>
    <div class="home-screen">
      <div class="nav-option" @click="openKCloseHome()">
        <v-icon class="nav-icons-open" v-if="isHomeOpen"
          >mdi-folder-open</v-icon
        >
        <v-icon class="nav-icons" v-else>mdi-folder</v-icon>
        <p class="nav-title">Home</p>
      </div>
      <div class="nav-option" @click="openKCloseProjects()">
        <v-icon class="nav-icons-open" v-if="isProjectsOpen"
          >mdi-folder-open</v-icon
        >
        <v-icon class="nav-icons" v-else>mdi-folder</v-icon>
        <p class="nav-title">Projects</p>
      </div>
      <div class="nav-option" @click="openKCloseHonoursAndRewards()">
        <v-icon class="nav-icons-open" v-if="isHonoursAndRewardsOpen"
          >mdi-folder-open</v-icon
        >
        <v-icon class="nav-icons" v-else>mdi-folder</v-icon>
        <p class="nav-title">Honours</p>
      </div>
      <div class="nav-option" @click="openKClosePublications()">
        <v-icon class="nav-icons-open" v-if="isPublicationsOpen"
          >mdi-folder-open</v-icon
        >
        <v-icon class="nav-icons" v-else>mdi-folder</v-icon>
        <p class="nav-title">Publications</p>
      </div>
      <div class="nav-option" @click="openKCloseCVEs()">
        <v-icon class="nav-icons-open" v-if="isCVEOpen">mdi-folder-open</v-icon>
        <v-icon class="nav-icons" v-else>mdi-folder</v-icon>
        <p class="nav-title">CVEs</p>
      </div>
      <div class="nav-option" @click="openKCloseBlogs()">
        <v-icon class="nav-icons-open" v-if="isBlogsOpen"
          >mdi-folder-open</v-icon
        >
        <v-icon class="nav-icons" v-else>mdi-folder</v-icon>
        <p class="nav-title">Blogs</p>
      </div>
      <div class="nav-option" @click="openKCloseArtGallery()">
        <v-icon class="nav-icons-open" v-if="isArtGalleryOpen"
          >mdi-folder-open</v-icon
        >
        <v-icon class="nav-icons" v-else>mdi-folder</v-icon>
        <p class="nav-title">Art Gallery</p>
      </div>
    </div>
    <HomeModal v-if="isHomeOpen" />
    <ProjectsModal v-if="isProjectsOpen" />
    <HonoursAndRewardsModal v-if="isHonoursAndRewardsOpen" />
    <PublicationsModal v-if="isPublicationsOpen" />
    <ArtGalleryModal v-if="isArtGalleryOpen" />
  </div>
</template>

<script src="../scripts/IndexScreen.js"></script>

<style scoped src="../styles/IndexScreen.scss" lang="scss"></style>
