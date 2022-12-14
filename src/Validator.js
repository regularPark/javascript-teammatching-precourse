const { ERR_MSG } = require("./constants/constants");

const Validator = {
  validateMenu(cmd) {
    if (!["F", "B"].includes(cmd)) throw ERR_MSG.MENU_ERR;
  },

  validateCrew(name) {
    if (name.length > 5) throw ERR_MSG.LENGTH_ERR;
  },
};

module.exports = Validator;
