window.onload = function() {
    document.getElementById('saveLine').onclick = function() {
        var value = document.getElementById('saveLine').value;
        //alert(value);`
        document.getElementById('saveLine1').onclick = function() {
        var value = document.getElementById('saveLine').value;

        chrome.storage.sync.set({"myLine": value}, function(){
        // alert('Success!');
        console.log(value);
    }); //myLine stores whatever is in the variable value
    
    document.getElementById('get').onclick = function() {
        chrome.storage.sync.get('myLine', function(data) {
            alert(data.myLine);
        });
    }
    }
}


var lang='saveLine1';

$('#saveLine').click(function (){
    alert(lang);
    lang='saveLine1';
    alert(lang);
});



