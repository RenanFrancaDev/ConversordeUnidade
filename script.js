
function alternate(){
    let changeDisplay = document.getElementById("container");
    let changeDisplay2 = document.getElementById("container2");
    // let backColor = document.getElementsByTagName("body");
    let backColor = document.getElementById("idbody");

    changeDisplay.style.display = 'block';
    changeDisplay2.style.display = 'none';
    backColor.style.backgroundColor = '#4b91e6';

}

function alternate2(){
    let changeDisplay = document.getElementById("container");
    let changeDisplay2 = document.getElementById("container2");
    let backColor = document.getElementById("idbody");

    changeDisplay.style.display = 'none';
    changeDisplay2.style.display = 'block';
    backColor.style.backgroundColor = '#f6f88ef3';
}

let unitTyped = document.getElementById("unit_nec");
let unitSelec = document.getElementById("unit_select");
let unitNec = document.getElementById("unit_necessary");


function calc(){
    
    let valueTyped = unitTyped.value;
    let valueSelec = unitSelec.value;
    let valueNec = unitNec.value;

    // let valueTyped2 = unitTyped2.value;
    // let valueSelec2 = unitSelec2.value;
    // let valueNec2 = unitNec2.value;

    let result = unit_calc(valueSelec, valueNec, valueTyped);

    final_result.innerHTML = `<p>${result+" "+valueNec}</p>`;
    console.log(valueSelec);
    console.log(valueNec);
}
    
function unit_calc(valueSelec, valueNec, valueTyped){

    if(valueSelec == "L" && valueNec== "L"){
         return valueTyped/1;
    }else if(valueSelec == "L" && valueNec== "ml"){
        return valueTyped*1000;
    }else if(valueSelec == "L" && valueNec== "m3"){
        return valueTyped/1000;
    }else if(valueSelec == "ml" && valueNec== "L"){
        return valueTyped/1000;
    }else if(valueSelec == "ml" && valueNec== "ml"){
        return valueTyped/1;
    }else if(valueSelec == "ml" && valueNec== "m3"){
        return valueTyped/1000000;
    }else if(valueSelec == "m3" && valueNec== "L"){
        return valueTyped*1000;
    }else if(valueSelec == "m3" && valueNec== "ml"){
        return valueTyped*1000000;
    }else if(valueSelec == "m3" && valueNec== "m3"){
        return valueTyped/1;
    }

    else if(valueSelec == "K" && valueNec== "K"){
        return valueTyped/1;
   }else if(valueSelec == "K" && valueNec== "m"){
       return valueTyped*1000000;
   }else if(valueSelec == "K" && valueNec== "u"){
       return valueTyped*1000000000;
   }else if(valueSelec == "m" && valueNec== "K"){
       return valueTyped/1000000;
   }else if(valueSelec == "m" && valueNec== "m"){
       return valueTyped/1;
   }else if(valueSelec == "mm" && valueNec== "u"){
       return valueTyped*1000;
   }else if(valueSelec == "u" && valueNec== "K"){
       return valueTyped/1000000;
   }else if(valueSelec == "u" && valueNec== "m"){
       return valueTyped/1000;
   }else if(valueSelec == "u" && valueNec== "u"){
       return valueTyped/1;
   }
}

let unitTyped2 = document.getElementById("unit_nec2");
let unitSelec2 = document.getElementById("unit_select2");
let unitNec2 = document.getElementById("unit_necessary2");

function calc2(){
    
    let valueTyped = unitTyped2.value;
    let valueSelec = unitSelec2.value;
    let valueNec = unitNec2.value;


    let result = unit_calc2(valueSelec, valueNec, valueTyped);

    final_result2.innerHTML = `<p>${result+" "+valueNec}</p>`;

}
    
function unit_calc2(valueSelec, valueNec, valueTyped){


    if(valueSelec == "K" && valueNec== "K"){
        return valueTyped/1;
   }else if(valueSelec == "K" && valueNec== "m"){
       return valueTyped*1000000;
   }else if(valueSelec == "K" && valueNec== "u"){
       return valueTyped*1000000000;
   }else if(valueSelec == "m" && valueNec== "K"){
       return valueTyped/1000000;
   }else if(valueSelec == "m" && valueNec== "m"){
       return valueTyped/1;
   }else if(valueSelec == "m" && valueNec== "u"){
       return valueTyped*1000;
   }else if(valueSelec == "u" && valueNec== "K"){
       return valueTyped/1000000;
   }else if(valueSelec == "u" && valueNec== "m"){
       return valueTyped/1000;
   }else if(valueSelec == "u" && valueNec== "u"){
       return valueTyped/1;
   }
   else{
    return 28;
   }
   
}




    
    

