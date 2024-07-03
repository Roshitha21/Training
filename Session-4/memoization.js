const fib = n => {
    if (n <= 1) return 1
    return fib(n - 1) + fib(n - 2)
  }

//using memo

const fibo= (n, memo) => {
    
    memo = memo || {}

    if (memo[n]) return memo[n]

    if (n <= 1) return 1
    return memo[n] = fib(n-1, memo) + fib(n-2, memo)
}
fibo(10)