var single_numbers = [' ','One ','Two ','Three ','Four ', 'Five ','Six ','Seven ','Eight ','Nine ','Ten ', 'Eleven', 'Twelve ', 'Thirteen ', 'Fourteen', 'Fifteen' , 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
var tens = ['', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty','Seventy','Eighty','Ninety'];
var human_dict = { Crore: 10000000, Lac: 100000,Thousand: 1000,Hundred: 100, Ten: 10, One: 1 };

function input_validations(str){
  var digit_regx_eqn= /^\d*$/;
  if(digit_regx_eqn.test(str)== false){
  	console.log('not a valid number')
  	return false;
  }

  if(str.length > 9)
  {
  	console.log('overflow');
  	return false;
  }
}

function plurarize(num){
  return num>1 ? 's':''
}


function assign_string(num){ 
 if (num<100 && num>=20) {
   num = (tens[parseInt(num/10)-1]+" "+single_numbers[(num%10)]);
 }
 else if (num<20 && num>=0) {
   num = single_numbers[num]; 
 }
 return num;
}

String.prototype.humanize = function () {
	
  if(input_validations(this)== false){
  	return;    
  }
  var amount_in_words = [];
  amount = parseInt(this)
  var flag=false, reminder, round_up;
  for (var key in human_dict) {
    reminder = amount/human_dict[key];
    round_up = parseInt(reminder);
    if (reminder < human_dict[key] &&  reminder > 1  ) 
    {
      if(human_dict[key]==10){
        if(round_up == 1){
          amount_in_words += single_numbers[(amount%human_dict[key])+10]
          flag=true
        }else{
          amount_in_words += tens[round_up-1] 
        }    
      }
      else{
       amount_in_words += assign_string(round_up)+" ";
       amount_in_words += key+plurarize(round_up)+", ";
       console.log(plurarize(round_up))
      }
    }
    if(human_dict[key]==1 && flag == false)                 // condition for unit place 
    {
      amount_in_words += " "+single_numbers[round_up];
    }
    if(reminder>1)                    // update amount 
    {
      amount = amount%human_dict[key];
    }  
  }
  if (amount_in_words.endsWith(',') ){
   amount_in_words.replace(/\,$/,'')
  }
  console.log(amount_in_words);
};