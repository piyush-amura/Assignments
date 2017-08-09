#  return the highest and lowest number from a string of space separated numbers
def  high_and_low(str="")
	return nil if str=="" || str==" " 	
	arr=str.split(" ").map{|i| i.to_i}
	"#{arr.max} #{arr.min}"
end
p high_and_low("100 200 -1 2 5")
p high_and_low("")
p high_and_low(" ") 
