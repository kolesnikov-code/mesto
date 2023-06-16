export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    };

    addItemsFromArray(itemsArray) {
        itemsArray.forEach(item => {
            this.addItemAppend(this._renderer(item));
        });
    };

    addItemPrepend(domElement) {
        this._container.prepend(domElement);
    };

    addItemAppend(domElement) {
        this._container.append(domElement);
    };
}