# Written by Kotaro Hara
# Last modified Mar 2nd, 2012
# Halfplane Intersection Problem

# TODOs
# (1) intersection() is not implemented yet.
# (1.a) How do you store the data that you return?
# (1.b) How do you encode the information of inequalities?

# input: A set of n closed halfplanes, H = {h_1, h_2, ..., h_n}
# output: Intersection

# lines in a plane can be represented as: y = ax - b => (a, b)
# lower halfplane: y <= ax - b
# upper halfplane: y >= ax - b

H = [
	(1, 2),
	(-1, 2),
	(0, -1),
	(0, 3),
	(0, 4)
]

# (1) If n = 1, then just return this halfplane as the answer
#
# (2) Split the n halfplanes of H into subsets H_1 
# and H_2 of size n/2
#
# (3) Compute the intersetoin of H_1 and H_2 each 
# by calling htis procedure recursively
#
# (4) Intersect the convex polygons K_1 and K_2 into 
# a single convex polygon K, and return K
def halfplane_intersection( H_in ):
	print "halfplane_intersection()"

	H_len = 	len( H_in )
	print "H_len: ", H_len	
	
	# If n = 1, then just return this halfplane
	if H_len == 1:
		return H_in[0]
	
	# Split the halfplanes of H into subsets H_left and H_right
	H_len_l = 	int( H_len / 2 )
	H_left = 	H_in[:H_len_l]
	H_right = 	H_in[H_len_l:]

	print "H_len_l: ", H_len_l
	print H_left
	print "H_len_r: ", H_len - H_len_l
	print H_right

	# (3) Compute the intersection of H_left and H_right
	K_left = 	halfplane_intersection( H_left )
	K_right = 	halfplane_intersection( H_right )
	
	# (4) Intersect the convex polygons K_left and K_right
	K = intersect( K_left, K_right )

	return K

# Need to implement!
def intersect( K_left_in, K_right_in ):
	return []

def main():
	# print "main()"
	halfplane_intersection( H )

if __name__=="__main__":
	main()