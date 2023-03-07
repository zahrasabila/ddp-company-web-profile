var luas;
var keliling;
var jari-jari;
var pi;
function hitung() {
	jari-jari = parseFloat(document.getElementById("ipt_jari-jari").value);
	pi = parseFloat(document.getElementById("ipt_lebar").value);
	luas = (pi * jari-jari * jari-jari) ;
	keliling = 2 * pi * jari-jari;
	document.getElementById('opt_luas').value = luas;
	document.getElementById('opt_keliling').value = keliling;
}