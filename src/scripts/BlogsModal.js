import { Blogs } from "../assets/Blogs";

const DetailedBlog = () => import("../components/DetailedBlog");

export default {
  name: "Blogs",
  components: {
    DetailedBlog,
  },
  data() {
    return {
      openedBlogId: null,
      blogs: Blogs,
    };
  },
  methods: {
    closeBlogsModal: function () {
      this.$parent.$data.isBlogsOpen = false;
    },
    kCloseDetailedBlog: function () {
      if (this.openedBlogId) {
        this.openKCloseBlog(null);
        return;
      }
    },
    openKCloseBlog: function (selectedBlogId) {
      if (selectedBlogId) {
        const blogInfo = this.blogs.find(
          (blog) => blog.blogId === selectedBlogId
        );
        this.updateAddressBarURL(blogInfo);
      } else {
        this.updateAddressBarURL(null);
      }
      this.openedBlogId = selectedBlogId;
    },
    updateAddressBarURL: function (blogInfo) {
      if (blogInfo) {
        const formattedBlogTitle = blogInfo.heading
          .toLowerCase()
          .replaceAll(" ", "-");
        window.history.replaceState(
          "",
          blogInfo.heading,
          `?${new URLSearchParams({
            blog: formattedBlogTitle,
          })}`
        );
        return;
      }
      window.history.replaceState("", "", "/");
    },
  },
};
