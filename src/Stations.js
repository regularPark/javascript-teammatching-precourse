const Dijkstra = require("./DIjkstra");

class Stations {
  #dijkstra_km;
  #dijkstra_time;
  setStations() {
    this.#dijkstra_km = new Dijkstra();
    this.#dijkstra_time = new Dijkstra();
    this.dijkstra_km.addEdge("교대", "강남", 2);
    this.dijkstra_km.addEdge("강남", "역삼", 2);
    this.dijkstra_km.addEdge("교대", "남부터미널", 3);
    this.dijkstra_km.addEdge("남부터미널", "양재", 6);
    this.dijkstra_km.addEdge("양재", "매봉", 1);
    this.dijkstra_km.addEdge("강남", "양재", 2);
    this.dijkstra_km.addEdge("양재", "양재시민의숲", 10);

    this.dijkstra_time.addEdge("교대", "강남", 3);
    this.dijkstra_time.addEdge("강남", "역삼", 3);
    this.dijkstra_time.addEdge("교대", "남부터미널", 2);
    this.dijkstra_time.addEdge("남부터미널", "양재", 5);
    this.dijkstra_time.addEdge("양재", "매봉", 1);
    this.dijkstra_time.addEdge("강남", "양재", 8);
    this.dijkstra_time.addEdge("양재", "양재시민의숲", 3);
  }
}

module.exports = Stations;
