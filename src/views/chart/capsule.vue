<template>
  <div ref="main" style="width: 100%; height: 100%;">

  </div>
</template>

<script>
import * as echarts from 'echarts';
import dayjs from 'dayjs'
export default {
  props: {
    casts: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    // this.getWater()
  },
  watch: {
    "casts"() {
      this.getWater(this.casts)
    }
  },
  methods: {

    getWater(echartsData) {
      var chartDom = this.$refs.main;
      var myChart = echarts.init(chartDom);
      var option;

      const data = echartsData.map(item => {
        return {
          name: dayjs(item.date).format('DD'),
          value: parseInt(item.daytemp)
        }
      })
      const data2 = echartsData.map(item => {
        return dayjs(item.date).format('DD')
      })

      option = {
        legend: {
          data: ["平均温度"],
          textStyle: {
            color: "#fff"
          }
        },
        xAxis: {
          max: 45,
          axisLabel: {
            color: "#53B7F9"
          }
        },
        yAxis: {
          type: 'category',
          data: data2,
          inverse: true,
          animationDuration: 300,
          animationDurationUpdate: 300,
          splitLine: {
            lineStyle: {
              width: 1,
              color: '#FFFFFF'
            }
          },
          axisTick: {
            length: 5,
            lineStyle: {
              width: 1
            }
          },
          axisLabel: {
            color: "#fff"
          }
        },
        series: [
          {
            realtimeSort: true,
            name: '平均温度',
            type: 'bar',
            data: data,
            itemStyle: {
              color: '#64CFCF'
            },
            label: {
              show: true,
              position: 'right',
              valueAnimation: true,
              color: "#fff"
            }
          }
        ],

        /* legend: {
          show: true
        }, */
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
      };
      option && myChart.setOption(option);


    }
  }
}
</script>

