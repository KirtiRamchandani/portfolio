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
    const element = document.getElementById("gridContainer");
    element.addEventListener("wheel", this.scrollHandler, { passive: true });
    element.addEventListener("touchmove", this.scrollHandler, {
      passive: true,
    });
  },
  unmounted() {
    const element = document.getElementById("gridContainer");
    element.removeEventListener("wheel");
    element.removeEventListener("touchmove");
  },
  methods: {
    kcloseArtGalleryModal: function () {
      if (this.displayImgSrc) {
        this.$refs.mainImage.closeImage();
        return;
      }
      this.$parent.$data.isArtGalleryOpen = false;
    },
    openImage: function (src) {
      this.displayImgSrc = src;
    },
    populateImages: function () {
      const imagesToPopulate = this.images.slice(
        this.imgCount,
        this.imgCount + 9
      );
      this.imgCount += 9;
      imagesToPopulate.forEach((element) => {
        const imageComponentClass = Vue.extend(ImageComponent);
        const img = new imageComponentClass({
          propsData: {
            imgSrc: element.src,
            openImage: this.openImage,
          },
        });
        img.$mount();
        document.getElementById("gridContainer").appendChild(img.$el);
      });
    },
    scrollHandler: function () {
      const element = document.getElementById("gridContainer");
      const offset =
        element.getBoundingClientRect().top -
        element.offsetParent.getBoundingClientRect().top;
      const top = window.pageYOffset + window.innerHeight - offset;
      if (top > element.scrollHeight) {
        this.populateImages();
      }
    },
    updateImageZoom: function (e) {
      this.$refs.mainImage.setImageZoom(e.target.value);
    },
  },
};
