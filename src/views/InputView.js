const { Console } = require("@woowacourse/mission-utils");
const { MSG } = require("../constants/constants");

const InputView = {
  readDepart(callback) {
    Console.readLine(MSG.DEPART_STN, callback);
  },
  readArrive(callback) {
    Console.readLine(MSG.ARRIVE_STN, callback);
  },
};

module.exports = InputView;
