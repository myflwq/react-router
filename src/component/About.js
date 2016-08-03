import React, { PropTypes } from 'react'
import CircularProgress from 'material-ui/CircularProgress';
import getUserInfo from './gitSearch';


class About extends React.Component {
  getStyles() {
     return {
       list: {
         listStyle: 'none',
         margin: '0 auto',
         lineHight:'20px',
       },
       li:{
          float: 'left',
          width:'33.3%',
          textAlign:'center',
          color:''
       },
       span:{
         display:'block',

       },
       img:{
         display:'block',
         margin:'0px auto',
         width:'20%',
         padding:'50px 0'
       },
       loading:{
         paddingTop:'100px',
         margin:'0 auto',width:'100px',height:'100px'
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
      //  console.log(x.gitInfo);
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
       <div>
         <img src={this.state.info.avatar_url} style={styles.img}/>
         <ul style={styles.list}>
           <li style={styles.li}><span style={styles.span}>user</span>{this.state.info.login}</li>
           <li style={styles.li}><span style={styles.span}>followers</span>{this.state.info.followers}</li>
           <li style={styles.li}><span style={styles.span}>following</span>{this.state.info.following}</li>
         </ul>

       </div>;
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
