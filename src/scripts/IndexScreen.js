import HomeModal from "../components/HomeModal";
import ProjectsModal from "../components/ProjectsModal";
import HonoursAndRewardsModal from "../components/HonoursAndRewardsModal";
import PublicationsModal from "../components/PublicationsModal";
import ArtGalleryModal from "../components/ArtGalleryModal";
import BlogsModal from "../components/BlogsModal";
export default {
  name: "IndexScreen",
  components: {
    HomeModal,
    ProjectsModal,
    HonoursAndRewardsModal,
    PublicationsModal,
    ArtGalleryModal,
    BlogsModal,
  },
  data() {
    return {
      isHomeOpen: true,
      isProjectsOpen: false,
      isHonoursAndRewardsOpen: false,
      isPublicationsOpen: false,
      isCVEOpen: false,
      isBlogsOpen: false,
      isArtGalleryOpen: false,
    };
  },
  methods: {
    openKCloseHome: function () {
      this.kcloseOtherModals("Home");
      this.isHomeOpen = !this.isHomeOpen;
    },
    openKCloseProjects: function () {
      this.kcloseOtherModals("Projects");
      this.isProjectsOpen = !this.isProjectsOpen;
    },
    openKCloseHonoursAndRewards: function () {
      this.kcloseOtherModals("HonoursAndRewards");
      this.isHonoursAndRewardsOpen = !this.isHonoursAndRewardsOpen;
    },
    openKClosePublications: function () {
      this.kcloseOtherModals("Publications");
      this.isPublicationsOpen = !this.isPublicationsOpen;
    },
    openKCloseCVEs: function () {
      this.kcloseOtherModals("CVEs");
      this.isCVEOpen = !this.isCVEOpen;
    },
    openKCloseBlogs: function () {
      this.kcloseOtherModals("Blogs");
      this.isBlogsOpen = !this.isBlogsOpen;
      const openedBlog = this.$refs.blogsModal.openedBlogId;
      if (openedBlog) {
        this.$refs.blogsModal.openedBlogId = null;
        this.$refs.blogsModal.updateAddressBarURL(null);
      }
    },
    openKCloseArtGallery: function () {
      this.kcloseOtherModals("ArtGallery");
      this.isArtGalleryOpen = !this.isArtGalleryOpen;
    },
    kcloseOtherModals: function (clickedModal) {
      if (clickedModal !== "Home") this.isHomeOpen = false;
      if (clickedModal !== "Projects") this.isProjectsOpen = false;
      if (clickedModal !== "HonoursAndRewards")
        this.isHonoursAndRewardsOpen = false;
      if (clickedModal !== "Publications") this.isPublicationsOpen = false;
      if (clickedModal !== "CVEs") this.isCVEOpen = false;
      if (clickedModal !== "Blogs") {
        this.isBlogsOpen = false;
        this.$refs.blogsModal.openedBlogId = null;
        this.$refs.blogsModal.updateAddressBarURL(null);
      }
      if (clickedModal !== "ArtGallery") this.isArtGalleryOpen = false;
    },
  },
};
