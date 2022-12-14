const { Console } = require("@woowacourse/mission-utils");
const { MSG } = require("../constants/constants");

const OutputView = {
  printStart() {
    Console.print(MSG.START);
  },
};

module.exports = OutputView;
