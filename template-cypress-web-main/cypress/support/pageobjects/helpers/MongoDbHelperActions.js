/* eslint-disable promise/prefer-await-to-then */
/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
export default class MongoDbHelperActions {
  // This code is not actioned in the codebase
  // but if necessary to develop some query in MongoDB
  // just call this (or other similar method) in step definition
  verifyCnpjIsBlocked(status) {
    cy.get('@cnpjValue').then((cnpj) => {
      if (cnpj != null) {
        // eslint-disable-next-line promise/no-nesting
        cy.task('selectSampleDataByCnpj', cnpj).then((register) => {
          expect(register.length).to.equal(1);
          expect(register[0].statusCredenciamento).to.equal(status);
        });
      }
    });
  }
}
