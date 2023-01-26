<template>
  <div class="modal">
    <div class="modal-header">
      <span class="modal-icon close" @click="closeBlogsModal()"></span>
      <span class="modal-icon"></span>
      <span class="modal-icon"></span>
      <button
        class="back-arrow"
        @click="kCloseDetailedBlog()"
        v-if="openedBlogId"
      >
        <v-icon class="icon">mdi-arrow-left</v-icon>
      </button>
    </div>
    <div class="modal-body">
      <DetailedBlog v-if="openedBlogId"></DetailedBlog>
      <div v-else>
        <h1>Blogs</h1>
        <div class="blogs">
          <div class="blog-card" v-for="(blog, index) in blogs" :key="index">
            <span class="blog-title" @click="openKCloseBlog(blog.blogId)">
              {{ blog.heading }}
            </span>
            <p>{{ blog.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/BlogsModal.js"></script>

<style scoped src="../styles/Modal.scss" lang="scss"></style>
<style scoped src="../styles/BlogsModal.scss" lang="scss"></style>
