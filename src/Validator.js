const { ERR_MSG } = require("./constants/constants");

const Validator = {
  validateStnName(stn) {
    this.stnNameLength(stn);
  },

  stnNameLength(stn) {
    if (stn < 2) throw ERR_MSG.STN_NAME_ERR;
  },

  validateTwoStn(depart, arrive) {
    this.stnNameLength(arrive);
    if (depart === arrive) throw ERR_MSG.STN_DUP_ERR;
  },
};
module.exports = Validator;
