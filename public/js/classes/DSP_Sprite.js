/* exported DSP_Sprite */
class DSP_Sprite {
  constructor(context, width, height, x, y, image, name) {
    this._context = context;
    this._width = width;
    this._height = height;
    this._x = x;
    this._y = y;
    this._image = image;
    this._name = name;
  }

  // Context
    get context() {
      return this._context;
    }

  // Width
    get width() {
      return this._width;
    }

  // Height
    get height() {
      return this._height;
    }

  // X
    get x() {
      return this._x;
    }

  // Y
    get y() {
      return this._y;
    }

  // Image
    get image() {
      return this._image;
    }

  // Name
    get name() {
      return this._name;
    }

  // Funciones
    render(destinationX, destinationY) {
      this._context.drawImage(
        this._image,
        this._x,
        this._y,
        this._width,
        this._height,
        destinationX,
        destinationY,
        this._width,
        this._height
      )
    }
}
