<template>
    <v-layout column align-center justify-center>
      <div ref="bar-chart"></div>
    </v-layout>
</template>

<!-- <script src="@/components/roiCharts/roi-charts.js"></script> -->

<script>
  import * as roiCharts from '@/components/roiCharts/roi-charts.js'
  export default {
    // props: {
    //   type: {
    //     type: String
    //   },
    //   series: {
    //     type: Array
    //   }
    // },
    name: 'roi-chart',
    data: () => ({
      barChartContainer: null,
      data: [
        { temp: 32, month: 'January' },
        { temp: 38, month: 'February' },
        { temp: 47, month: 'March' },
        { temp: 59, month: 'April' },
        { temp: 70, month: 'May' },
        { temp: 80, month: 'June' },
        { temp: 88, month: 'July' },
        { temp: 83, month: 'August' },
        { temp: 76, month: 'September' },
        { temp: 64, month: 'October' },
        { temp: 49, month: 'November' },
        { temp: 37, month: 'December' }
      ],
      orientation: 'vertical'
    }),

    computed: {
      // width: () => (window.innerWidth * 0.8),
      // height: () => (window.innerHeight * 0.5)
    },

    created: function () {
    },

    mounted () {
      console.log('***** mounted roi-chart component ******', this.$refs)
      this.barChartContainer = this.$refs['bar-chart']
      this.renderChart()
      // let bulletChartContainer = document.querySelector('#bullet-chart');
    },
    methods: {
      renderChart: function () {
        roiCharts.barChart({
          container: this.barChartContainer, // container in which chart should be rendered
          data: this.data, // array with chart data
          categoriesKey: 'month', // key of categories in data array objects
          valuesKey: 'temp', // key of values in data array objects
          categoriesLabel: 'Month', // label for categories
          valuesLabel: 'Fahrenheit', // label for values
          orientation: this.orientation, // chart orientation, either vertical or horizontal
          width: 600, // total chart width
          height: 400, // total chart height
          // barWidth: 50, // bar width in percents
          // margin, // chart inner margins
          mainBarsColor: 'grey', // color of chart main data
          forecastStart: 'June', // column value at which forecast starts
          forecastOpacity: 34, // opacity of forecasted bars in percents
          insetBarsColor: 'black', // color of chart inset data
          insetBarWidth: 75, // inset bar width in percents of data bar width
          dataLabelsOverBars: true, // defines whether data labels over bars should be visible
          dataLabelsMargin: 6, // data labels margin from bars
          dataLabelsSize: 12 // data labels font size
        })
      },

      onResize: function () {
        console.log('Resizing')
      }
    }
  }
</script>

<style scoped>

</style>
