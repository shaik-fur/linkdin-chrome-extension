// for(var i=0;i<5;i++){
// localStorage.setItem("cur", i);
// }
var count =1;
document.getElementById("connect").addEventListener("click", myFunction);
    function myFunction(){
        if(document.getElementById("connect").innerText === 'Connect'){
        document.getElementById("connect").innerText="stop connecting";}
        else{
            document.getElementById("connect").innerText="Connect";
        }
        
        if(count == 1)
        {document.getElementById("connect").style.backgroundColor = 'darkgray';
        count =0;}
        else{
            count = 1;
            document.getElementById("connect").style.backgroundColor = 'lightslategray';
        }
        try{
            
            chrome.windows.getCurrent(function (currentWindow) {
                
                chrome.tabs.query({ active: true, windowId: currentWindow.id }, function (activeTabs) {
                    if(document.getElementById("connect").innerText==="stop connecting"){
                        chrome.scripting.executeScript({
                            target: {tabId: activeTabs[0].id, allFrames: true},
                            files: ['backend.js'],
                        });
                    }else{
                        chrome.scripting.executeScript({
                            target: {tabId: activeTabs[0].id, allFrames: true},
                            files: ['exit.js'],
                    });
                    }
                });
            });
       
    }catch(e){
        console.log(e);
    }        
};
