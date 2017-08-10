require 'benchmark'
# function returns array of sequence of numbers which is sum of consecutive number till that size	
def sum_of_consecutive_no(size=0)
	return if size.nil?
	size.negative? ?  Array.new(size.abs+1) { |i| -(i*(i+1)/2)} : Array.new(size.abs+1) { |i| i*(i+1)/2 }
end	
	
puts sum_of_consecutive_no(5) 

# sample inputs
# p sum_of_consecutive_no(5)
# p sum_of_consecutive_no(-5)
# p sum_of_consecutive_no(7)
# p sum_of_consecutive_no(0)
