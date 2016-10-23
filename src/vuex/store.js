	import Vue from 'vue'
	import Vuex from 'vuex'

	// 告诉 vue “使用” vuex
	Vue.use(Vuex)




	// 创建一个对象来保存应用启动时的初始状态
	const state = {
		// TDO: 放置初始状态

		//publish界面的store,type的状态
		publish:{
			    checkone:true,
				checktwo:false,
				checkthree:false,
				checkfour:false,
				caption:'',
				price:'',
				description:'',
				integration:'',
				sellerName:'',
				sellerNumber:'',
				sellerSchool:'',
				able:'disabled',
				publishStyle:{
					opacity:0.3,
				},
				goodsState:false,//商品信息列表是否完成
				sellerState:false,//卖家信息列表是否完成
		}
		        

	}


	// 创建一个对象存储一系列我们接下来要写的 mutation 函数
	const mutations = {
		// TDO: 放置我们的状态变更函数

		CHOOSE:function(state,amount){
			if (amount==2) {
				state.publish.checkone=false;
				state.publish.checktwo=true;
				state.publish.checkthree=false;
				state.publish.checkfour=false;
				state.publish.caption='';
				state.publish.price='';
				state.publish.description='';
			}
			else if (amount==3) {
				state.publish.checkone=false;
				state.publish.checktwo=false;
				state.publish.checkthree=true;
				state.publish.checkfour=false;
				state.publish.caption='';
				state.publish.price='';
				state.publish.description='';
			}
			else if(amount==4) {
				state.publish.checkone=false;
				state.publish.checktwo=false;
				state.publish.checkthree=false;
				state.publish.checkfour=true;
				state.publish.caption='';
				state.publish.price='';
				state.publish.description='';
			}
			else {
				state.publish.checkone=true;
				state.publish.checktwo=false;
				state.publish.checkthree=false;
				state.publish.checkfour=false;
				state.publish.caption='';
				state.publish.price='';
				state.publish.description='';
			}
		},
		RESET:function(state){
			state.publish={
				checkone:true,
				checktwo:false,
				checkthree:false,
				checkfour:false,
				caption:'',
				price:'',
				description:'',
				sellerName:'',
				sellerNumber:'',
				sellerSchool:'',
				able:'disabled',
				publishStyle:{
					opacity:0.3,
				}
			}
		},
		SETCAPTION:function(state,value){
			state.publish.caption=value
		},
		SETPRICE:function(state,value){
			state.publish.price=value
		},
		SETDESCRIPTION:function(state,value){
			state.publish.description=value
		},
		SETSELLERNAME:function(state,value){
			state.publish.sellerName=value
		},
		SETSELLERNUMBER:function(state,value){
			state.publish.sellerNumber=value
		},
		SETSELLERSCHOOL:function(state,value){
			state.publish.sellerSchool=value
		},
		SETGOODSSTATETRUE:function(state){
			state.publish.goodsState=true;
			if (state.publish.sellerState) {
				state.publish.able=false;
				state.publish.publishStyle.opacity='1';
			}else{
				state.publish.able='disabled';
				state.publish.publishStyle.opacity='0.3';
			}
		},
		SETGOODSSTATEFALSE:function(state){
			state.publish.goodsState=false;
			state.publish.able='disabled';
			state.publish.publishStyle.opacity='0.3';
		},
		SETSELLERSTATETRUE:function(state){
			state.publish.sellerState=true;
			if (state.publish.goodsState) {
				state.publish.able=false;
				state.publish.publishStyle.opacity='1';
			}else{
				state.publish.able='disabled';
				state.publish.publishStyle.opacity='0.3';
			}
		},
		SETSELLERSTATEFALSE:function(state){
			state.publish.sellerState=false;
			state.publish.able='disabled';
			state.publish.publishStyle.opacity='0.3';
		},
	}

	// 整合初始状态和变更函数，我们就得到了我们所需的 store
	// 至此，这个 store 就可以连接到我们的应用中
	export default new Vuex.Store({
		state,
		
		mutations,
		 // strict: true
	})
