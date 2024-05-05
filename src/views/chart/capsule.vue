<template>
  <div ref="main" style="width: 100%; height: 200px;">

  </div>
</template>
  
<script>
import * as echarts from 'echarts';
export default {
  mounted() {
    this.getWater()

  },
  methods: {

    getWater() {
      var chartDom = this.$refs.main;
      var myChart = echarts.init(chartDom);
      var option;
      const data = [
  {
    name: '南阳',
    value: 157
  },
  {
    name: '周口',
    value: 67
  },
  {
    name: '漯河',
    value: 123
  },
  {
    name: '郑州',
    value: 55
  },
  {
    name: '西峡',
    value: 98
  }
];

      option = {
        xAxis: {
          max: 'dataMax'
        },
        yAxis: {
          type: 'category',
          data: ['南阳', '周口', '漯河', '郑州', '西峡'],
          inverse: true,
          animationDuration: 300,
          animationDurationUpdate: 300,
          max: 2,
          splitLine:{
            lineStyle:{
              width:1,
              color:'#FFFFFF'
            }
          },
          axisTick:{
            length:5,
            lineStyle:{
              width:1
            }
          }
        },
        series: [
          {
            realtimeSort: true,
            name: 'X',
            type: 'bar',
            data: data,
            label: {
              show: true,
              position: 'right',
              valueAnimation: true
            }
          }
        ],

        legend: {
          show: true
        },
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
  
  