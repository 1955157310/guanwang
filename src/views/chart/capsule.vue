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
      const data = [];

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
      function run() {

        const socket = new WebSocket('ws://localhost:3000'); // 与后端 WebSocket 服务器建立连接

        socket.onmessage = event => {
          let waterData = JSON.parse(event.data);
          data[0] = waterData[0].value
          data[1] = waterData[1].value
          data[2] = waterData[2].value
          data[3] = waterData[3].value
          data[4] = waterData[4].value


        };
        socket.onclose = event => {

        };

        myChart.setOption({
          series: [
            {
              type: 'bar',
              data
            }
          ]
        });
      }
      setTimeout(function () {
        run();
      }, 0);
      setInterval(function () {
        run();
      }, 2000);

      option && myChart.setOption(option);


    }
  }
}
</script>
  
  