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
