import Vue from "vue";
import ImageComponent from "../components/ImageComponent";
import MainImage from "../components/MainImage";

export default {
  name: "ArtGallerys",
  components: {
    MainImage,
  },
  data() {
    return {
      displayImgSrc: null,
      scrollTopPosition: 0,
      imgCount: 0,
      images: [
        {
          src: "https://source.unsplash.com/1300x1200/",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?algeria",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?india",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?america",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?finland",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?pakistan",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?bangladesh",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?afghanistan",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?srilanka",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?poland",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?britain",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?canada",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?newzealand",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?rome",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?ireland",
        },
        {
          src: "https://source.unsplash.com/1300x1200/",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?algeria",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?india",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?america",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?finland",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?pakistan",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?bangladesh",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?afghanistan",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?srilanka",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?poland",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?britain",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?canada",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?newzealand",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?rome",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?ireland",
        },
        {
          src: "https://source.unsplash.com/1300x1200/",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?algeria",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?india",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?america",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?finland",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?pakistan",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?bangladesh",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?afghanistan",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?srilanka",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?poland",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?britain",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?canada",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?newzealand",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?rome",
        },
        {
          src: "https://source.unsplash.com/1300x1200/?ireland",
        },
      ],
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
  },
};
