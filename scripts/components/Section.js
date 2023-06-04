export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._itemsArray = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    };

    addItemsFromArray() {
        this._itemsArray.forEach(item => {
            this.addItem(this._renderer(item));
        });
    };

    addItem(domElement) {
        this._container.prepend(domElement);
    };
}