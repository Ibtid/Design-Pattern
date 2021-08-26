import loadJSON from "./apiCall";
export interface Iterator<T> {
    // Return the current element.
    current(): T;

    // Return the current element and move forward to next element.
    next(): T;

    // Return the key of the current element.
    key(): number;

    // Checks if current position is valid.
    valid(): boolean;

    // Rewind the Iterator to the first element.
    rewind(): void;
}

export interface Aggregator {
    // Retrieve an external iterator.
    getIterator(): Iterator<string>;
}

/**
 * Concrete Iterators implement various traversal algorithms. These classes
 * store the current traversal position at all times.
 */

export class AlphabeticalOrderIterator implements Iterator<string> {
    private collection: WeatherData;

    /**
     * Stores the current traversal position. An iterator may have a lot of
     * other fields for storing iteration state, especially when it is supposed
     * to work with a particular kind of collection.
     */
    private position: number = 0;

    /**
     * This variable indicates the traversal direction.
     */
    private reverse: boolean = false;

    constructor(collection: WeatherData, reverse: boolean = false) {
        this.collection = collection;
        this.reverse = reverse;

        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }

    public rewind() {
        this.position = this.reverse ?
            this.collection.getCount() - 1 :
            0;
    }

    public current(): string {
        return this.collection.getItems()[this.position];
    }

    public key(): number {
        return this.position;
    }

    public next(): string {
        const item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }

    public valid(): boolean {
        if (this.reverse) {
            return this.position >= 0;
        }

        return this.position < this.collection.getCount();
    }
}

/**
 * Concrete Collections provide one or several methods for retrieving fresh
 * iterator instances, compatible with the collection class.
 */


export class WeatherData implements Aggregator {
    private items: string [] = [];
    private MY_APP_ID:string = 'e8fe18c77640668d4a0b653464828f9e';

    public getItems(): string[] {
        console.log(this.items)
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem=async(cityName: string): Promise<void>=> {
        let url:string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.MY_APP_ID}`;
        let res = await loadJSON(url)
        console.log(res.name);
        console.log(res.main.temp);
        this.items.push(res.main.temp.toLocaleString());
        console.log(this.items);
    }

    public getIterator(): Iterator<string> {
        return new AlphabeticalOrderIterator(this);
    }

    public getReverseIterator(): Iterator<string> {
        return new AlphabeticalOrderIterator(this, true);
    }
}

/**
 * The client code may or may not know about the Concrete Iterator or Collection
 * classes, depending on the level of indirection you want to keep in your
 * program.
 */
/*const cityName = new WeatherData();
cityName.addItem('dhaka');
cityName.addItem('chittagon');
cityName.addItem('third');

const iterator = cityName.getIterator();

console.log('Straight traversal:');
while (iterator.valid()) {
    console.log(iterator.next());
}

console.log('');
console.log('Reverse traversal:');
const reverseIterator = cityName.getReverseIterator();
while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
}
*/