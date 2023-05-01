import { MongoClient } from 'mongodb';

export default class BaseRepository {
  constructor(uri, repData) {
    this.repData = repData;
    this.uri = uri;
  }

  async connect() {
    try {
      this.client = new MongoClient(this.uri, {
        useUnifiedTopology: true,
      });
      await this.client.connect();
    } catch (ex) {
      console.error(`Fail to connect - ${this.uri}`);
      throw ex;
    }
  }

  async disconnect() {
    try {
      await this.client.close();
    } catch (ex) {
      console.error(`Fail to disconnect - ${this.uri}`);
      throw ex;
    }
  }

  async delete(clause) {
    try {
      await this.connect();
      await this.client
        .db(this.repData.db)
        .collection(this.repData.collection)
        .deleteMany(clause);
    } finally {
      await this.disconnect();
    }
  }

  async find(clause) {
    try {
      await this.connect();
      return await this.client
        .db(this.repData.db)
        .collection(this.repData.collection)
        .find(clause)
        .toArray();
    } finally {
      await this.disconnect();
    }
  }
}
