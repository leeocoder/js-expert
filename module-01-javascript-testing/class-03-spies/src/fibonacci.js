class Fibonacci {
    * execute(input, current = 0, next = 1) {
        if(input === 0) {
            return
        }
        yield current;
        const nextInput =input - 1;
        yield * this.execute(nextInput, next, current + next)
    }
}

module.exports = Fibonacci;