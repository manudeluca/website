<template>
  <section id="projects" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
    <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
    </div>
    <div>
      <ul class="group/list">
        <li v-for="project in mapProjects" class="mb-12">
          <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div class="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" :href="project.link" target="_blank" rel="noreferrer" :aria-label="project.name">
                  <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>{{ project.name }} 
                    <span class="inline-block">
                      <SvgLink class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                    </span>
                  </span>
                </a>
              </h3>
              <p class="mt-2 text-sm leading-normal">
                {{ project.description }}
              </p>
              <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
                <li v-for="language in project.languages" class="mr-1.5 mt-2">
                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    {{ language }}
                  </div>
                </li>
              </ul>
            </div>
            <img v-if="project.image != null" :alt="project.name" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" :srcset="'/projects/' + project.image" :src="'/projects/' + project.image" style="color: transparent;">
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import SvgLink from '~/assets/href.svg?inline';

export default {
  components: { 
    SvgLink
  },
  data() {
    return {
      projects: []
    }
  },
  async fetch() {
    this.projects = await this.$content('projects')
      .only(['name', 'description', 'image', 'years', 'link', 'languages'])
      .sortBy('order', 'desc')
      .fetch()
  },
  computed: {
    mapProjects(){
      let projects = [...this.projects]
      projects.map(e => {
        return e.languages = e.languages.split('◙')
      })
      return projects
    }
  }
}
</script>