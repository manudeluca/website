<template>
  <!-- Styled Social List -->
  <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
    <li class="mr-5 text-xs">
      <a href="https://github.com/manudeluca" aria-label="github" class="block hover:text-slate-200" target="_blank" rel="noreferrer">
        <span class="sr-only">github</span>
        <SvgGitHub />
      </a>
    </li>
  </ul>
</template>

<script>
import SvgGitHub from '~/assets/social/github.svg?inline';

export default {
  components: { 
    SvgGitHub 
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

