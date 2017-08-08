def  high_and_low(str="")
	arr=str.split(" ").map!{|i| i.to_i}
	"#{arr.max} #{arr.min}"
end
p high_and_low("1 -100 3000 1000 10")