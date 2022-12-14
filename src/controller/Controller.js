const InputView = require("../views/InputView");
const OutputView = require("../views/OutputView");
const { Console } = require("@woowacourse/mission-utils");
const Validator = require("../Validator");

class Controller {
  start() {
    OutputView.printStart();
    this.inputFBMenuHandler();
  }

  inputFBMenuHandler() {
    InputView.readMenu(this.FBMenuHandler.bind(this));
  }

  FBMenuHandler(cmd) {
    try {
      Validator.validateMenu(cmd);
      this.inputCrewHandler();
    } catch (error) {
      Console.print(error);
      this.inputFBMenuHandler();
    }
  }

  inputCrewHandler() {
    InputView.readName(this.crewHandler.bind(this));
  }

  crewHandler(name) {
    try {
      Validator.validateCrew(name);
    } catch (error) {
      Console.print(error);
      this.inputCrewHandler();
    }
  }
}

module.exports = Controller;
