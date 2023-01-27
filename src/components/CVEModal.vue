<template>
  <div class="modal">
    <div class="modal-header">
      <span class="modal-icon close" @click="kCloseCVEModal()"></span>
      <span class="modal-icon"></span>
      <span class="modal-icon"></span>
    </div>
    <div class="modal-body">
      <h1>CVEs</h1>
      <div class="cves">
        <div class="cve-card" v-for="(cve, index) in cves" :key="index">
          <p class="cve-number">{{ cve.CVENumber }}</p>
          <p class="cve-description">{{ cve.Description }}</p>
          <details>
            <summary class="cve-references">References</summary>
            <ul class="references" v-for="(ref, i) in cve.References" :key="i">
              <li>
                <a :href="ref">{{ ref }}</a>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/CVEModal.js"></script>

<style scoped src="../styles/Modal.scss" lang="scss"></style>
<style scoped src="../styles/CVEModal.scss" lang="scss"></style>
