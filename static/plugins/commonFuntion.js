

// 解析url
function getParam (name) {
	var url=location.search;//获取url中"?"符后面的字符串(包括"?")
	var theRequest=new Object() ;
	if (url.indexOf("?") != -1) {
		var str =url.substr(1);
		strs=str.split("&");
		for(var i=0;i<str.length;i++){
			theRequest[strs[i].split("=")[0]]=decodeURIComponent(strs[i].split("=")[1]);
		}
	}
	return theRequest[name];
}