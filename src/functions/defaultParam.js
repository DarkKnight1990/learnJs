const defaultParam = (name, param = "default param") => {
  return String(name) + " : " + param;
};

module.exports = defaultParam;
