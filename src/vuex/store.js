	import Vue from 'vue'
	import Vuex from 'vuex'

	// 告诉 vue “使用” vuex
	Vue.use(Vuex)




	// 创建一个对象来保存应用启动时的初始状态
	const state = {
		// TDO: 放置初始状态

		//publish界面的store,type的状态
		checkone:true,
		checktwo:false,
		checkthree:false,
		checkfour:false,

	}

	// 创建一个对象存储一系列我们接下来要写的 mutation 函数
	const mutations = {
		// TDO: 放置我们的状态变更函数

		CHOOSE:function(state,amount){
			if (amount==2) {
				state.checkone=false;
				state.checktwo=true;
				state.checkthree=false;
				state.checkfour=false;
			}
			else if (amount==3) {
				state.checkone=false;
				state.checktwo=false;
				state.checkthree=true;
				state.checkfour=false;
			}
			else if(amount==4) {
				state.checkone=false;
				state.checktwo=false;
				state.checkthree=false;
				state.checkfour=true;
			}
			else {
				state.checkone=true;
				state.checktwo=false;
				state.checkthree=false;
				state.checkfour=false;
			}
		}
	}

	// 整合初始状态和变更函数，我们就得到了我们所需的 store
	// 至此，这个 store 就可以连接到我们的应用中
	export default new Vuex.Store({
		state,
		mutations
	})
