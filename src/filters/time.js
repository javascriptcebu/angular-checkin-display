import Vue from 'vue'
import moment from 'moment'

Vue.filter('time', function(datetime) {
  if (datetime) {
    return moment(String(datetime)).format('hh:mm:ss A')
  }
})
