// RECURSION HAHAHAHAHAHA
// RECURSION HAHAHAHAHAHA
// RECURSION HAHAHAHAHAHA
// get it ? lol

// Reason to use Recursion
//  1) Less code
//  2) Elegant Code (easy to read)
//  3) Increased Readability

// Reason to not use recursion
//  1) Performance
//  2) Possibly more difficult to debug (follow the logic)
//  3) Is readability really improved


// Standard example: Fib Sequence

// Without recursion
const fib = (num, array = [0, 1]) => {
    while (num > 2) {
        const [nextToLast, last] = array.slice(-2)
        array.push(nextToLast + last)
        num -= 1;
    }
    return array;
}

// With recursion
const fibonacci = (num, array = [0,1]) => {
    if (num <=2) return array
    const [nextToLast, last] = array.slice(-2);
    return fib(num - 1, [...array, nextToLast + last])
}

// Without recursion
const fibonacciPos = (pos) => {
    if(pos <= 1) return pos;
    const seq = [0,1]
    for(let i = 2; i <= pos; i++){
        const [nextToLast, last] = seq.slice(-2);
        seq.push(nextToLast + last)
    }
    return seq[pos]
}


// With recursion
const fibPos = (pos) => {
    if(pos < 2) return pos
    return fibPos(pos - 1) + fibPos(pos-2);
}

// One-liner !!
const fibPos2 = pos => pos < 2 ? pos: fibPos2(pos - 1) + fibPos2(pos - 2);