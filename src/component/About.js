import React, { PropTypes } from 'react'
import CircularProgress from 'material-ui/CircularProgress';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import getUserInfo from './gitSearch';


class About extends React.Component {
  getStyles() {
     return {
       list: {
         listStyle: 'none',
         margin: '0 auto',
         lineHight:'20px',
         overflow:'hidden',
         paddingBottom:'30px'
       },
       li:{
          float: 'left',
          width:'33.3%',
          textAlign:'center',
          color:'#00BCD4',
          fontSize:'24px',
          opacity:'0.7'
       },
       span:{
         display:'block',
         color:'#405658',

       },
       img:{
         display:'block',
         margin:'0px auto',
         padding:'50px',
         width:'35%',
       },
       loading:{
         paddingTop:'100px',
         margin:'0 auto',width:'100px',height:'100px'
       },
       card:{
         width:'80%',
         margin:'50px auto',

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
       console.log(x.gitInfo);
       this.setState({
         info:x.gitInfo,
         wait:false
       })
     });
   }
   render () {
     const styles = this.getStyles();
     let x = <div style={styles.loading}><CircularProgress size={1.5} /></div>;
     let y =
       <Card style={styles.card}>
        <img src={this.state.info.avatar_url} style={styles.img}/>
        <ul style={styles.list}>
          <li style={styles.li}>{this.state.info.login}<span style={styles.span}>userName</span></li>
          <li style={styles.li}>{this.state.info.followers}<span style={styles.span}>followers</span></li>
          <li style={styles.li}>{this.state.info.following}<span style={styles.span}>following</span></li>
        </ul>

      </Card>;
     return(
       <div>
         {
           this.state.wait ? x : y
         }
       </div>

     )
   }
 }

export default About;
