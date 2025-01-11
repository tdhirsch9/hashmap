class Hashmap {
    constructor(size = 16, loadFactor = 0.75) {
      this.map = new Array(size); // Array to store key-value pairs
      this.size = size; // Store the size for use in the hash function
      this.loadFactor = loadFactor; // Load factor threshold for resizing
      this.capacity = size; // Initial capacity
      this.count = 0; // Count of items in the hashmap
    }


    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size;
        }
     
        return hashCode;
      }

      resize() {
        console.log('Resizing...');
        this.capacity *= 2;  // Double the capacity
        const newMap = new Array(this.capacity);  // Create a new array with the new capacity

        // Rehash and insert existing elements into the new map
        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i]) {
                for (let pair of this.map[i]) {
                    const index = this.hash(pair[0]) % this.capacity;
                    if (!newMap[index]) {
                        newMap[index] = [];
                    }
                    newMap[index].push(pair);
                }
            }
        }

        this.map = newMap;  // Replace the old map with the new one
    }

    set(key, value){

        if (this.count / this.capacity >= this.loadFactor) {
            this.resize();
        }

        const index = this.hash(key) % this.capacity;

        if(!this.map[index]){
            this.map[index] = [];
        }
    

        for(let pair of this.map[index]){
            if(pair[0] === key){
               pair[1] = value; // Updates value if key exists
               return;
            }

        }

        this.map[index].push([key, value]); // Adds new key-value pair
        this.count++


    }

    get(key){
        const index = this.hash(key) % this.capacity;

        if(this.map[index]){

            for(let pair of this.map[index]){
                if(pair[0] === key){
                    return pair[1]
                }
            }
        }


        return null
    }

    has(key){
        const index = this.hash(key) % this.capacity;

        if(this.map[index]){
            for(let pair of this.map[index]){
                if(pair[0] === key){
                    return true
                }
            }
        }

        return false
    }

    remove(key){
        const index = this.hash(key) % this.capacity;

        if(this.map[index]){
            for(let i = 0; i < this.map[index].length; i++){
                const pair = this.map[index][i];
                if(pair[0] === key){

                    this.map[index].splice(i, 1);

                    return true
                }
            }
        }
        return false
    }


    length(){
        let count = 0;

        for(let i = 0; i < this.map.length; i++){
            if(this.map[i]){
                count += this.map[i].length;
            }
        }


        return count
    }


    clear(){
        for (let i = 0; i < this.map.length; i++){
            this.map[i] = [];
        }
    }

    keys(){
        const keys = [];

        for(let i = 0; i < this.map.length; i++){
            if(this.map[i]){
                for(let pair of this.map[i]){
                    keys.push(pair[0]);
                }
            }
        }

        return keys
    }

    values(){
        const values = [];

        for(let i = 0; i < this.map.length; i++){
            if(this.map[i]){
                for(let pair of this.map[i]){
                    values.push(pair[1]);
                }
            }
        }

        return values;
    }


    entries(){
        const data = []
        for(let i = 0; i < this.map.length; i++){
            if(this.map[i]){
                for(let pair of this.map[i]){
                    data.push([pair[0], pair[1]]);
                }
            }
        }

        return data
    }


}

export default Hashmap;