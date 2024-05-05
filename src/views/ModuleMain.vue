<template>
  <div class="module-box">
    <div style="flex:0 1 25%">
      <dv-border-box-1 style="width:100%;height:150px;">
        <Capsule />
      </dv-border-box-1>
      <!-- <dv-border-box-2 style="width:100%;height:150px;">
        <dv-water-level-pond :config="config2" style="width:100%;height:150px" />
      </dv-border-box-2> -->
      <dv-border-box-2 style="width:100%;height:300px;">
        <Water />
      </dv-border-box-2>
    </div>
    <div style="flex:0 1 50%">
      <dv-border-box-8 style="width:100%;height:450px;">
        <div ref="mainech" style="width: 100%; height: 450px;">

        </div>


      </dv-border-box-8>
    </div>
    <div style="flex:0 1 25%">
      <dv-border-box-10 style="width:100%;height:150px;">
        <dv-water-level-pond :config="config2" style="width:100%;height:150px" />
      </dv-border-box-10>
      <dv-border-box-1 style="width:100%;height:300px;">
        <dv-active-ring-chart :config="config3" style="width:100%;height:300px" />
      </dv-border-box-1>
    </div>
  </div>
</template>

<script>
import Capsule from './chart/capsule'
import * as echarts from 'echarts';
import Water from './chart/water'



export default {
  components: {
    Capsule,
    Water
  },
  mounted() {
    this.initchar()
  },
  methods: {

    initchar() {
      var myChart = echarts.init(this.$refs.mainech);
      

      var option = {
        backgroundColor: '#000',
        globe: {
          baseTexture:require('../assets/img/earth.jpg'),
          shading: 'lambert',
          environment:require('../assets/img/starfield.jpg'),
          atmosphere: {
            show: true
          },
          light: {
            ambient: {
              intensity: 0.1,
              
            },
            
            main: {
              intensity: 1.5,
              shadowQuality:'high'
            },
            viewControl:{
                  autoRotate:true
            },
            globeOuterRadius:150,
            globeRadius:100,
            shading:'lambert',
          }
        },
        series: []
      };

      myChart.setOption(option);
    }

  },
  data() {
    return {
      config2: {
        data: [66, 45],
        shape: 'roundRect'
      },
      config3: {
        data: [
          {
            name: '周口',
            value: 55
          },
          {
            name: '南阳',
            value: 120
          },
          {
            name: '西峡',
            value: 78
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 100
          }
        ]
      }
    }
  }
}
</script>

