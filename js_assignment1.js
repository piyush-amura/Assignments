var singleNumbers = [' ','One ','Two ','Three ','Four ', 'Five ','Six ','Seven ','Eight ','Nine ','Ten ', 'Eleven', 'Twelve ', 'Thirteen ', 'Fourteen', 'Fifteen' , 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
var tens = ['', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty','Seventy','Eighty','Ninty'];
var humanDict = { Crore: 10000000, Lac: 100000,Thousand: 1000,Hundred: 100, Ten: 10, One: 1 };


function inputValidations(str){

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


function assignString(num){ 
 if (num<100 && num>=20) {
   num = (tens[parseInt(num/10)-1]+" "+singleNumbers[(num%10)]);
 }
 else if (num<20 && num>=0) {
   num = singleNumbers[num]; 
 }
 return num;
}

String.prototype.humanize = function () {
	
  if(inputValidations(this.replace(/^0+/,'')) == false){
  	return;    
  }
  var amountInWords = [];
  var amount = parseInt(this.replace(/^0+/,''));
  var flag = false, reminder, roundUp;
  for (let key in humanDict) 
  {
    reminder = amount/humanDict[key];
    roundUp = parseInt(reminder);
    if (reminder < humanDict[key] &&  reminder > 1  ) 
    {
      //allocating humanDictionary word for tenth places 
      if(humanDict[key] == 10){
        //for number between 10 and 20
        if(roundUp == 1){     
          amountInWords += singleNumbers[(amount%10) + 10];
          flag = true;
        }else{
          amountInWords += tens[roundUp-1]; 
        }    
      }
      else{
       amountInWords += assignString(roundUp) + ' ';
       amountInWords += key + plurarize(roundUp) + ', ';
      }
    }
    if(humanDict[key] == 1 && flag == false)                 // condition for unit place 
    {
      amountInWords += " " + singleNumbers[roundUp];
    }
    if(reminder>1) 
    {
      amount = amount%humanDict[key];
    }  
  }
  //remove unnecessary spaces from amountInWords
  amountInWords = amountInWords.trim();
  if (amountInWords[amountInWords.length-1]==','){
    amountInWords=amountInWords.substring(0, amountInWords.length-1)
  }
  console.log(amountInWords);
};