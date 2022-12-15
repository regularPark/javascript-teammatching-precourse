const InputView = require("../views/InputView");
const { Console } = require("@woowacourse/mission-utils");
const Validator = require("../Validator");
const Stations = require("../Stations");

class Controller {
  #depart;
  #arrive;
  #stations;
  start() {
    this.#stations = new Stations();
    this.#stations.setStations();
    this.inputDepartHandler();
  }

  inputDepartHandler() {
    InputView.readDepart(this.departHandler.bind(this));
  }

  departHandler(stn) {
    try {
      Validator.validateStnName(stn);
      this.#depart = stn;
      this.inputArriveHandler();
    } catch (error) {
      Console.print(error);
      this.inputDepartHandler();
    }
  }

  inputArriveHandler() {
    InputView.readArrive(this.arriveHandler.bind(this));
  }

  arriveHandler(stn) {
    try {
      Validator.validateTwoStn(this.#depart, stn);
      this.#arrive = stn;
    } catch (error) {
      Console.print(error);
      this.inputArriveHandler();
    }
  }
}

module.exports = Controller;
