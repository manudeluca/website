<template>
  <div class="group/spotlight relative">
    <div class="cursor-pointer pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"></div>
    <div id="root" class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <a class="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0" href="#content">
        Skip to Content
      </a>
      <div class="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import { navLinks } from '@/store/store.js';

export default {
  created() {
    // window.addEventListener("scroll", this.handleScroll);
    // window.addEventListener("mousemove", this.handleMouseMove);
  },
  data() {
    return {
      nav: [],
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  computed: {
    links() {
      return navLinks;
    },
  },
  methods: {
    handleMouseMove(e) {
      if (window.innerWidth < 1024) return;
      
      const { currentTarget, clientX, clientY } = e;
      const { left, top, width, height } = e.target.getBoundingClientRect();

      let x = clientX - left;
      let y = clientY - top; 
      let cursor = document.getElementsByClassName('cursor-pointer');

      cursor[0].style = 'background: radial-gradient(600px at ' + x + 'px ' + y + 'px, rgba(29, 78, 216, 0.15), transparent 80%);';
    },
    handleScroll() {
      let mainNavLinks = document.querySelectorAll('.nav > ul > li > a')

      let fromTop = window.scrollY
      mainNavLinks.forEach(link => {
        let section = document.querySelector(decodeURIComponent(link.hash))
        let allCurrent = document.querySelectorAll('.nuxt-link-active'), i

        if (section.offsetTop <= fromTop) {
          for (i = 0; i < allCurrent.length; ++i) {
            allCurrent[i].classList.remove('nuxt-link-active')
          }
          link.classList.add('nuxt-link-active')
        } else {
          link.classList.remove('nuxt-link-active')
        }
      })
    }, 
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
}
</script>