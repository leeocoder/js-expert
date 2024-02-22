const { error } = require("./src/constatns.js");
const File = require("./src/file.js");
const assert = require("assert");

(async () => {
  //Variáveis criada nesse bloco, só são valida durante a sua execução
  {
    const filePath = "./mocks/empty-file-invalid.csv";
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = "./mocks/invalid-header.csv";
    const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = "./mocks/five-items-invalid.csv";
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = "./mocks/three-items-valid.csv";
    const expected = [
      {
        id: "1",
        name: "John Doe",
        profession: "Software Engineer",
        age: "30",
      },
      {
        id: "2",
        name: "Jane Smith",
        profession: "Doctor",
        age: "35",
      },
      {
        id: "3",
        name: "Michael Johnson",
        profession: "Teacher",
        age: "40",
      },
    ];

    const result = await File.csvToJson(filePath);
    assert.deepEqual(result, expected);
  }
})();
