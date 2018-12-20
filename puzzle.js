// Since the deadline for this puzzle is not reached yet, others might be trying to solve this puzzle at this same time.
// For that reasons, all comments, console.logs, and solutions have been removed from this code, making it hard(er) to read and find when googling.
// After the deadline has been reached, a fuller, more readable set of code will be put online.

var solutionToMatch = 11;
for (var a = 0; a < 10; a++) {
	for (var b = 0; b < 10; b++) {
		if (a + a + a + a + a + b * a == solutionToMatch){
			// code here
		} 		
	}
}

for (var a = 0; a < 10; a++) {
	for (var b = 0; b < 10; b++) {
		var solutionToMatch = a.toString() + a.toString();
		var sumResult = (a + a + a + a + a + b * a).toString();

		if ( sumResult == solutionToMatch) {
			// code here
		} 		
	}
}

var firstRekenles = 0;
var secondRekenles = 0;

for (var k = 1; k < 10; k++) {
	for (var e = 0; e < 10; e++) {
		if ( e != k ){
			for (var r = 1; r < 10; r++) {
				if ( r != k && r != e){
					for (var s = 0; s < 10; s++) {
						if ( s != k && s != e  && s != r){
							for (var t = 1; t < 10; t++) {
								if (t != k && t != e && t != r && t != s){
									for (var m = 1; m < 10; m++) {
										if ( m != k && m != e && m != r && m != s && m != t) {
											for (var l = 1; l < 10; l++) {
												if ( l != k && l != e && l != r && l != s && l != t && l != m){
													for (var n = 0; n < 10; n++) {
														if ( n != k && n != e  && n != r  && n != s  && n != t  && n != m  && n != l) {
															for (var i = 0; i < 10; i++) {
																if ( i != k && i != e && i != r && i != s && i != t && i != m && i != l && i != n) {
																	var kerstString = k.toString() + e.toString() + r.toString() + s.toString() + t.toString();
																	var kerstNumber = parseInt(kerstString);
																	var rekenenString = r.toString() + e.toString() + k.toString() + e.toString() + n.toString() + e.toString() + n.toString();
																	var rekenenNumber = parseInt(rekenenString);
																	var metString = m.toString() + e.toString() + t.toString();
																	var metNumber = parseInt(metString);
																	var tienString = t.toString() + i.toString() + e.toString() + n.toString();
																	var tienNumber = parseInt(tienString);
																	var lettersString = l.toString() + e.toString() + t.toString() + t.toString() + e.toString() + r.toString() + s.toString();
																	var lettersNumber = parseInt(lettersString);
																	var sumResult = rekenenNumber + metNumber * tienNumber - lettersNumber
																	var sumResultString = sumResult.toString();
																	if (sumResultString.length < 6) {
																		if (sumResultString == kerstString){
																			var minstreelString = m.toString() + i.toString() + n.toString() + s.toString() + t.toString() + r.toString() + e.toString() + e.toString() + l.toString();
																			var rekenlesString = r.toString() + e.toString() + k.toString() + e.toString() + n.toString() + l.toString() + e.toString() + s.toString();
																			var rekenlesNumber = parseInt(rekenlesString);
																			if (k == 5){
																				firstRekenles = rekenlesNumber;
																			} else if (k == 6){
																				secondRekenles = rekenlesNumber
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

var productOfRekenles = firstRekenles * secondRekenles;
