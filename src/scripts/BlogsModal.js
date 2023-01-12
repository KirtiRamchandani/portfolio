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
          heading:
            "Unveiling the Mystery: Is it Possible to Leak .onion URLs from the TOR Network?",
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
      this.openedBlogId = selectedBlogId;
    },
  },
};
