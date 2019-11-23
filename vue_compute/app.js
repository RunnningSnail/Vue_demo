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
		a: 1,
		b: 1,
		k: 0,
		age:20
	},
	methods:{
		/*addAge:function () {
			console.log("addAge");
			this.age++;
		},
		minusAge:function(){
			console.log("minusAge");
			this.age--;
		},*/
		test_a:function (){
			this.a = this.a * 10;
		},
		test_k:function (){
			this.k * 10;
		},
		otherfunc:function(){
			console.log("method中的其他方法");
			return "method中的其他方法";
		},
		addAToAge:function (){
			console.log("addAToAge");
			return this.a + this.age;
		},
		addBToAge:function (){
			console.log("addBToAge");
			return this.b + this.age;
		}
	},
	computed:{
		compute_addAToAge:function (){
			console.log("compute_addAToAge");
			return this.a + this.age;
		},
		compute_addBToAge:function (){
			console.log("compute_addBToAge");
			return this.b + this.age;
		},
		compute_aAndb:function (){
			console.log("compute_aAndb");
			return this.a+this.b;
		}
	}
});