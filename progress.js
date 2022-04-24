function progressBar(progressVal,totalPercentageVal = 100) {
    var strokeVal = ((4.64 * 100) /  totalPercentageVal).toFixed(2);
    document.getElementById("prog").style.strokeDasharray = progressVal * (strokeVal) + ' 999';
	var el = document.getElementsByClassName('.progress-text'); 
	document.getElementById('dataprog').setAttribute('data-progress', progressVal);
	var start = new Date().getTime();
  
	setTimeout(function() {
	    var now = (new Date().getTime()) - start;
	    var progress = now / 700;
	    document.getElementById("dataprog").innerHTML = progressVal;
	    if (progress < 1) setTimeout(arguments.callee, 10);
	}, 10);

}       
chrome.runtime.onMessage.addListener(
    function(request, sender, sensResponse){
        if(request.greeting === 'hello'){
            chrome.storage.sync.get(['total', 'cur'], function(e){
                console.log(e.cur, e.total)
                progressBar(e.cur ? e.cur : 0 , e.total? e.total: 100);
            })
            sensResponse({farewell: 'goodbye'});
        }
    }
)

