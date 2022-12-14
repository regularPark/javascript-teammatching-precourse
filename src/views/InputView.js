const { Console } = require("@woowacourse/mission-utils");
const { MSG } = require("../constants/constants");

const InputView = {
  readMenu(callback) {
    Console.readLine(MSG.CREW_MSG, callback);
  },

  readName(callback) {
    Console.readLine(MSG.CREW_NAME_MSG, callback);
  },
};

module.exports = InputView;
