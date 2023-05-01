import BaseRepository from './BaseRepository';

export default class SampleDataRepository extends BaseRepository {
  constructor(env) {
    const repData = {
      db: env.CYPRESS_MONGODB_DB,
      collection: env.CYPRESS_MONGODB_COL_XXX,
    };
    const uri = env.CYPRESS_MONGODB_URI;
    super(uri, repData);
  }

  async deleteSampleDataByCnpj(cnpj) {
    const deleteClause = { 'data.cnpj': cnpj };
    await this.delete(deleteClause);
  }

  async selectSampleDataByCnpj(cnpj) {
    const selectClause = { 'data.cnpj': cnpj };
    try {
      return await this.find(selectClause);
    } catch (ex) {
      console.log(ex);
      return [];
    }
  }
}
