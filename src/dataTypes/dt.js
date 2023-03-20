// let value = true;
// console.log(typeof value);

// value = String(value);
// console.log(typeof value);

// let val = "6" / "2";
// console.log(typeof val);
// console.log(Number(null));
// console.log(Number(undefined));
// console.log(typeof NaN);
// console.log(Boolean(0));
// console.log(Boolean("0"));

const convertToNumber = (value) => {
  return Number(value);
};

const convertToBoolean = (value) => {
  return Boolean(value);
};

module.exports = {
  convertToNumber,
  convertToBoolean,
};
