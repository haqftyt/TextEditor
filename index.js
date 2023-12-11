function run(){
    var htmlcode=document.getElementById('html-code').value;
var csscode=document.getElementById('css-code').value;
var jscode=document.getElementById('js-code').value;
var output=document.getElementById('output');
output.contentDocument.body.innerHTML=htmlcode+"<style>"+csscode+"</style>";
output.contentWindow.eval(jscode);
}

