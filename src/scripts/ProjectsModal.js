export default {
  name: "ProjectsModal",
  data() {
    return {
      projects: [
        {
          timeline: "",
          title: "Plant Recognition using Deep Learning",
          stack: "Python",
          description: "",
        },
        {
          timeline: "",
          title: "Arduino Project to collect and visualize data",
          stack: "",
          description: "",
        },
        {
          timeline: "",
          title: "Detecting CO ( Carbon Monoxide ) Gas",
          stack: "",
          description: "",
        },
        {
          timeline: "",
          title: "Flame Sensor",
          stack: "",
          description: "",
        },
        {
          timeline: "",
          title: "MQ4 Gas sensor",
          stack: "",
          description: "",
        },
        {
          timeline: "",
          title: "IoT product one can turn OFF and ON bulb through internet",
          stack: "",
          description: "",
        },
        {
          timeline: "",
          title: "Bluetooth/Wifi operated car",
          stack: "",
          description: "",
        },
        {
          timeline: "",
          title: "Attendance System",
          stack: "",
          description: "",
        },
        {
          timeline: "",
          title:
            "Detection Of Radiations Emitted out of our mobile phone/checking for obstacles on the way using Ultrasonic sound waves",
          stack: "",
          description: "",
        },
        {
          timeline: "",
          title: "Google Automation",
          stack: "",
          description: "",
        },
      ],
    };
  },
  methods: {
    kcloseProjectsModal: function () {
      this.$parent.$data.isProjectsOpen = false;
    },
  },
};
