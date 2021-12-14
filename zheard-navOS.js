//<![CDATA[
function zh-avisoOS(a) {
	var td;
	var es_iphone = navigator.userAgent.toLowerCase().indexOf("iphone") > -1;
	if (es_iphone) {
		var td = "Safari"
	}
	var es_android = navigator.userAgent.toLowerCase().indexOf("android") > -1;
	if (es_android) {
		var td = "Google Chrome"
	}
	alert("El navegador de " + a + " puede no admitir que subas o descargues fotos. Intenta usar " + td + " para utilizar nuestros recursos Online")
	$("#tad-taoanh").after("<div class='alert alert-danger mt-2'><i class='fas fa-exclamation-triangle'></i> El navegador de " + a + " puede no admitir que subas o descargues fotos. Intenta usar " + td + " para crear fotos!<br/>Ve a la parte superior de la derecha y da click en los puntos suspensivos y selecciona: Abrir en el navegador.</div>")
}
var es_zalo = navigator.userAgent.toLowerCase().indexOf("zalo") > -1;
if (es_zalo) {
	zh-avisoOS("Zalo")
};
var es_fb = navigator.userAgent.toLowerCase().indexOf("fb") > -1;
if (es_fb) {
	zh-avisoOS("Facebook")
};
var es_ins = navigator.userAgent.toLowerCase().indexOf("instagram") > -1;
if (es_ins) {
	zh-avisoOS("Instagram")
};
var es_tw = navigator.userAgent.toLowerCase().indexOf("tw") > -1;
if (es_tw) {
	zh-avisoOS("Twitter")
};

var es_gsa = navigator.userAgent.toLowerCase().indexOf('gsa') > -1;
if (es_gsa) {
	$("#tad-taoanh").after("<div class='alert alert-danger mt-3'><i class='fas fa-exclamation-circle'></i> Utiliza el navegador Safafi para descargar la imagen creada.</div>")
}
var es_crios = navigator.userAgent.toLowerCase().indexOf('crios') > -1;
if (es_crios) {
	$("#tad-taoanh").after("<div class='alert alert-danger mt-3'><i class='fas fa-exclamation-circle'></i> Utiliza el navegador Safafi para descargar la imagen creada.</div>")
}
//
var vitriss = navigator.userAgent.toLowerCase().indexOf("samsungbrowser");
var pbss = navigator.userAgent.toLowerCase().slice(vitriss + 15, vitriss + 16)
var es_ssbr = vitriss > -1;
if (es_ssbr) {
	if (pbss < 4) {
		alert("La versión del navegador Samsung es demasiado antigua, utilice el navegador Google Chrome para crear fotos");
		$("#tad-taoanh").after("<div class='alert alert-danger mt-2'><i class='fas fa-exclamation-triangle'></i> La versión del navegador Samsung es demasiado antigua, utilice el navegador Google Chrome para crear fotos</div>");
	}
}
//
var vitrisc = navigator.userAgent.toLowerCase().indexOf("chrome/");
var pbsc = navigator.userAgent.toLowerCase().slice(vitrisc + 7, vitrisc + 8)
var es_crlow = vitrisc > -1;
if (es_crlow) {
	if (pbsc < 8) {
		alert("La versión de Chrome es demasiado antigua. Actualiza la aplicación para crear mejores fotos.");
		$("#tad-taoanh").after("<div class='alert alert-danger mt-2'><i class='fas fa-exclamation-triangle'></i> La versión de Chrome es demasiado antigua. Actualiza la aplicación para crear mejores fotos.</div>");
	}
}
//
         //]]>
