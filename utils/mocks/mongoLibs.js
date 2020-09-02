const sinon = require('sinon');

const { moviesMock } = require('./moviesMocks');
const Sinon = require('sinon');

const getAllStub = sinon.stub();
getAllStub.withArgs('movies').resolves(moviesMock);

const createStub = Sinon.stub();
createStub.resolves(moviesMock[0].id);

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }

  create(collectio, data) {
    return createStub(collectio, data);
  }
}

module.exports = {
    getAllStub,
    createStub,
    MongoLibMock
};
