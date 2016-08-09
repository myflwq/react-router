let option = {}
option = {
    color: ['#3398DB'],
    title:{
      left: 'center',
      text:'个人技能展示',
      textStyle : {
        color: '#3398DB',
      }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['PS', 'React', 'H5', 'CSS3', 'JS', 'Ajax'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            max :'100',
            type : 'value',
            name:'百分数(%)',
            nameTextStyle:{
              color:'#2196F3',
              fontSize:'16'
            }
        }
    ],
    series : [
        {
            name:'掌握程度',
            type:'bar',
            barWidth: '60%',
            data:[50, 75, 90, 85, 85, 80]
        }
    ]
};
export default option;
