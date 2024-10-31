// Define an object type
function Item(dirty) {
    this.dirty = dirty;
}

// Create an instance of the object
const myItem = new Item(false);

// Set the dirty property using this._dirtyID
myItem.dirty = this._dirtyID;
