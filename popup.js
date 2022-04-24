// for(var i=0;i<5;i++){
// localStorage.setItem("cur", i);
// }
document.getElementById("connect").addEventListener("click", myFunction);
    function myFunction(){
        try{
            
            chrome.windows.getCurrent(function (currentWindow) {
                
                chrome.tabs.query({ active: true, windowId: currentWindow.id }, function (activeTabs) {
                    // console.log(activeTabs);
                        chrome.scripting.executeScript({
                            target: {tabId: activeTabs[0].id, allFrames: true},
                            files: ['backend.js'],
                        });
                
                });
            });
       
    }catch(e){
        console.log(e);
    }        
};
