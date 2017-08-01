	import Vue from 'vue'
	import Vuex from 'vuex'

	// 告诉 vue “使用” vuex
	Vue.use(Vuex)




	// 创建一个对象来保存应用启动时的初始状态
	const state = {
		// TDO: 放置初始状态

		//publish界面的store,type的状态
		publish:{
			    checkone:true,//选择发布类型的时候，
				checktwo:false,//对应的四个div的v-show的值
				checkthree:false,
				checkfour:false,
				caption:'',//标题内容的data，通过getters返回到goodsinfo界面
				price:'',
				description:'',
				// integration:'',
				sellerName:'',//卖家信息界面的联系人
				sellerNumber:'',//手机号码
				sellerSchool:'',
				able:'disabled',//发布按钮的是否可用
				publishStyle:{
					opacity:0.3,
				},
				goodsStateOne:false,//商品列表信息填写表格一
				goodsStateTwo:false,//商品列表信息填写表格二
				goodsStateThree:false,
				sellerStateOne:false,//卖家信息表格一状态
				sellerStateTwo:false,//卖家信息表格二状态
				sellerStateThree:false,
				goodsState:false,//商品信息列表是否完成
				sellerState:false,//卖家信息列表是否完成
		}
		        

	}


	// 创建一个对象存储一系列我们接下来要写的 mutation 函数
	const mutations = {
		// TDO: 放置我们的状态变更函数

		//发布类型的四个radio触发的函数
		CHOOSE:function(state,amount){
			if (amount==2 ) {
				if (!state.publish.checktwo) {
					//防止选择了个人求购又点击个人求购的双重点击
					state.publish.checkone=false;
					state.publish.checktwo=true;
					state.publish.checkthree=false;
					state.publish.checkfour=false;
					state.publish.caption='';
					state.publish.price='';
					state.publish.description='';
					state.publish.able='disabled';
					state.publish.publishStyle.opacity='0.3';
					state.publish.goodsStateOne=false;
					state.publish.goodsStateThree=false;
					state.publish.goodsStateTwo=false;
				}
				
			}
			else if (amount==3) {
				if (!state.publish.checkthree) {
					state.publish.checkone=false;
					state.publish.checktwo=false;
					state.publish.checkthree=true;
					state.publish.checkfour=false;
					state.publish.caption='';
					state.publish.price='';
					state.publish.description='';
					state.publish.able='disabled';
					state.publish.publishStyle.opacity='0.3';
					state.publish.goodsStateOne=false;
					state.publish.goodsStateThree=false;
					state.publish.goodsStateTwo=false;
				}
				
			}
			else if(amount==4) {
				if (!state.publish.checkfour) {
					state.publish.checkone=false;
					state.publish.checktwo=false;
					state.publish.checkthree=false;
					state.publish.checkfour=true;
					state.publish.caption='';
					state.publish.price='';
					state.publish.description='';
					state.publish.able='disabled';
					state.publish.publishStyle.opacity='0.3'
					state.publish.goodsStateOne=false;
					state.publish.goodsStateThree=false;
					state.publish.goodsStateTwo=false;
				}
				
			}
			else {
				if (!state.publish.checkone) {
					state.publish.checkone=true;
					state.publish.checktwo=false;
					state.publish.checkthree=false;
					state.publish.checkfour=false;
					state.publish.caption='';
					state.publish.price='';
					state.publish.description='';
					state.publish.able='disabled';
					state.publish.publishStyle.opacity='0.3';
					state.publish.goodsStateOne=false;
					state.publish.goodsStateThree=false;
					state.publish.goodsStateTwo=false;
				}
				
			}
		},
		//返回caption，description,price,的值
		SETCAPTION:function(state,value){
			state.publish.caption=value
		},
		SETPRICE:function(state,value){
			state.publish.price=value
		},
		SETDESCRIPTION:function(state,value){
			state.publish.description=value
		},
		//返回商品信息的状态值为true或者false
		SETSTATEONETRUE:function(state){
			state.publish.goodsStateOne=true;
		},
		SETSTATEONEFALSE:function(state){
			state.publish.goodsStateOne=false;
		},
		SETSTATETWOTRUE:function(state){
			state.publish.goodsStateTwo=true;
			
		},
		SETSTATETWOFALSE:function(state){
			state.publish.goodsStateTwo=false;
		},
		SETSTATETHREETRUE:function(state){
			state.publish.goodsStateThree=true;
			// alert(state.publish.stateThree)
		},
		SETSTATETHREEFALSE:function(state){
			state.publish.goodsStateThree=false;
		},
		//返回卖家姓名，手机号码，交易地址信息
		SETSELLERNAME:function(state,value){
			state.publish.sellerName=value
		},
		SETSELLERNUMBER:function(state,value){
			state.publish.sellerNumber=value
		},
		SETSELLERSCHOOL:function(state,value){
			state.publish.sellerSchool=value
		},
		//返回卖家信息的状态值为true或者false
		SETSELLERSTATEONETRUE:function(state){
			state.publish.sellerStateOne=true;

		},
		SETSELLERSTATEONEFALSE:function(state){
			state.publish.sellerStateOne=false;
		},
		SETSELLERSTATETWOTRUE:function(state){
			state.publish.sellerStateTwo=true;
		},
		SETSELLERSTATETWOFALSE:function(state){
			state.publish.sellerStateTwo=false;
		},
		SETSELLERSTATETHREETRUE:function(state){
			state.publish.sellerStateThree=true;
		},
		SETSELLERSTATETHREEFALSE:function(state){
			state.publish.sellerStateThree=false;
		},
		//当商品信息三个状态为true时，返回此函数，然后判断联系人状态是否为true
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
		//当卖家信息三个状态为true时，返回此函数，然后判断商品信息状态是否为true
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
		//重置按钮的实现
		RESET:function(state){
				state.publish.caption='';
				state.publish.price='';
				state.publish.description='';
				state.publish.sellerName='';
				state.publish.sellerName='';
				state.publish.sellerNumber='';
				state.publish.sellerSchool='';
				state.publish.able='disabled';
				state.publish.publishStyle.opacity='0.3';
				state.publish.goodsStateOne=false;
				state.publish.goodsStateTwo=false;
				state.publish.goodsStateThree=false;
				state.publish.sellerStateOne=false;
				state.publish.sellerStateTwo=false;
				state.publish.sellerStateThree=false;
				state.publish.goodsState=false;
				state.publish.sellerState=false;
			
		},
	}

	// 整合初始状态和变更函数，我们就得到了我们所需的 store
	// 至此，这个 store 就可以连接到我们的应用中
	export default new Vuex.Store({
		state,
		
		mutations,
		 // strict: true
	})
