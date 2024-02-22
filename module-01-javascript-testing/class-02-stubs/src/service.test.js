const Service = require('./service.js');
const assert = require('assert');

const { createSandbox } = require('sinon');
const sinon = createSandbox();

const BASE_URL_1 = 'https://swapi.dev/api/planets/2';
const BASE_URL_2 = 'https://swapi.dev/api/planets/3';

const mocks = {
    alderaan: require('./mocks/alderaan.mocks.json'),
    yavin: require('./mocks/yavin.json')
};

(async () => {
    const service = new Service();
    const stub = sinon.stub(service, service.makeRequest.name)
    stub.withArgs(BASE_URL_1).resolves(mocks.alderaan);
    stub.withArgs(BASE_URL_2).resolves(mocks.yavin);
    {
        const expected = {
            name: "Alderaan",
            surfaceWater: "40",
            apperadIn: 2
        }

        const result = await service.getPlanets(BASE_URL_1);
        assert.deepStrictEqual(result, expected);
    }

    {
        const expected = {
            name: "Yavin IV",
            surfaceWater: '8',
            apperadIn: 1
        }

        const result = await service.getPlanets(BASE_URL_2);
        assert.deepStrictEqual(result, expected);
    }
})();