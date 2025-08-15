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

//example of function to search
function search(name) {
    let searchArr = [];
    //searchArr.push(graph[name]);
    graph[name].forEach((el) => searchArr.push(el))
    let searchedArr = [];
    while (searchArr.length > 0) {
        let person = searchArr.shift();
        if (!searchedArr.includes(person)) {
            if (personIsSeller(person)) {
                console.log(`${person} is mango seller!`);
                return true;
            } else {
                //searchArr.push(graph[person]);
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