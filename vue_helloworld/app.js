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
		name:"RunnningSnail",
		age:20,
		website:"https://www.baidu.com",
		websiteTag:"<a href='https://www.baidu.com'>百度一下</a>",
		x:0,
		y:0
	},
	methods:{
		greet:function(time){
			return 'Good '+time+','+this.name;
		},
		addAge:function (param) {
			if (param == null) {
				this.age++;
			} else {
				this.age+=param;
			}
		},
		minusAge:function(){
			this.age--;
		},
		showXY:function (event){
			/*console.log(event);*/
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		stop:function (event){
			event.stopPropagation();
		}
	}
});
