/*
Graph - representing objects and relates between them.
Imagine Alex own some to Alice, with graph it can be represented like this:
Alex -> Alice
There is possibility to have 2 side direction 
Object1 <-> Object2
Let's review example from book, we will look for mango seller on my face book page.
I have in my friends Alice, Bob, Clarie
They hahve also friends, here is how it can be represented:
*/

let graph = {};
graph["me"] = ["alice", "bob", "claire"]
graph["alice"] = ["anuj", "peggy"]
graph["bob"] = ["peggy"]
graph["claire"] = ["thom", "johnny"]
//it should continue withh oter relations

//console.log(graph)

//mock function to identify mango seller
function personIsSeller(person) {
    return person.includes("m")
}

//example of function to search first, not optimized O(n) for some cases
function search(name) {
    let searchArr = [];
    graph[name].forEach((el) => searchArr.push(el))
    let searchedArr = [];
    while (searchArr.length > 0) {
        let person = searchArr.shift();
        if (!searchedArr.includes(person)) {
            if (personIsSeller(person)) {
                console.log(`${person} is mango seller!`);
                return true;
            } else {
                if (graph[person] !== undefined) {
                    graph[person].forEach((el) => searchArr.push(el))
                }
                searchedArr.push(person)
            }
        }
    }
    return false
}

search("me");

//Optimizedversion
//1. Use a proper queue instead of shift()
//2. Use a Set instead of searchedArr

function searchOpt (name) {
    let queue = [...graph[name]];
    let head = 0;
    let searched = new Set();

    while (head < queue.length) {
        let person = queue[head++]
        if (!searched.has(person)) {
            if (personIsSeller(person)) {
                console.log(`${person} is mango seller! Optimized algorithm`)
                return true
            } else {
                if (graph[person] !== undefined) {
                    queue.push(...graph[person]);
                }
                searched.add(person)
            }
        }
    }
    return false;
}

searchOpt("me");
