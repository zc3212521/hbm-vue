<template>
  <div class="chart-wrap">
    <a-card>
      <a-card-grid style="width: 50%">
        <div id="c1" style="width: 90%;height:400px;"></div>
      </a-card-grid>
      <a-card-grid style="width: 50%">
        <div id="c2" style="width: 100%;height:400px;"></div>
      </a-card-grid>
      <a-card-grid style="width: 50%">
        <div id="c3" style="width: 100%;height:400px;"></div>
      </a-card-grid>
    </a-card>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'chart',
  data () {
    return {
      width: 100,
      c1: null,
      c2: null,
      c3: null,
      c4: null
    }
  },
  mounted () {
    this.c1Init()
    this.c2Init()
    this.c3Init()
    // this.c4Init()
  },
  methods: {
    c1Init () {
      this.c1 = echarts.init(document.getElementById('c1'))
      const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      }
      this.c1.setOption(option)
    },
    c2Init () {
      this.c2 = echarts.init(document.getElementById('c2'))
      const option = {
        angleAxis: {
        },
        radiusAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四'],
          z: 10
        },
        polar: {
        },
        series: [{
          type: 'bar',
          data: [1, 2, 3, 4],
          coordinateSystem: 'polar',
          name: 'A',
          stack: 'a'
        }, {
          type: 'bar',
          data: [2, 4, 6, 8],
          coordinateSystem: 'polar',
          name: 'B',
          stack: 'a'
        }, {
          type: 'bar',
          data: [1, 2, 3, 4],
          coordinateSystem: 'polar',
          name: 'C',
          stack: 'a'
        }],
        legend: {
          show: true,
          data: ['A', 'B', 'C']
        }
      }
      this.c2.setOption(option)
    },
    c3Init () {
      this.c3 = echarts.init(document.getElementById('c3'))
      const option = {
        backgroundColor: '#2c343c',

        title: {
          text: 'Customized Pie',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#ccc'
          }
        },
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 274, name: '联盟广告' },
              { value: 235, name: '视频广告' },
              { value: 400, name: '搜索引擎' }
            ].sort(function (a, b) { return a.value - b.value }),
            roseType: 'radius',
            label: {
              normal: {
                textStyle: {
                  color: 'rgba(255, 255, 255, 0.3)'
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              }
            },
            itemStyle: {
              normal: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200
            }
          }
        ]
      }
      this.c3.setOption(option)
    },
    c4Init () {
      this.c1 = echarts.init(document.getElementById('c4'))
      const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      }
      this.c4.setOption(option)
    }
  }
}
</script>

<style lang="less" scoped>
  .chart-wrap {
    padding: 24px;
    background-color: #fff;
  }
</style>
