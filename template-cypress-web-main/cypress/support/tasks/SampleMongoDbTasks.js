import SampleDataRepository from '../repository/SampleDataRepository';

export default class SampleMongoDbTasks {
  static define(on, env) {
    on('task', {
      deleteSampleDataByCnpj: (cnpj) => {
        try {
          const accreditationDataRepository = new SampleDataRepository(env);
          accreditationDataRepository.deleteSampleDataByCnpj(cnpj);
          return true;
        } catch (e) {
          console.error(e, e.stack);
        }
        return false;
      },
    });
    on('task', {
      selectSampleDataByCnpj: (cnpj) => {
        try {
          const accreditationDataRepository = new SampleDataRepository(env);
          return accreditationDataRepository.selectSampleDataByCnpj(cnpj);
        } catch (e) {
          console.error(e, e.stack);
        }
        return [];
      },
    });
  }
}
