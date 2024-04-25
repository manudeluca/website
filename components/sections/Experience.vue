<template>
  <section id="experience" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
    <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
    </div>
    <div>
        <ol class="group/list">
          <li v-for="job in mapJobs" class="mb-12">
            <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                {{ job.years }}
              </header>
              <div class="z-10 sm:col-span-6">
                <h3 class="font-medium leading-snug text-slate-200">
                  <div>
                    <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" :href="job.website" target="_blank" rel="noreferrer" :aria-label="job.company">
                      <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        <span class="inline-block">
                          {{ job.company }}
                          <SvgLink class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                        </span>
                      </span>
                    </a>
                    <div>
                      <div class="text-slate-500" aria-hidden="true">{{ job.role }}</div>
                    </div>
                  </div>
                </h3>
                <p class="mt-2 text-sm leading-normal">
                  {{ job.description }}
                </p>
                <ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
                  <li v-for="language in job.languages" class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      {{ language }}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ol>
        <div class="mt-12">
          <a class="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group" aria-label="View Full Résumé" href="/CV.pdf" target="_blank">
            <span>
              <span class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View Full
              </span>
              <span class="whitespace-nowrap">
                <span class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  Résumé
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path></svg>
              </span>
            </span>
          </a>
        </div>
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
      jobs: []
    }
  },
  async fetch() {
    this.jobs = await this.$content('jobs')
      .only(['company', 'role', 'description', 'years', 'website', 'languages'])
      .sortBy('order', 'desc')
      .fetch()
  },
  computed: {
    mapJobs(){
      let jobs = [...this.jobs]
      jobs.map(e => {
        return e.languages = e.languages.split('◙')
      })
      return jobs
    }
  }
}
</script>