<template>
  <div style="height: 95.5%;display: flex;flex-direction: column;justify-content: space-between;">
    <div style="width: 100%; height: 47%">
      <dv-border-box-10 style="height: 100%">
        <Province
          @city="city"
          @switchs="switchs"
          :name="name"
          :children="children"
        />
      </dv-border-box-10>
    </div>
    <dv-border-box-10 style="height: 47%">
      <div ref="mapContainer" style="width: 100%; height: 100%"></div>
    </dv-border-box-10>
  </div>
</template>
  
  <script>
import * as echarts from "echarts";
import china from "@/assets/中华人民共和国.json";
import { provinces } from "@/components/map.js";
import Province from "./Province.vue";

export default {
  name: "Nationwide",
  components: { Province },
  data() {
    return {
      index: 0,
      charts: null,
      timeOut: null,
      children: [],
      name: "",
    };
  },
  mounted() {
    this.charts = echarts.init(this.$refs.mapContainer);
    this.initCharts(this.charts);
  },
  methods: {
    // 当前城市
    city(cityName, cityCode) {
      this.$emit('queryCity', cityCode)
    },
    // 切换城市
    switchs() {
      if (this.index < provinces.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
      this.initCharts(this.charts);
    },
    initCharts(charts) {
      const that = this;
      that.children = provinces[that.index].children;
      that.name = provinces[that.index].name || "北京";
      const option = {
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "3%",
        },
        // backgroundColor: "#0E2152",
        geo: {
          map: "china",
          // 设置高亮
          regions: [
            {
              name: provinces[that.index].name || "北京",
              itemStyle: {
                areaColor: "#4384A9",
              },
              label: {
                show: true,
              },
            },
          ],
          // 显示城市名字
          label: {
            normal: {
              show: false,
              textStyle: {
                color: "#fff",
              },
            },
            // 鼠标放上去高亮的样式
            emphasis: {
              textStyle: {
                color: "#fff",
              },
            },
          },
          itemStyle: {
            normal: {
              borderColor: "#5089EC",
              borderWidth: 1,
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 102, 154, 0)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 102, 154, .4)",
                  },
                ],
              },
            },
            emphasis: {
              // 高亮时的样式设置
              areaColor: "#2386AD",
              borderWidth: 0,
            },
          },
        },
        series: [
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            effectType: "ripple",
            showEffectOn: "render",
            rippleEffect: {
              period: 10,
              scale: 4,
              brushType: "fill",
            },
            zlevel: 1,
            emphasis: {
              label: {
                show: true,
                color: "#fff", // 高亮时的标签颜色
              },
              itemStyle: {
                areaColor: "#2386AD", // 高亮时的填充颜色
                borderWidth: 0,
              },
            },
            data: [
              { name: "北京市" /* provinces[that.index] */, selected: true }, // 以湖南省为例
            ],
          },
          {
            type: "lines",
            zlevel: 2,
            symbol: ["none", "arrow"],
            symbolSize: 10,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbolSize: 15,
            },
            lineStyle: {
              normal: {
                color: "#93EBF8",
                width: 2.5,
                opacity: 0.6,
                curveness: 0.2,
              },
            },
            data: [],
          },
        ],
      };
      echarts.registerMap("china", china);
      charts.setOption(option);
      charts.off("click");
      this.charts.on("click", (e) => {
        that.index = provinces.findIndex((item) => item.name === e.name);
        this.initCharts(this.charts);
      });
      //that.timedTasks()
    },
  },
};
</script>
  
  <style>

</style>
  