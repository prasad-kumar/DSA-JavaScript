// undirected graph implementaion

class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addNode = (node) => {
    this.adjList.set(node, []);
  };

  // add edge,undirected
  addEdge = (origin, destination) => {
    this.adjList.get(origin).push(destination);
    this.adjList.get(destination).push(origin);
  };

  // BFS
  bfs = (start) => {
    const visited = new Set();

    const queue = [start];
    visited.add(start);

    while (queue.length > 0) {
      const airport = queue.shift();
      const destinations = this.adjList.get(airport);

      for (let destination of destinations) {
        if (!visited.has(destination)) {
          queue.push(destination);
          visited.add(destination);
        }
      }
    }
    return visited;
  };

  // DFS
  dfs(start, end, visited = new Set()) {
    visited.add(start);

    for (let destination of this.adjList.get(start)) {

      if (start === end){
          console.log('FOUND IT');
          return
      }  
      if (!visited.has(destination)) {
        this.dfs(destination, end, visited);
      }
    }
    return visited
  }

  // to get all available routes to destination
  getPaths(start, end, path = []) {
    path = path.concat(start);

    if (start === end) {
      return [path];
    }

    if (!this.adjList.has(start)) {
      return [];
    }

    let paths = [];
    for (let destination of this.adjList.get(start)) {
      if (!path.includes(destination)) {
        let newPaths = this.getPaths(destination, end, path);

        for (let p of newPaths) {
          paths.push(p);
        }
      }
    }

    return paths;
  }
}

const airports = "HYD BLR CHN MUM DLH KLK".split(" ");

const routes = [
  ["HYD", "BLR"],
  ["HYD", "CHN"],
  ["HYD", "MUM"],
  ["HYD", "KLK"],
  ["BLR", "CHN"],
  ["MUM", "DLH"],
  ["KLK", "DLH"],
];

const g = new Graph();

airports.forEach(g.addNode);

routes.forEach((route) => g.addEdge(...route));

console.log(g.adjList);

console.log(g.bfs('HYD', 'DLH'));

console.log(g.dfs('KLK', 'BLR'));

console.log(g.getPaths('HYD', 'DLH'));


