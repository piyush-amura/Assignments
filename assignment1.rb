def solution(hash)	
	hash=hash.collect do |key,value|
		 "#{key} = #{value}"	
	end
	hash.join(",")
end	
p solution({a: 1, b: '2'})