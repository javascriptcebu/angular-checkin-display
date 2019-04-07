<template>
  <div class="home bg-grey-lighter min-h-screen absolute w-full flex flex-col-reverse">
    <div class="my-8 text-center text-lg">
        made ❤️ by your friend <a class="no-underline text-green-dark" href="#">Vue.js Cebu</a>
    </div>
    <div v-for="(attendee, index) in sortAttendees" class="bg-white my-3 mx-12 p-4 flex">
      <div class="text-3xl bg-gradient text-white font-bold w-16 h-16 flex items-center justify-center rounded">{{ index + 1 }}</div>
      <div class="flex flex-1 items-center pl-8 text-3xl font-bold">{{ attendee.profile.first_name }} {{ attendee.profile.last_name }}</div>
      <div class="text-3xl text-grey-darker font-light flex items-center">{{ attendee.changed | time }}</div>
    </div>
    <div class="mt-3"></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { sortBy } from 'lodash'

export default {
  created () {
    this.init()
  },

  computed: {
    ...mapState(['attendees']),

    sortAttendees () {
      return sortBy(this.attendees, (attendee) => {
        return attendee.changed
      })
    }
  },

  methods: {
    ...mapActions(['init']),
  }
}
</script>

<style>
.bg-gradient {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#f80057+0,bd278e+100 */
  background: #f80057; /* Old browsers */
  background: -moz-linear-gradient(45deg, #f80057 0%, #bd278e 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg, #f80057 0%,#bd278e 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg, #f80057 0%,#bd278e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f80057', endColorstr='#bd278e',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
</style>