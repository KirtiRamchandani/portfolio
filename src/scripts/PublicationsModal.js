export default {
  name: "Publications",
  data() {
    return {
      publications: [
        {
          name: "Book of Achievers",
          link: "https://bookofachievers.com/articles/meet-the-youngest-cybersecurity-researcher-on-microsoft-fame-page",
        },
        {
          name: "UAceIt",
          link: "https://uaceit.com/ace-stories/#close",
        },
        {
          name: "Fayz",
          link: "https://fayz.in/stories/s/1480/0/?ckt_id=ZGL1ZGVk&title=youngest_indian_cybersecurity_expert",
        },
        {
          name: "Security Affairs",
          link: "https://securityaffairs.co/wordpress/127556/hacking/brave-browser-information-disclosure.html",
        },
        {
          name: "Bleeping Computer",
          link: "https://www.bleepingcomputer.com/news/security/google-fixes-second-actively-exploited-chrome-zero-day-bug-this-year/",
        },
        {
          name: "Meterpreter",
          link: "https://meterpreter.org/google-chrome-updated-to-92-0-4515-107-to-enhance-security-and-reduce-power-consumption/",
        },
        {
          name: "Everipedia",
          link: "https://everipedia.org/wiki/lang_en/cyber-security-awards",
        },
      ],
    };
  },
  methods: {
    kclosePublicationModal: function () {
      this.$parent.$data.isPublicationsOpen = false;
    },
  },
};
