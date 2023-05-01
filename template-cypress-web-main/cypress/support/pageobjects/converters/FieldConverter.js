export default class FieldConverter {
  convert(value) {
    let convertedValue = value;
    if (convertedValue.trim().toLowerCase() === '[blank]') {
      convertedValue = '';
    }
    return convertedValue;
  }
}
