main();

function main() {
	var p = {x:-1, y:1},
		q = {x:1, y: 0},
		r = {x:3, y: -5},
		s = {x:0, y: 8},
		t = {x:2, y: -1},
		u = {x:5, y: -1},
		v = {x:9, y: -1},
		w = {x:-2, y: -10};	// Points in a set K
	
	var points = [p, q, r, s, t, u, v, w];
	var H = [];	// H contains points that form a hull
	var top; 	// top represents the last index of H.
	var i, j, len;	// general use variables
	
	/* sort points by their x-coordinates */
	points = points.sort( sortfunction );

	/* get the upper hull */
	H.push( points[0] );
	H.push( points[1] );
	top = 1;

	len = points.length;
	for ( i = 2; i < len; i++ ) {
		if( orient(H[top-1], H[top], points[i]) > 0 ) {
			for( top = top-1; top > 1; top-- ) {
				H.pop();
				if( orient(H[top-1], H[top], points[i]) < 0 ){
					top++;
					H.push( points[i] );
					break;
				}
			}
		}
		else {
			top++;
			H.push( points[i] );
		}
	}

	/* get the lower hull */
	len = points.length;
	H.push( points[ len-2 ] );
	top++;

	for ( i = len - 3; i > 0; i-- ) {
		if( orient(points[i], H[top], H[top-1]) < 0 ) {
			for( top = top-1; ; top-- ) {
				H.pop();
				if( orient( points[i], H[top], H[top-1] ) > 0 ){
					top++;
					H.push( points[i] );
					break;
				}
			}
		}
		else {
			top++;
			H.push( points[i] );
		}
	}
	console.log(H);
}

/************************************************************************
 * functions
 ************************************************************************/

/* Take 3 points p, q, and r. Each point has x and y value.
 * if p, q, and r are located ccw, return > 0  
 * if cw, < 0
 * else = 0 */
function orient( p, q, r ) {
	return p.x*q.y + q.x*r.y + r.x*p.y - (p.y*q.x + q.y*r.x + r.y*p.x) ;
}

/* sort function to sort points according to their x-axis */
function sortfunction( p, q ) {
	return p.x - q.x;
}