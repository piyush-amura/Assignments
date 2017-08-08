def  high_and_low(str)
	arr=str.split(" ")
	"#{arr.max.to_i} #{arr.min.to_i}"
end
p high_and_low("1 2 3 011 10")