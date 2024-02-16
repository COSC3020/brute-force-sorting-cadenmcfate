function permSort(a, lo) {
    if (isSorted(a)) return 1;
    let attempts = 0;
    if (lo >= a.length-1) return 0;
    for (let i = lo; i < a.length; i++) {
	if (i != lo) {
	    swap(a,lo,i);
	    attempts++;
	    //console.log(a);
	}
	attempts += permSort(a, lo+1);
	if (isSorted(a)) return attempts;
	if (i != lo) swap(a,lo,i);
    }
    return attempts;
}

function isSorted(a) {
    for (let i = 1; i < a.length; i++) {
	if (a[i-1] > a[i]) return false;
    }
    return true;
}

function swap(a,lo,i) {
    let tmp = a[lo];
    a[lo] = a[i];
    a[i] = tmp;
    return;
}

function permutationSort(a) {
    //console.log(a);
    return permSort(a,0);
}



//console.log(permutationSort([2,3,4,5,6,7,8,1]));
//console.log(permutationSort([2,3,1])); = 3!
//console.log(permutationSort([2,3,4,1])); = 4!
//console.log(permutationSort([2,3,4,5,1])); = 5!
//console.log(permutationSort([2,3,4,5,6,1])); = 6!
//console.log(permutationSort([2,3,4,5,6,7,8,9,1])); = 9!
