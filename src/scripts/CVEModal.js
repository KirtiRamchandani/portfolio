import { CVEs } from "../assets/CVEs";

export default {
  data() {
    return {
      cves: CVEs,
    };
  },
  methods: {
    kCloseCVEModal: function () {
      this.$parent.$data.isCVEOpen = false;
    },
  },
};
