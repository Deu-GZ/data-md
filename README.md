### vDcenter

*数据处理中心，处理前后端分离问题的字段，结构问题。*

#### 快速上手

npm install data-md --save

import Dcenter from 'vDcenter'

##### 根目录下创建 vmodel 文件夹

- 创建文件  vmodel/page.js

###### 在page.js 导出数据模型

```javascript
export default {
	name: {type: Date, key: '_name', defaults: 1},
	title: {type: String, defaults: '这里是vmodel'},
	sex: {type: Number, defaults: 1, expect: ['女', '男']}
}
```

- type 数据类型
- key  对应的后端接口下标
- defaults  默认值
- expect    期望值 

##### 注意

1. expect不是一个函数时 type 存在隐藏类行转换
2. 当expect是函数时，拥有一个参数，当前值

#### 重点介绍  defaults 属性和 expect 属性

##### defaults 属性 默认值

- 当 key属性 不存在时   defaults = 模拟数据
- 当 key属性  存在时      key对应的后端数据为null 空 或 undefined 时  defaults == 默认值

##### expect 属性 

你所期望完成的快速转换 例如 字符串的裁剪，求和， 求最大值，求最小值，平均值 ， 日期格式的转换， 排序等。

###### expect 是函数

###### expect 是快速操作类

