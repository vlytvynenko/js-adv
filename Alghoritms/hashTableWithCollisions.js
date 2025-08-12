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
        this.table[index] = [key, value];
        this.size++;
    }
    get(key) {
        const index = this._hash(key);
        return this.table[index];
    }
    remove(key) {
        const index = this._hash(key);

        if(this.table[index] && this.table[index].length) {
            this.table[index] = undefined;
            this.size--;
            return true;
        } else {
            return false;
        }
    }
}

//creatring new hash table
const ht = new HashTable();
ht.set("Kyiv", 10)
ht.set("Wroclaw", 2)
ht.set("BlaBla", 0)
ht.set("Spain", 11)
ht.set("ǻ", 12)

console.log(ht.get("Wroclaw"))
console.log(ht.get("Kyiv"))
console.log(ht.get("BlaBla"))
//collision
console.log(ht.get("Spain"), ht.get("ǻ"))


ht.remove("BlaBla")

console.log("Remove 'BlaBla' using remove method - ",ht.get("BlaBla"))