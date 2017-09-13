var SingleNumbers = [' ','One ','Two ','Three ','Four ', 'Five ','Six ','Seven ','Eight ','Nine ','Ten ', 'Eleven', 'Twelve ', 'Thirteen ', 'Fourteen', 'Fifteen' , 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
var tens = ['', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty','Seventy','Eighty','Ninty'];
var HumanDict = { Crore: 10000000, Lac: 100000,Thousand: 1000,Hundred: 100, Ten: 10, One: 1 };


function InputValidations(str){

  if(/^\d*$/.test(str)== false){
  	console.log('not a valid number');
  	return false;
  }

  if(str.length > 9)
  {
  	console.log('overflow');
  	return false;
  }

  if(parseInt(str) < 0){
    console.log('negative no. not allowed');
    return false;
  }
}

function plurarize(num){
  return num>1 ? 's' : ''
}


function AssignString(num){ 
 if (num<100 && num>=20) {
   num = (tens[parseInt(num/10)-1]+" "+SingleNumbers[(num%10)]);
 }
 else if (num<20 && num>=0) {
   num = SingleNumbers[num]; 
 }
 return num;
}

String.prototype.humanize = function () {
	
  if(InputValidations(this.replace(/^0+/,'')) == false){
  	return;    
  }
  var AmountInWords = [];
  var amount = parseInt(this.replace(/^0+/,''));
  var flag = false, reminder, RoundUp;
  for (let key in HumanDict) 
  {
    reminder = amount/HumanDict[key];
    RoundUp = parseInt(reminder);
    if (reminder < HumanDict[key] &&  reminder > 1  ) 
    {
      //allocating HumanDictionary word for tenth places 
      if(HumanDict[key] == 10){
        //for number between 10 and 20
        if(RoundUp == 1){     
          AmountInWords += SingleNumbers[(amount%10) + 10];
          flag = true;
        }else{
          AmountInWords += tens[RoundUp-1]; 
        }    
      }
      else{
       AmountInWords += AssignString(RoundUp) + ' ';
       AmountInWords += key + plurarize(RoundUp) + ', ';
      }
    }
    if(HumanDict[key] == 1 && flag == false)                 // condition for unit place 
    {
      AmountInWords += " " + SingleNumbers[RoundUp];
    }
    if(reminder>1) 
    {
      amount = amount%HumanDict[key];
    }  
  }
  //remove unnecessary spaces from AmountInWords
  AmountInWords = AmountInWords.trim();
  if (AmountInWords[AmountInWords.length-1]==','){
    AmountInWords=AmountInWords.substring(0, AmountInWords.length-1)
  }
  console.log(AmountInWords);
};