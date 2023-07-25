<template>
  <!-- Styled Social List -->
  <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
    <li class="mr-5 text-xs">
      <a href="https://github.com/manudeluca" aria-label="github" class="block hover:text-slate-200" target="_blank" rel="noreferrer">
        <span class="sr-only">github</span>
        <SvgGitHub />
      </a>
    </li>
    <li class="mr-5 text-xs">
      <a href="https://www.linkedin.com/in/emanueledeluca/" aria-label="github" class="block hover:text-slate-200" target="_blank" rel="noreferrer">
        <span class="sr-only">linkedin</span>
        <SvgLinkedin />
      </a>
    </li>
    <li class="mr-5 text-xs">
      <a href="https://instagram.com/manudelucaa" aria-label="github" class="block hover:text-slate-200" target="_blank" rel="noreferrer">
        <span class="sr-only">instagram</span>
        <SvgInstagram />
      </a>
    </li>
  </ul>
</template>

<script>
import SvgGitHub from '~/assets/social/github.svg?inline';
import SvgLinkedin from '~/assets/social/linkedin.svg?inline';
import SvgInstagram from '~/assets/social/instagram.svg?inline';

export default {
  components: { 
    SvgGitHub,
    SvgLinkedin,
    SvgInstagram
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    },
    socials() {
      return socialLinks
    }
  }
}
</script>

<style lang="scss" scoped>
.h-6 {
  height: 1.5rem;
} 
.w-6 {
  width: 1.5rem;
}
</style>

