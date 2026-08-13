export default {
  name: "HonoursAndRewards",
  data() {
    return {
      honoursAndRewards: [
        {
          name: "The Professionals 2025 — Individual Silver, Team Bronze",
          link: "https://www.linkedin.com/posts/kirtikumar-anandrao-ramchandani-ba949b153_last-championship-of-the-year-2025-and-individually-activity-7411072912834641920-_mJq",
        },
        {
          name: "BRICS Hi-Tech 2025, Yekaterinburg — Silver (9th consecutive international podium)",
          link: "https://www.linkedin.com/posts/kirtikumar-anandrao-ramchandani-ba949b153_silver-for-india-at-the-brics-hi-tech-2025-activity-7398991096946769920-ZBWW",
        },
        {
          name: "BRICS 2024 Future Skills, Kazan — 1st, Drone AI & Electrical Engineering",
          link: "https://www.linkedin.com/posts/kirtikumar-anandrao-ramchandani-ba949b153_just-a-day-before-departing-for-the-brics-activity-7249816102933852186-jisr",
        },
        {
          name: "Games of the Future 2024, Kazan — Sports Programming Finalist",
          link: "https://www.linkedin.com/posts/kirtikumar-anandrao-ramchandani-ba949b153_competitiveprogramming-datastructurealgorithms-activity-7185206116740435968-Zt8x",
        },
        {
          name: "The Professional Championship 2023, St. Petersburg — Bronze, IT Software Solutions for Business",
          link: "https://www.linkedin.com/posts/kirtikumar-anandrao-ramchandani-ba949b153_it-softwaretesting-softwarearchitecture-activity-7137111142727831552-zIjh",
        },
        {
          name: "International High Technologies Championship 2023, Veliky Novgorod — Silver, Neural Networks and Big Data",
          link: "https://www.linkedin.com/posts/kirtikumar-anandrao-ramchandani-ba949b153_neuralnetworks-bigdata-deeplearning-activity-7114992356403142658-9C4Z",
        },
        {
          name: "World Cyber Games 2019 — India representative, APAC Top 7, World Top 32",
          link: "https://www.linkedin.com/posts/kirtikumar-anandrao-ramchandani-ba949b153_esports-gaming-activity-6637058961025654784-vB0C/",
        },
        {
          name: "World Cyber Games 2019 National Clash Royale Champion",
          link: "https://www.linkedin.com/posts/kirtikumar-anandrao-ramchandani-ba949b153_wcg2019-clashroyale-activity-6540353132269015040-zkJb",
        },
        {
          name: "Paytm First Games Clash Royale Champion (National)",
          link: "https://www.linkedin.com/posts/kirtikumar-anandrao-ramchandani-ba949b153_esports-gaming-games-activity-6656514301882400769-SvON/",
        },
        {
          name: "Clash Royale League 2019 — 20 Wins; World's No. 1 Weekly Grand Challenge Finisher",
          link: null,
        },
        {
          name: "VIVO PUBGM Tournament Champion (1v1, 2v2, 2v4)",
          link: null,
        },
        {
          name: "Penetration Tester of the Year",
          link: "https://cybersecurityawards.com/2018-winners",
        },
        {
          name: "Model United Nations — 29 MUNs, 2 Youth Parliaments",
          link: null,
        },
        {
          name: "Youngest Tech-Savvy",
          link: "https://www.linkedin.com/posts/kirtikumar-anandrao-ramchandani-ba949b153_infosec-cybersecurity-security-activity-6630414808833454080-DO8J/",
        },
        {
          name: "Online World Records",
          link: "https://onlineworldrecords.com/youngest-cyber-security-researcher/",
        },
      ],
    };
  },
  methods: {
    closeHonoursAndRewardsModal: function () {
      this.$parent.$data.isHonoursAndRewardsOpen = false;
    },
  },
};
