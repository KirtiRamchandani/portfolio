import Vue from "vue";
import { imageConfig } from "../assets/artGalleryImages/imageConfig";
import ImageComponent from "../components/ImageComponent";
import MainImage from "../components/MainImage";

export default {
  name: "ArtGallery",
  components: {
    MainImage,
  },
  data() {
    return {
      displayImgSrc: null,
      scrollTopPosition: 0,
      imgCount: 0,
      images: imageConfig,
    };
  },
  mounted() {
    this.populateImages();
  },
  methods: {
    kcloseArtGalleryModal: function () {
      this.$parent.$data.isArtGalleryOpen = false;
    },
    openImage: function (src) {
      this.displayImgSrc = src;
    },
    populateImages: function () {
      var self = this;
      if (window.Worker) {
        const worker = new Worker("/worker.js");
        worker.onmessage = function (event) {
          self.addImageToDOM(event.data);
        };
        worker.postMessage(this.images);
      }
    },
    updateImageZoom: function (e) {
      this.$refs.mainImage.setImageZoom(e.target.value);
    },
    kCloseMainImage: function () {
      if (this.displayImgSrc) {
        this.$refs.mainImage.closeImage();
      }
    },
    addImageToDOM: function (src) {
      const imageComponentClass = Vue.extend(ImageComponent);
      const img = new imageComponentClass({
        propsData: {
          imgSrc: src,
          openImage: this.openImage,
        },
      });
      img.$mount();
      document.getElementById("gridContainer").appendChild(img.$el);
    },
  },
};
