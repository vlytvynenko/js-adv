/*
Example of Dijkstra's algorithm for weighted graphs
*/

//Whe have following graphs 

let graphs = {};
graphs["start"] = {}
graphs["start"]["a"] = 6;
graphs["start"]["b"] = 2;
graphs["a"] = {};
graphs["a"]["fin"] = 1;
graphs["b"] = {};
graphs["b"]["fin"] = 5;
graphs["b"]["a"] = 3;
graphs["fin"] = {};

// Price hash table
let costs = {
    a: 6,
    b: 2,
    fin: Infinity
};

// Parents hash table
let parents = {
    a: "start",
    b: "start",
    fin: null
};

let processed = [];


//function to find the cheapest node
function find_lowest_cost_node(costs) {
    let lowest_cost = Infinity;
    let lowest_cost_node = null;
    for (let nd in costs) {
        let cost = costs[nd]
        if (cost < lowest_cost && !processed.includes(nd)) {
            lowest_cost = cost;
            lowest_cost_node = nd;
        }
    }
    return lowest_cost_node;
}


let node = find_lowest_cost_node(costs)
//console.log(node)
while (node !== null) {
    let cost = costs[node];
    let neighbors = graphs[node];
    for (let n of Object.keys(neighbors)) {
        let new_cost = cost + neighbors[n]

        if (costs[n] > new_cost) {
            costs[n] = new_cost;
            parents[n] = node;
        }
    }
    processed.push(node);
    node = find_lowest_cost_node(costs)
}

console.log("Costs", costs);
console.log("Parents", parents);
