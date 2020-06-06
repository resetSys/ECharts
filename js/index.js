function setTime() {
  var date = new Date();
  var year = date.getFullYear();
  var mounth = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
  var day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
  var hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
  var munite = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
  var second = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
  return year + '年' + mounth + '月' + day + '日' + ' ' + hour + ':' + munite + ':' + second;
}
var conHeTime = $('#con-he-time');
conHeTime.text(setTime());
setInterval(function () {
  conHeTime.text(setTime());
}, 1000);

/**panal图表 */
(function () {
  var myChart = echarts.init(document.getElementById('panal1'));
  var option = {
    color: ['#2f89cf'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '10px',
      top: '10px',
      right: '10px',
      bottom: '10px',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
        axisTick: {
          alignWithLabel: true
        },
        //修改颜色和字体
        axisLabel: {
          color: 'rgba(255,255,255,0.6)',
          fontSize: '12px'
        },
        //坐标轴样式
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: 'rgba(255,255,255,0.6)',
          fontSize: '12px'
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.1)',
            width: 2
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.1)",
            width: 1
          }
        }
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '35%',
        data: [10, 52, 200, 334, 390, 330, 220],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };
  myChart.setOption(option);
  //图标自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  });
})();
/**学习图 */
; (function () {
  var colorList =  ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  var myChart = echarts.init(document.getElementById('panal4'));
  var option = {
    //鼠标悬停提示
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    //网格
    grid: {
      left: '3%',
      right: '3%',
      bottom: '3%',
      containLabel: true,
    },
    //x轴
    xAxis: {
      show:false,
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    //y轴
    yAxis: [{
      axisLabel:{
        color:'#fff',
      },
      //不显示刻度
      axisTick:false,
      axisLine:{
        show:false
      },
      type: 'category',
      data: ['HTML5', 'CSS3', 'JAVASCRIPT', 'VUE', 'NOOE']
    },{
      axisLabel:{
        color:"#fff"
      },
      //不显示刻度
      axisTick:false,
      axisLine:{
        show:false
      },
      type: 'category',
      data: ['HTML5', 'CSS3', 'JAVASCRIPT', 'VUE', 'NOOE'],
    }
    ],
    series: [
      {
        barWidth:'30%',
        itemStyle:{
          barBorderRadius:5,
          color:function (e) {
            // dataIndex
            return colorList[e.dataIndex];
          }
        },
        inverse:true,
        yAxisIndex:0,
        name: '2011年',
        type: 'bar',
        data: [70, 34, 60, 78, 69],
        //添加文本标签
        label:{
          show:true,
          position:"inside",
          formatter:"{c}%"
        }
      },
      {
        name:'框',
        type:'bar',
        yAxisIndex:1,//堆叠序列
        inverse:true,//反转数据
        barCategoryGap:50,
        data:[100, 100, 100, 100, 100],
        barWidth:'40%',
        itemStyle:{
          color:'none',
          borderColor:'#00c1de',
          borderWidth:3,
          barBorderRadius:7,
        }
      }
    ]
  };
  myChart.setOption(option);
  //图标自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  });
})();
