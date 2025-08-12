class HashTable {
    constructor() {
        this.table = new Array(127);
        this.size = 0;
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }
    set(key, value) {
        const index = this._hash(key);
        //chheck if there is key already
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                //find key value pair in the chain
                if (this.table[index][i][0] === key) {
                    this.table[index][i][1] = value;
                    return;
                }
            }
            //not found, push a new key,value pair
            this.table[index].push([key, value]);
        } else {
            this.table[index] = [];
            this.table[index].push([key, value]);
        }
        this.size++;
    }
    get(key) {
        const index = this._hash(key);
        if (this.table[index]) {
            for(let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    return this.table[index][i][1];
                }
            }
        }
        return undefined;
    }
    remove(key) {
        const index = this._hash(key);

        if(this.table[index] && this.table[index].length) {
            for (let i = 0; i < this.table.length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        } else {
            return false;
        }
    }
    display() {
        this.table.forEach((values, index) => {
            const chainedValues = values.map(
                (key, value) => `[${key}: ${value}]`
            );
            console.log(`${index}: ${chainedValues}`)
        });
    }
}

//creatring new hash table
const ht = new HashTable();
ht.set("Kyiv", 10)
ht.set("Wroclaw", 2)
ht.set("BlaBla", 0)
ht.set("Spain", 11)
ht.set("ǻ", 12)

ht.display();

console.log(ht.get("Wroclaw"))
console.log(ht.get("Kyiv"))
console.log(ht.get("BlaBla"))
//collision
console.log(ht.get("Spain"), ht.get("ǻ"))


ht.remove("BlaBla")

console.log("Remove 'BlaBla' using remove method - ",ht.get("BlaBla"))