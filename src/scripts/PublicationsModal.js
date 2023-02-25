export default {
  name: "Publications",
  data() {
    return {
      publications: [],
    };
  },
  methods: {
    kclosePublicationModal: function () {
      this.$parent.$data.isPublicationsOpen = false;
    },
  },
};
