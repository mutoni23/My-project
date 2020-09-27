function giveAkanNames(){
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var thousands = document.getElementById("thousand").value;
    var hundreds = document.getElementById("hundred").value;
    var tens = document.getElementById("ten").value;
    var ones= document.getElementById("one").value;
    var gender =  document.getElementById("gender").value;

    start:
    if (day < 1 || day > 31) {
        if (month < 1 || month > 12) {
            alert("The month and day you entered are not solid!!");
             goto:start;
        }else {
            alert("The day entered is not solid!!");
            goto:start;
        }
    }else {
        if (month < 1 || month > 12) {
            alert("The month entered is not solid!!");
            goto:start;
        }   
    }

 
    var century= thousands+''+hundreds;
    var decade= tens+''+ones;
    var bornDay= (((century/4) -2*century-1) + ((5*decade/4) ) + ((26*(month+1)/10)) +day ) % 7;
    var rounded = Math.trunc(bornDay);

    if (rounded == 1) {
        document.write("The day you were born was on Monday and ");
    }else if (rounded == 2) {
        document.write("The day you were born was on Tuesday and ");
    }else if (rounded == 3) {
        document.write("The day you were born was on Wednesday and ");
    }else if (rounded == 4) {
        document.write("The day you were born was on Thursday and ");
    }else if (rounded == 5) {
        document.write("The day you were born was on Friday and ");
    }else if (rounded == 6) {
        document.write("The day you were born was on saturday and ");
    }else if (rounded == 7) {
        document.write("The day you were born was on Sunday and ");
    }


    var virileNames = ["Kwasi","Kwado","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var ladiesNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    

    if(gender=="female"){

      switch(rounded){
        case 1: 
             document.write("your Akan name is : " + ladiesNames[0]);
             break;
        case 2: 
             document.write("your Akan name is : " + ladiesNames[1]);
             break;
        case 3: 
             document.write("your Akan name is : " + ladiesNames[2]);
             break;
        case 4: 
             document.write("your Akan name is : " + ladiesNames[3]);
             break;
        case 5: 
             document.write("your Akan name is : " + ladiesNames[4]);
             break;
        case 6: 
             document.write("your Akan name is : " + ladiesNames[5]);
             break;
        case 7: 
             document.write("your Akan name is : " + ladiesNames[6]);
             break;
        default:
            document.write("unknown Akan name");
      }

    }else if(gender=="male"){
        
        switch(rounded){
            case 1:
                document.write("your Akan name is : " + virileNames[0]);
                break;
            case 2:
                document.write("your Akan name is : " + virileNames[1]);
                break;
            case 3:
                document.write("your Akan name is : " + virileNames[2]);
                break
            case 4:
                document.write("your Akan name is : " + virileNames[3]);
                break;
            case 5:
                document.write("your Akan name is : " + virileNames[4]);
                break
            case 6:
                document.write("your Akan name is : " + virileNames[5]);
                break;
            case 7:
                document.write("your Akan name is : " + virileNames[6]);   
            default:
                document.write("unknown Akan name") 
        }
    }else {
        document.write("no such gender");
    }
}


giveAkanNames();
