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
    if (process.client){
      window.addEventListener("scroll", this.handleScroll);
      window.addEventListener("mousemove", this.handleMouseMove);
    }
  },
  data() {
    return {
      nav: [],
    }
  },
  mounted() {
    this.loadData()
  },  
  computed: {
    links() {
      return navLinks;
    },
  },
  methods: {
    loadData() {
      for (let i = 0; i < this.links.length; i++) {
        let e = document.getElementById(this.links[i].id);
        let a = document.querySelectorAll('a[href="/' + this.links[i].url + '"]');
        let element = {}, values = [];

        element.offset = e.offsetTop;
        element.classes = a[0].classList;
        values.push(element);

        this.nav.push(element);
      }

      this.addRemoveClass(this.nav[0]);
    },
    addRemoveClass(nav) {
      for (let i = 0; i < this.nav.length; i ++) {
        this.nav[i].classes.remove('nuxt-link-exact-active');
        this.nav[i].classes.remove('nuxt-link-active');
      }

      nav.classes.add('nuxt-link-exact-active');
      nav.classes.add('nuxt-link-active');
    },
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
      if (process.client){
        var currentScrollPosition = window.scrollY

        for (let i = 0; i < this.nav.length; i ++) {
          if (this.nav[i+1] != null) {
            if (currentScrollPosition >= this.nav[i].offset && currentScrollPosition <= this.nav[i+1].offset) {
              this.addRemoveClass(this.nav[i]);
            } 
          } else {
            if (currentScrollPosition >= this.nav[i].offset) {
            this.addRemoveClass(this.nav[i]);
            }
          }
        }
      }
    }, 
  },
  destroyed() {
    if (process.client){
       window.removeEventListener("scroll", this.handleScroll);
    }
  },
}
</script>