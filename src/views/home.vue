

 <style>
.dv-full-screen-container {
  background-image: url(../assets/img/pageBg.png);
  margin-right: 0%;
  background-size: 100% 100%;
  width: 100vw !important;
  height: 100vh !important;
  display: flex;
  flex-direction: column;
}
.content-box {
  flex: auto;
  display: flex;
  overflow: hidden;
}
.min-echarts-box {
  flex: 1;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.min-echarts-box-map {
  flex: 1;
  margin: 20px;
  height: 100%;
}
.height30 {
  height: 30%;
}
</style>
<template>
  <!-- <div class="content bg" style="width: 100%">
   
  </div> -->
  <div class="dv-full-screen-container">
    <div>
      <dv-border-box-8>
        <ModuleTitle />
      </dv-border-box-8>
    </div>
    <div class="content-box">
      <div class="min-echarts-box">
        <dv-border-box-12 :color="['#76E4CA', '#76E4CA']" class="height30">
          <Capsule :casts="casts" />
        </dv-border-box-12>
        <dv-border-box-8 class="height30">
          <Water :casts="casts" />
        </dv-border-box-8>
        <dv-border-box-10 class="height30">
          <div class="wind" style="height: 100%">
            <div ref="wind1" style="height: 100%; width: 100%;"></div>
            <!-- <div ref="gauge1" style="width: 50%; height: 100%"></div> -->
          </div>
        </dv-border-box-10>
      </div>

      <div class="min-echarts-box-map">
        <Nationwide @queryCity="queryCity" />
      </div>

      <div class="min-echarts-box">
        <div class="height30" v-if="!acc"></div>
				<dv-water-level-pond class="height30" v-if="acc" :config="config2" />
        <dv-border-box-8 style="padding: 10px;" class="height30">
          <dv-scroll-board v-if="accs" style="width: calc(100% - 10px);" :config="config4" />
        </dv-border-box-8>
        <dv-border-box-10 class="height30">
          <div ref="wind2" style="height: 100%"></div>
        </dv-border-box-10>
      </div>
    </div>
    <!-- <ModuleMain /> -->
    <!-- <ModuleThird /> -->
  </div>
</template>
 
<script>
import Nationwide from "@/components/Nationwide";
import ModuleTitle from "./ModuleTitle.vue";
import ModuleMain from "./ModuleMain.vue";
import ModuleThird from "./ModuleThird.vue";
import Capsule from "./chart/capsule.vue";
import Water from "./chart/water.vue";
import * as echarts from 'echarts';
import axios from "axios";
export default {
  name: "HomeView",
  components: {
    ModuleTitle,
    Capsule,
    Water,
    ModuleThird,
    Nationwide,
    ModuleMain,
  },
  mounted() {
    // this.initchar();
    this.getJSON1();
    // this.getJSON3();
    // this.getJSON4();
    this.getJSON2data();
  },
  methods: {
     // 查询尝试天气
     queryCity(code) {
      axios
        .get(
          `https://restapi.amap.com/v3/weather/weatherInfo?city=${code}&key=daddb75547d59a84adebb32a869131db&extensions=all`
        )
        .then((res) => {
          this.accs = false
          if (res.status === 200) {
            if (res.data.forecasts.length) {
              this.casts = res.data.forecasts[0].casts
              this.getJSON2(this.casts)
              const data4 = this.casts.map(item => {
                return [item.date, item.dayweather, item.nightweather]
              })
              this.$set(this.config4, 'data', data4)
              setTimeout(() => {
                this.accs = true
              }, 1)
            }
          }
        });
        axios
        .get(
          `https://restapi.amap.com/v3/weather/weatherInfo?city=${code}&key=daddb75547d59a84adebb32a869131db`
        )
        .then((res) => {
          this.acc = false
          if(res.status === 200){
            this.lives = res.data.lives[0]
            this.$set(this.config2, 'data', [parseInt(this.lives.humidity), parseInt(this.lives.humidity)])
            setTimeout(() => {
                this.acc = true
              }, 1)
          }
        });
    },
    getJSON1() {
      var chartDom = this.$refs.wind1;
      var myChart = echarts.init(chartDom);
      var option;
      const gaugeData = [
        {
          value: 20,
          name: "Good",
          title: {
            offsetCenter: ["-40%", "80%"],
          },
          detail: {
            offsetCenter: ["-40%", "95%"],
          },
        },
        {
          value: 40,
          name: "Better",
          title: {
            offsetCenter: ["0%", "80%"],
          },
          detail: {
            offsetCenter: ["0%", "95%"],
          },
        },
        {
          value: 60,
          name: "Perfect",
          title: {
            offsetCenter: ["40%", "80%"],
          },
          detail: {
            offsetCenter: ["40%", "95%"],
          },
        },
      ];
      option = {
        series: [
          {
            type: "gauge",
            anchor: {
              show: true,
              showAbove: true,
              size: 18,
              itemStyle: {
                color: "#FAC858",
              },
            },
            pointer: {
              icon: "path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z",
              width: 8,
              length: "80%",
              offsetCenter: [0, "8%"],
            },
            progress: {
              show: true,
              overlap: true,
              roundCap: true,
            },
            axisLine: {
              roundCap: true,
            },
            data: gaugeData,
            title: {
              fontSize: 14,
            },
            detail: {
              width: 40,
              height: 14,
              fontSize: 14,
              color: "#fff",
              backgroundColor: "inherit",
              borderRadius: 3,
              formatter: "{value}%",
            },
          },
        ],
      };
      setInterval(function () {
        gaugeData[0].value = +(Math.random() * 100).toFixed(2);
        gaugeData[1].value = +(Math.random() * 100).toFixed(2);
        gaugeData[2].value = +(Math.random() * 100).toFixed(2);
        myChart.setOption({
          series: [
            {
              data: gaugeData,
            },
          ],
        });
      }, 2000);

      option && myChart.setOption(option);
    },
    getJSON2(datas) {
      let dateArr = []
      let dateArr2 = []
      let dateArr3 = []
      let dateArr4 = []
      let dateArr5 = []
      datas.forEach(element => {
        dateArr.push(element.date)
        dateArr2.push(parseInt(element.daypower.split('-')[0]))
        dateArr3.push(parseInt(element.daypower.split('-')[1]))
        dateArr4.push(parseInt(element.nightpower.split('-')[0]))
        dateArr5.push(parseInt(element.nightpower.split('-')[1]))
      });
      var chartDom = this.$refs.wind2;
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
        title: {
         show: false,
          text: "Gradient Stacked Area Chart",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["白天最大风力", "白天最小风力", "晚上最大风力", "晚上最小风力"],
          textStyle: {
            color: "#5D88E5"
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: dateArr,
            axisLabel: {
             color: "#5D88E5"  
            }
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
             color: "#fff"  
            }
          },
        ],
        series: [
          {
            name: "白天最大风力",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(128, 255, 165)",
                },
                {
                  offset: 1,
                  color: "rgb(1, 191, 236)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: dateArr2,
          },
          {
            name: "白天最小风力",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(0, 221, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(77, 119, 255)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: dateArr3,
          },
          {
            name: "晚上最大风力",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(55, 162, 255)",
                },
                {
                  offset: 1,
                  color: "rgb(116, 21, 219)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: dateArr4,
          },
          {
            name: "晚上最小风力",
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 0, 135)",
                },
                {
                  offset: 1,
                  color: "rgb(135, 0, 157)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: dateArr5,
          },
        ],
      };

      option && myChart.setOption(option);
    },
    getJSON4() {
      var chartDom = this.$refs.gauge1;
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        textStyle: {
          fontSize: 6,
        },
        series: [
          {
            type: "gauge",
            center: ["50%", "60%"],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 60,
            splitNumber: 12,
            itemStyle: {
              color: "#FFAB91",
            },
            progress: {
              show: true,
              width: 20.5,
            },
            pointer: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                width: 20,
              },
            },
            axisTick: {
              distance: -45,
              splitNumber: 5,
              lineStyle: {
                width: 2,
                color: "#999",
              },
            },
            splitLine: {
              distance: -42,
              length: 30,
              lineStyle: {
                width: 3,
                color: "#999",
              },
            },
            axisLabel: {
              distance: -20,
              color: "#FFFFFF",
              fontSize: 10,
            },
            anchor: {
              show: false,
            },
            title: {
              show: false,
            },
            detail: {
              valueAnimation: true,
              width: "60%",
              lineHeight: 40,
              borderRadius: 8,
              offsetCenter: [0, "-15%"],
              fontSize: 15,
              fontWeight: "bolder",
              formatter: "{value} °C",
              color: "inherit",
            },
            data: [
              {
                value: 20,
              },
            ],
          },
          {
            type: "gauge",
            center: ["50%", "60%"],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 60,
            itemStyle: {
              color: "#FD7347",
            },
            progress: {
              show: true,
              width: 8,
            },
            pointer: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            detail: {
              show: false,
            },
            data: [
              {
                value: 20,
              },
            ],
          },
        ],
      };
      setInterval(function () {
        const random = +(Math.random() * 60).toFixed(2);
        myChart.setOption({
          series: [
            {
              data: [
                {
                  value: random,
                },
              ],
            },
            {
              data: [
                {
                  value: random,
                },
              ],
            },
          ],
        });
      }, 2000);

      option && myChart.setOption(option);
    },
    getJSON2data() {
      // this.getJSON2();
      // this.$axios.get('http://localhost:3000/weather').then(res=>{
      //     console.log(res.data[0].temperature[0].data);
      //     this.weatherdata=res.data;
      //     this.getJSON2()
      // })
    },
    initchar() {
      var myChart = echarts.init(this.$refs.mainech);

      var option = {
        backgroundColor: "#000",
        globe: {
          baseTexture: require("../assets/img/earth.jpg"),
          shading: "lambert",
          environment: require("../assets/img/starfield.jpg"),
          atmosphere: {
            show: true,
          },
          light: {
            ambient: {
              intensity: 0.1,
            },

            main: {
              intensity: 1.5,
              shadowQuality: "high",
            },
            viewControl: {
              autoRotate: true,
            },
            globeOuterRadius: 150,
            globeRadius: 100,
            shading: "lambert",
          },
        },
        series: [],
      };

      myChart.setOption(option);
    },
  },
  data() {
    return {
      lives: {},
      casts: [],
      weatherdata: [],
      config2: {
        data: [66, 45],
        shape: "roundRect",
      },
      acc: true,
      accs: true,
      config3: {
        data: [
          {
            name: "周口1",
            value: 55,
          },
          {
            name: "南阳2",
            value: 120,
          },
          {
            name: "西峡3",
            value: 78,
          },
          {
            name: "驻马店4",
            value: 66,
          },
          {
            name: "新乡5",
            value: 100,
          },
        ],
      },
      // 滚屏
      config4: {
        header: ["日期", "白天天气现象", "晚上天气现象"],
        data: [
          ["行1列1", "行1列2", "行1列3"],
          ["行2列1", "行2列2", "行2列3"],
          ["行3列1", "行3列2", "行3列3"],
          ["行4列1", "行4列2", "行4列3"],
          ["行5列1", "行5列2", "行5列3"],
          ["行6列1", "行6列2", "行6列3"],
          ["行7列1", "行7列2", "行7列3"],
          ["行8列1", "行8列2", "行8列3"],
          ["行9列1", "行9列2", "行9列3"],
          ["行10列1", "行10列2", "行10列3"],
        ],
      },
    };
  },
};
</script> 

 
 