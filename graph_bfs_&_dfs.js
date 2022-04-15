// Graph in JavaScript

class Graph {
    constructor(vertices, edges) {
      this.vertices = vertices;
      this.edges = edges;
      this.graphObj = {};
  
      for (let [start, end] of this.edges) {
        if (this.graphObj[start] === undefined) {
          this.graphObj[start] = [end];
        } else {
          this.graphObj[start].push(end);
        }
      }
    }
  
    bfs(start) {
      const visited = [];
      const queue = [];
      const path = [];
      visited.push(start);
      queue.push(start);
  
      while (queue.length !== 0) {
        let vertex = queue.shift();
        path.push(vertex);
  
        for (let key of this.graphObj[vertex]) {
            if (!(visited.includes(key))){
                visited.push(key);
                queue.push(key);
            }
        }
      }
      return path
    }
  
    dfs(start){
        const stack = [start];
        const path = [];
  
        while(stack.length !== 0){
            let vertix = stack.pop();
            if (path.includes(vertix)){
                continue;
            }
            path.push(vertix);
            for (let i of this.graphObj[vertix]){
                stack.push(i)
            }
        }
  
        return path
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
    ["Torrento", "New York"],
  ];
  
  g = new Graph(cities, routes);
  
  console.log('BFS :', g.bfs('Mumbai'));
  console.log('DFS :', g.dfs('Dubai'));
  
  
  