import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'roi-chart',
      component: require('@/components/RoiChart').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
