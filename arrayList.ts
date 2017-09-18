
class ListItem<T> {
    private list: List<T>;
    private index: number;

    public value: T;

    constructor(list: List<T>, value: T, index: number) {
        this.list = list;
        this.index = index;
        this.value = value;
    }

    prev(): ListItem<T> {
        return this.list.get(this.index - 1);
    }

    next(): ListItem<T> {
        return this.list.get(this.index + 1);
    }
}

export class List<T> {
    private items: Array<ListItem<T>>;

    constructor() {
        this.items = [];
    }

    size(): number {
        return this.items.length;
    }

    add(value: T): void {
        this.items.push(new ListItem<T>(this, value, this.size()));
    }

    get(index: number): ListItem<T> {
        return this.items[index];
    }

    removeAt(index:number){
        for(var i=index;i<this.items.length;i++){
            this.items[i]=this.items[i+1];
        }
        if(index==this.items.length || i==this.items.length)
            this.items.pop();
    }
    clear(){
        for(var i=0;i<=this.items.length;i++){
            this.items.pop();
        }
        for(var i=0;i<=this.items.length;i++){
            this.items.pop();
        }
        this.items.pop();
    }
}
