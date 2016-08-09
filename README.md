### react-router里实现页面跳转用link

### 路由在激活状态的设置
```
activeStyle={{color: 'red'}}
```

### 根目录一直处于激活状态(如App.js)，使子路由激活时，根目录不变

```
onlyActiveOnIndex={true}
```

#### SPA

单页面应用，为移动互联网时代而生，singl page application 单页面应用

#### URL

统一资源定位符

#### json数据保存到github，用ajax请求获取

json 可用key值进行循环获取数据
```
var obj = {};
for(var k in obj) {

    //遍历对象，k即为key，obj[k]为当前k对应的值
    console.log(obj[k]);

}
```
#### 路由变量 params from react-router

在routes里配置
```
<Route path="blog/:title" component={Post} />
```
在Post.js中用this.props.params.title获取

#### Post.js里的文件共用一个路由，在posts文件夹下新建.md文件，从github上axios请求获取

#### 解析.md文件，安装marked包，并导入
```
npm i --save marked
```
#### hashHistory引入BlogCard.js 应用push方法
跳转路径的功能
```
handleClick(){
  hashHistory.push(`blog/${this.props.url}`);
}
```
也可以用context推送路由,上下文推送

```
BlogCard.contextTypes = {
  router:React.PropTypes.object.isRequired
}

handleClick(){
    this.context.router.push(`blog/${this.props.url}`);
}
```

### 获取当前路径来更改当前显示内容

```
组件名.contextTypes = {
  router:React.PropTypes.object.isRequired
}
```
