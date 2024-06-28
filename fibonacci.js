
function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    let fibSequence = [0, 1];
    
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    
    return fibSequence;
}

console.log(fibs(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]

function fibsRec(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const fibSequence = fibsRec(n - 1);
    const length = fibSequence.length;
    fibSequence.push(fibSequence[length - 1] + fibSequence[length - 2]);
    
    return fibSequence;
}

console.log(fibsRec(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]