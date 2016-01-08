var unJsPorDia=(function(w,undefined){
	function isNumber(n){
		return (!isNaN(parseFloat(n))&&isFinite(n))?true:false;
	}
	return {
		"isNumber":isNumber
	}
})(window);
window.addEventListener("load",function(){
	var run=document.getElementById('run');
	run.addEventListener("click",function(){
		var number=parseFloat(document.getElementById('number').value);
		if(unJsPorDia.isNumber(number)){
			alert(number+' Es un numero');
		}
		else{
			alert(number+' No es un numero');
		}
	});
});
