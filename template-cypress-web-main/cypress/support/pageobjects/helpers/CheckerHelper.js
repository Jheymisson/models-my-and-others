export default class CheckerHelper {
  static hasAlias(cyp, alias) {
    return Object.keys(cyp.state('aliases')).indexOf(alias) > -1;
  }
}
