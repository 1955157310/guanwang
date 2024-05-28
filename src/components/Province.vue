<template>
  <div ref="mapContainers" style="width: 100%; height: 100%"></div>
</template>

<script>
import * as echarts from "echarts";
/* import 北京市 from "../assets/mapData/北京市.json";
import 天津市 from "../assets/mapData/天津市.json"; */
export default {
  props: {
    children: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      default: "北京市",
    },
  },
  data() {
    return {
      index: 0,
      charts: null,
      timeOut: null,
    };
  },
  mounted() {
    this.charts = echarts.init(this.$refs.mapContainers);
    // this.initCharts(this.charts);
  },
  watch: {
    children() {
      this.index = 0;
      clearTimeout(this.timeOut);
      this.timeOut = null;
      this.initCharts(this.charts);
    },
  },
  methods: {
    initCharts(charts) {
      const that = this;
      const option = {
        // backgroundColor: "#0E2152",
        geo: {
          map: `${that.name}`,
          // 设置高亮
          regions: [
            {
              name: that.children[that.index].name || "北京",
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
              {
                name: `${that.name || ""}` /* provinces[that.index] */,
                selected: true,
              }, // 以湖南省为例
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
      echarts.registerMap(
        `${that.name || "北京"}`,
        require(`@/assets/mapData/${that.name || "北京"}.json`)
      );
      charts.setOption(option);
      that.$emit('city', that.children[that.index].name, that.children[that.index].adcode)
      charts.off('click');
      that.charts.on("click", (e) => {
        clearTimeout(that.timeOut);
        that.timeOut = null;
        that.index = that.children.findIndex((item) => item.name === e.name);
        that.initCharts(this.charts);
      });
      that.timedTasks();
    },
    timedTasks() {
      const that = this;
      clearTimeout(that.timeOut);
      that.timeOut = null;
      that.timeOut = setTimeout(() => {
        if (this.index < that.children.length - 1) {
          that.index++;
          that.initCharts(that.charts);
        } else {
          that.index = 0;
          clearTimeout(that.timeOut);
          that.timeOut = null;
          that.$emit("switchs");
        }
      }, 1000 * 5);
    },
  },
};
</script>
