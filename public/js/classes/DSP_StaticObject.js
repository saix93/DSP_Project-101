/* exported DSP_StaticObject */
class DSP_StaticObject extends DSP_Object {
  constructor(width, height, x, y, collisionable, collectible) {
    super(width, height, x, y);
    this._collisionable = collisionable;
    this._collectible = collectible;
  }

  // Collisionable
    get collisionable() {
      return this._collisionable;
    }

  // Collectible
    get collectible() {
      return this._collectible;
    }
}
