export class BiStringMap{
    private readonly map: Map<string, string> = new Map();
    private keyList: string[] = [];
    private readonly inverseMap: Map<string, string> = new Map();

    constructor(init: {[key: string]: string}) {
        this.map = new Map();
        this.inverseMap = new Map();
        for (let key in init) {
            var value = init[key];
            if (this.hasKey(key) || this.hasValue(value)) {
                throw new Error('Key or Value already exists');
            }
            this.keyList.push(key);
            this.map.set(key, value);
            this.inverseMap.set(value, key);
        }
    }
    
    clear(): void {
        this.map.clear();
        this.inverseMap.clear();
    }
    
    hasKey(key: string): boolean {
        return this.map.has(key);
    }
    
    hasValue(value: string): boolean {
        return this.inverseMap.has(value);
    }
    
    deleteKey(key: string): boolean {
        if (!this.hasKey(key)) {
            return false;
        }
        this.keyList = this.keyList.splice(this.keyList.indexOf(key));
        const value = this.getValue(key)!;
        this.inverseMap.delete(value);
        return this.map.delete(key);
    }
    
    deleteValue(value: string): boolean {
        if (!this.hasValue(value)) {
            return false;
        }
        const key = this.getKey(value)!;
        this.keyList = this.keyList.splice(this.keyList.indexOf(key));
        return this.map.delete(key) && this.inverseMap.delete(value);
    }
    
    entries(): IterableIterator<[string, string]> {
        return this.map.entries();
    }
    
    getKey(value: string): string | undefined {
        return this.inverseMap.get(value);
    }
    
    getValue(key: string): string | undefined {
        return this.map.get(key);
    }

    getIndexOfKey(key: string): number {
        return this.keyList.indexOf(key);
    }
    
    getIndexOfValue(value: string): number {
        var key = this.inverseMap.get(value)
        if (key == undefined) {
            return -1
        }
        return this.keyList.indexOf(key);
    }
    
    getKeyList(): string[] {
        return this.keyList;
    }
    
    keys(): IterableIterator<string> {
        return this.map.keys();
    }
    
    values(): IterableIterator<string> {
        return this.inverseMap.keys();
    }
    
    set(key: string, value: string): void {
        if (this.hasKey(key) || this.hasValue(value)) {
            throw new Error('Key or Value already exists');
        }
        this.keyList.push(key);
        this.map.set(key, value);
        this.inverseMap.set(value, key);
    }
    
    get size(): number {
        return this.map.size;
    }
    
    get isEmpty(): boolean {
        return this.size === 0;
    }
}