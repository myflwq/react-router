import React, { PropTypes } from 'react'
import CircularProgress from 'material-ui/CircularProgress';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import getUserInfo from './About/gitSearch';
import echarts from 'echarts';
import option from './About/Echarts';

class About extends React.Component {
  getStyles() {
     return {
       loading:{
         margin:'0 auto',width:'130px',
         height:'200px'
       }
     }
   }
   constructor(){
     super();
     this.state={
       info:{},
       wait:true
     }
   }
   componentDidMount(){
     getUserInfo().then((x) => {
       this.setState({
         info:x.gitInfo,
         wait:false
       })
     });
     var myChart = echarts.init(document.getElementById('echarts'));
    //console.log(option)
    myChart.setOption(option)
   }
   render () {
     const styles = this.getStyles();
     let x = <div style={styles.loading}><p>正在从GitHub上获取数据......</p><CircularProgress size={1.5} /></div>;
     let y =
     <div className='user-info'>
       <img src={this.state.info.avatar_url} style={styles.img}/>
       <ul >
         <li ><b>{this.state.info.login}</b><span >userName</span></li>
         <li ><b>{this.state.info.followers}</b><span >followers</span></li>
         <li ><b>{this.state.info.following}</b><span >following</span></li>
       </ul>
     </div>
     return(
       <div className='account'>
         <Card className="content">
           {
             this.state.wait ? x : y
           }
         </Card>
         <div id="echarts"></div>
       </div>

     )
   }
 }

export default About;
