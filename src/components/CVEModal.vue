<template>
  <div class="modal">
    <div class="modal-header">
      <span class="modal-icon close"></span>
      <span class="modal-icon"></span>
      <span class="modal-icon"></span>
    </div>
    <div class="modal-body">
      <h1>CVEs</h1>
      <div class="cves">
        <div class="cve-card" v-for="(cve, index) in cves" :key="index">
          <p class="cve-timeline">{{ cve.timeline }}</p>
          <details>
            <summary class="summaryroject-title">{{ cve.title }}</summary>
            <p class="cve-description">{{ cve.description }}</p>
          </details>
          <p class="cve-stack">{{ cve.stack }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cves: [],
    };
  },
};
</script>

<style scoped src="../styles/Modal.scss" lang="scss"></style>
<style lang="scss">
.modal {
  width: 80% !important;
  margin-top: 5vh;

  .modal-body {
    height: auto;
    max-height: 75vh;
  }

  @media only screen and (max-width: 900px) {
    .modal-body {
      max-height: 65vh;
    }
  }
}

.cves {
  justify-content: center;
  align-items: center;
  position: relative;

  .cve-card {
    background-color: #c1ecf0;
    padding: 20px;
    margin: 20px;
  }

  @media only screen and (max-width: 900px) {
    .cve-card {
      margin: 20px 10px;
    }
  }

  a {
    padding: 2px;
    cursor: pointer;
    text-decoration: none !important;
    background-image: linear-gradient(90deg, #c8b2d1, #c8b2d1);
    background-position: 0 100%;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    transition: background-size 0.35s ease-in-out;
  }

  a:hover {
    background-size: 100% 30px;
  }

  a {
    color: #31302c;
    font-size: 16px;
    font-weight: 700;
  }
}
</style>
