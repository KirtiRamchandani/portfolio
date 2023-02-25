<template>
  <div>
    <div class="home-screen">
      <div class="nav-tray">
        <div class="nav-option" @click="openKCloseHome()">
          <folder-open
            v-if="isHomeOpen"
            :style="`--element-color: #c7c7bb`"
          ></folder-open>
          <folder-close
            v-else
            :style="`--element-color: #c7c7bb`"
          ></folder-close>
          <p class="nav-title">Home</p>
        </div>
        <div class="nav-option" @click="openKCloseProjects()">
          <folder-open
            v-if="isProjectsOpen"
            :style="`--element-color: #c9c2ea`"
          ></folder-open>
          <folder-close
            v-else
            :style="`--element-color: #c9c2ea`"
          ></folder-close>
          <p class="nav-title">Projects</p>
        </div>
        <div class="nav-option" @click="openKCloseHonoursAndRewards()">
          <folder-open
            v-if="isHonoursAndRewardsOpen"
            :style="`--element-color: #f0caa3`"
          ></folder-open>
          <folder-close
            v-else
            :style="`--element-color: #f0caa3`"
          ></folder-close>
          <p class="nav-title">Honours</p>
        </div>
        <div class="nav-option" @click="openKCloseCVEs()">
          <folder-open
            v-if="isCVEOpen"
            :style="`--element-color: #cae8d7`"
          ></folder-open>
          <folder-close
            v-else
            :style="`--element-color: #cae8d7`"
          ></folder-close>
          <p class="nav-title">CVEs</p>
        </div>
        <!-- <div class="nav-option" @click="openKCloseBlogs()">
        <folder-open
          v-if="isBlogsOpen"
          :style="`--element-color: #f3d4d1`"
        ></folder-open>
        <folder-close v-else :style="`--element-color: #f3d4d1`"></folder-close>
        <p class="nav-title">Blogs</p>
      </div> -->
        <div class="nav-option" @click="openKCloseArtGallery()">
          <folder-open
            v-if="isArtGalleryOpen"
            :style="`--element-color: #b5f0cb`"
          ></folder-open>
          <folder-close
            v-else
            :style="`--element-color: #b5f0cb`"
          ></folder-close>
          <p class="nav-title">Art Gallery</p>
        </div>
      </div>
    </div>
    <HomeModal v-if="isHomeOpen" />
    <ProjectsModal v-if="isProjectsOpen" />
    <HonoursAndPublicationsModal v-if="isHonoursAndRewardsOpen" />
    <PublicationsModal v-if="isPublicationsOpen" />
    <ArtGalleryModal v-show="isArtGalleryOpen" ref="artGallery" />
    <BlogsModal v-show="isBlogsOpen" ref="blogsModal" />
    <CVEModal v-if="isCVEOpen" />
  </div>
</template>

<script src="../scripts/IndexScreen.js"></script>

<style scoped src="../styles/IndexScreen.scss" lang="scss"></style>
