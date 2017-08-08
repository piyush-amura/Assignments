def  high_and_low(str="")
	return nil if str=="" || str==" " 	
	arr=str.split(" ").map!{|i| i.to_i}
	"#{arr.max} #{arr.min}"
end
p high_and_low("-1 -100 -3000 -12 -1")
p high_and_low("")
p high_and_low(" ") 
