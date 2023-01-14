import DetailedBlog from "../components/DetailedBlog";

export default {
  name: "Blogs",
  components: {
    DetailedBlog,
  },
  data() {
    return {
      openedBlogId: null,
      blogs: [
        {
          heading: "Uncovering TOR's hidden gems: .onion URLs",
          blogId: "1",
          description: `
            CVE-2022-30334 is a vulnerability discovered in the Brave browser that allows for the leakage of ".onion" URLs. In this blog, we will cover how referrer and origin headers can leave a trail of breadcrumbs for anyone to follow, compromising the anonymity of the user.           
          `,
        },
      ],
    };
  },
  methods: {
    closeBlogsModal: function () {
      if (this.openedBlogId) {
        this.openKCloseBlog(null);
        return;
      }
      this.$parent.$data.isBlogsOpen = false;
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
