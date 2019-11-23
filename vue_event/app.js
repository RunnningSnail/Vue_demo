//实例化VUE对象
/**
 * new Vue的V 要大写！！
 * el : 固定写法。element 需要获取的元素。一定是html根容器中的元素
 * data: 用于数据的存储
 * methods:用于存储各种方法
 * data-binding:给属性绑定对应的值
 * 		v-bind,v-html
 * 		
 * @type {[type]}
 */
new Vue({
	el:"#vue-app",
	data:{
		name:"RunnningSnail"
	},
	methods:{
		logName:function(event){
			console.log(event);
			this.name += event.key;
		},
		logAge:function (){

		}
	}
});