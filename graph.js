// Graph in JavaScript


class Graph {
    constructor(vertices, edges) {
      this.vertices = vertices;
      this.edges = edges;
      this.graphObj = {};
  
      for (let [start, end] of this.edges) {
        // let [start, end] = arr;
        if (this.graphObj[start] === undefined) {
          this.graphObj[start] = [end];
        } else {
          this.graphObj[start].push(end);
        }
      }
    }
  
    // DFS using recursion
    getPaths(start, end, path = []) {
      path = path.concat(start);
  
      if (start === end) {
        return [path];
      }
  
      if (!(start in this.graphObj)) {
        return [];
      }
  
      let paths = [];
      for (let node of this.graphObj[start]) {
        if (!path.includes(node)) {
          let newPaths = this.getPaths(node, end, path);
          for (let p of newPaths) {
            paths.push(p);
          }
        }
      }
  
      return paths;
    }
  
    getShortestPath(start, end, path = []) {
      path = path.concat(start);
  
      if (start === end) {
        return path;
      }
  
      if (!(start in this.graphObj)) {
        return null;
      }
  
      let shortestPath = null;
      for (let node of this.graphObj[start]) {
        if (!path.includes(node)) {
          let sp = this.getShortestPath(node, end, path);
          if (sp) {
            if (shortestPath === null || sp.length < shortestPath.length) {
              shortestPath = sp;
            }
          }
        }
      }
  
      return shortestPath;
    }
  }
  
  let cities = ["Mumbai", "Paris", "Dubai", "New York", "Torrento"];
  
  let routes = [
      ["Mumbai", "Paris"],
      ["Mumbai", "Dubai"],
      ["Paris", "Dubai"],
      ["Paris", "New York"],
      ["Dubai", "Paris"],
      ["Dubai", "New York"],
      ["New York", "Torrento"],
    ];
  
  g = new Graph(cities, routes);
  
  let a = g.getPaths("Mumbai", "New York");
  let b = g.getShortestPath("Mumbai", "New York");
  
  console.log('cities : ', g.vertices);
  console.log('All available paths : ',a);
  console.log('Shortest path : ', b);
  
  
  
  
  