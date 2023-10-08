function addData(){
    num1=document.forms["add_form"].elements["num1"].value;
    num2=document.forms["add_form"].elements["num2"].value;
    let value1=parseFloat(num1) + parseFloat(num2);
    document.getElementById("add_res1").value=value1;
    }

function subtractData(){
    num3=document.forms["subtract_form"].elements["num3"].value;
    num4=document.forms["subtract_form"].elements["num4"].value;
    let value2=parseFloat(num3) - parseFloat(num4);
    document.getElementById("add_res2").value=value2;
}

function multiplyData(){
    num5=document.forms["multiply_form"].elements["num5"].value;
    num6=document.forms["multiply_form"].elements["num6"].value;
    let value3=parseFloat(num5) * parseFloat(num6);
    document.getElementById("add_res3").value=value3;
}

function devideData(){
    num7=document.forms["devide_form"].elements["num7"].value;
    num8=document.forms["devide_form"].elements["num8"].value;
    let value4=parseFloat(num7) / parseFloat(num8);
    document.getElementById("add_res4").value=value4;
}

function remainData(){
    num9=document.forms["remain_form"].elements["num9"].value;
    num10=document.forms["remain_form"].elements["num10"].value;
    let value5=parseFloat(num9) % parseFloat(num10);
    document.getElementById("add_res5").value=value5;
}