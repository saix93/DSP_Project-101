class DSP_Object {
  constructor(width, height, x, y) {
    this._width = width;
    this._height = height;
    this._x = x;
    this._y = y;
  }

  // Width
    get width() {
      return this._width;
    }

    set width(val) {
      this._width = val;
    }

  // Height
    get height() {
      return this._height;
    }

    set height(val) {
      this._height = val;
    }

  // Coordenada X
    get x() {
      return this._x;
    }

    set x(val) {
      this._x = val;
    }

  // Coordenada Y
    get y() {
      return this._y;
    }

    set y(val) {
      this._y = val;
    }
}
