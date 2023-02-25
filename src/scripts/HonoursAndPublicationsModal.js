export default {
  name: "HonoursAndRewards",
  data() {
    return {
      honoursAndRewards: [
        {
          name: "Paytm First Games Clash Royale Champion (National)",
          link: "https://www.linkedin.com/posts/kirtikumar-anandrao-ramchandani-ba949b153_esports-gaming-games-activity-6656514301882400769-SvON/",
        },
        {
          name: "Penetration Tester of the Year",
          link: "https://cybersecurityawards.com/2018-winners",
        },
        {
          name: "Model United Nations",
          link: null,
        },
        {
          name: "VIVO PUBGM Tournament Champion",
          link: null,
        },
        {
          name: "Youngest Tech-Savvy",
          link: "https://www.linkedin.com/posts/kirtikumar-anandrao-ramchandani-ba949b153_infosec-cybersecurity-security-activity-6630414808833454080-DO8J/",
        },
        {
          name: "World Cyber Games 2019 India's Representative",
          link: "https://www.linkedin.com/posts/kirtikumar-anandrao-ramchandani-ba949b153_esports-gaming-activity-6637058961025654784-vB0C/",
        },
        {
          name: "Online World Records",
          link: "https://onlineworldrecords.com/youngest-cyber-security-researcher/",
        },
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
    closeHonoursAndPublicationsModal: function () {
      this.$parent.$data.isHonoursAndRewardsOpen = false;
    },
  },
};
