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
      openedImageIndex: null,
    };
  },
  mounted() {
    this.populateImages();
    console.log("loaded");
  },
  methods: {
    kcloseArtGalleryModal: function () {
      this.$parent.$data.isArtGalleryOpen = false;
    },
    openImage: function (src, index) {
      this.displayImgSrc = src;
      this.openedImageIndex = index;
    },
    populateImages: function () {
      var self = this;
      if (window.Worker) {
        const worker = new Worker("/worker.js");
        worker.onmessage = function (event) {
          self.addImageToDOM(event.data);
        };
        worker.onerror = () => {
          console.error(
            "Failed to load image. There is an error with the web worker!"
          );
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
      setTimeout(() => {
        const image = document.querySelector(`.image${this.openedImageIndex}`);
        if (image) image.scrollIntoView();
        this.openedImageIndex = null;
      }, 0);
    },
    addImageToDOM: function (data) {
      const imageComponentClass = Vue.extend(ImageComponent);
      const img = new imageComponentClass({
        propsData: {
          imgSrc: data[0],
          index: data[1],
          openImage: this.openImage,
        },
      });
      img.$mount();
      document.getElementById("gridContainer").appendChild(img.$el);
    },
  },
};
