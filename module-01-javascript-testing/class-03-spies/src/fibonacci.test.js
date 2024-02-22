const { createSandbox } = require('sinon');
const Fibonacci = require('./fibonacci.js');
const sinon = createSandbox();
const assert = require('assert');

;(async () => {
    {
        const fibonacci = new Fibonacci();
        const spy = sinon.spy(fibonacci, fibonacci.execute.name);
        for (const sequencie of fibonacci.execute(5)) { }
        const expectedCallCount = 6;
        assert.deepEqual(spy.callCount, expectedCallCount);

        const { args } = spy.getCall(2);
        const expectedParams = [3,1,2];
        assert.deepEqual(args, expectedParams);
    }

    {
        const fibonacci = new Fibonacci();
        const spy = sinon.spy(fibonacci, fibonacci.execute.name);
        const results = [...fibonacci.execute(5)];
        const expectedCallCount = 6;
        assert.deepEqual(spy.callCount, expectedCallCount);

        const expectedResults = [0, 1,1,2,3];
        assert.deepStrictEqual(results, expectedResults);
    }
})();