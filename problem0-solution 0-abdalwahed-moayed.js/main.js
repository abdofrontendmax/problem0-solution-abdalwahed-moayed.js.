// ********** تم الحل بخطوتيين ************




 let  contentFridge = ["apple","banana","orange","egg","cake"]     //محتويات الثلاجة


function searchltem(){
    
    let txt = document.getElementById("txt").value;  
    let ind = contentFridge.indexOf(txt)

  

    if(ind !== -1){
        document.write( `the ${txt} find in fridge ${ind + 1} position`)
       
    }
    else{
        document.write(-1)
    }

}
// * الحل النهائي للخطوة الاولى






// * الحل بالخطوة الثانية
function searchItem2(){

    let txt2 = document.getElementById("txt").value;  

    for(i=0 ; i<contentFridge.length ; i++){
        if(txt2 == contentFridge[i]){
            document.write(`the ${contentFridge[i]} is in  ${i+1} postion`)
            document.write("<br>")
            
        }  
    }
        
}

