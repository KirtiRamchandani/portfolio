const HomeModal = () => import("../components/HomeModal");
const ProjectsModal = () => import("../components/ProjectsModal");
const HonoursAndRewardsModal = () =>
  import("../components/HonoursAndRewardsModal");
const PublicationsModal = () => import("../components/PublicationsModal");
const ArtGalleryModal = () => import("../components/ArtGalleryModal");
const BlogsModal = () => import("../components/BlogsModal");
const FolderClose = () => import("../components/FolderClose");
const FolderOpen = () => import("../components/FolderOpen");
const CVEModal = () => import("../components/CVEModal");

export default {
  name: "IndexScreen",
  components: {
    HomeModal,
    ProjectsModal,
    HonoursAndRewardsModal,
    PublicationsModal,
    ArtGalleryModal,
    BlogsModal,
    FolderClose,
    FolderOpen,
    CVEModal,
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
      if (this.$refs.artGallery.displayImgSrc) {
        this.$refs.artGallery.$refs.mainImage.closeImage();
      }
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
      if (clickedModal !== "ArtGallery") {
        this.isArtGalleryOpen = false;
        if (this.$refs.artGallery.displayImgSrc) {
          this.$refs.artGallery.$refs.mainImage.closeImage();
        }
      }
    },
  },
};
