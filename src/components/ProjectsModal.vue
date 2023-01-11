<template>
  <div class="modal">
    <div class="modal-header">
      <span class="modal-icon close" @click="kcloseProjectsModal()"></span>
      <span class="modal-icon"></span>
      <span class="modal-icon"></span>
    </div>
    <div class="modal-body">
      <h1>Projects</h1>
      <p>Some of the projects I have worked on in the past!</p>
      <div class="projects">
        <div
          class="project-card"
          v-for="(project, index) in projects"
          :key="index"
        >
          <p class="project-timeline">{{ project.timeline }}</p>
          <details>
            <summary class="summaryroject-title">{{ project.title }}</summary>
            <p class="project-description">{{ project.description }}</p>
          </details>
          <p class="project-stack">{{ project.stack }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/ProjectsModal.js"></script>

<style scoped src="../styles/Modal.scss" lang="scss"></style>
<style scoped src="../styles/ProjectsModal.scss" lang="scss"></style>
