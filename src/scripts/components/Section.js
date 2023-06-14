export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    };

    addItemsFromArray(itemsArray) {
        itemsArray.forEach(item => {
            this.addItem(this._renderer(item));
        });
    };

    addItem(domElement) {
        this._container.prepend(domElement);
    };
}