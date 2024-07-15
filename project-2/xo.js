var val="x";
function update(obj){
    if(obj.innerHTML==""){
        if(val=="x"){
            obj.innerHTML=val;
            check(obj);
            val="o";
        }else if(val=="o"){
            obj.innerHTML=val;
            check(obj);
            val="x";
        }
        // check(obj);
    }
}

function reset(){
    for(let i=1;i<10;i++){
        document.getElementById(`co${i}`).innerHTML = " ";
    }
    val="x";
}

function check(obj){
    var valu=obj.innerHTML;
    if(document.getElementById("co1").innerHTML == valu && document.getElementById("co2").
    innerHTML == valu && document.getElementById("co3").innerHTML == valu){
        alert(`${valu} wins`);
        reset();
        return;
        }
    else if(document.getElementById("co1").innerHTML == valu && document.getElementById("co5").
        innerHTML == valu && document.getElementById("co9").innerHTML == valu){
            alert(`${valu} wins`);
            reset();
            return;
            }
    else if(document.getElementById("co1").innerHTML == valu && document.getElementById("co4").
        innerHTML == valu && document.getElementById("co7").innerHTML == valu){
            alert(`${valu} wins`);
            reset();
            return;
            }
    else if(document.getElementById("co2").innerHTML == valu && document.getElementById("co5").
        innerHTML == valu && document.getElementById("co8").innerHTML == valu){
            alert(`${valu} wins`);
            reset();
            return;
            }
    else if(document.getElementById("co3").innerHTML == valu && document.getElementById("co6").
        innerHTML == valu && document.getElementById("co9").innerHTML == valu){
            alert(`${valu} wins`);
            reset();
            return;
            }
    else if(document.getElementById("co3").innerHTML == valu && document.getElementById("co5").
        innerHTML == valu && document.getElementById("co7").innerHTML == valu){
            alert(`${valu} wins`);
            reset();
            return;
            }
    else if(document.getElementById("co4").innerHTML == valu && document.getElementById("co5").
        innerHTML == valu && document.getElementById("co6").innerHTML == valu){
            alert(`${valu} wins`);
            reset();
            return;
            }
    else if(document.getElementById("co7").innerHTML == valu && document.getElementById("co8").
        innerHTML == valu && document.getElementById("co9").innerHTML == valu){
            alert(`${valu} wins`);
            reset();
            return;
            }
                                            
}