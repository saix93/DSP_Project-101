/* exported DSP_Player */
class DSP_Player extends DSP_Object {
  constructor(width, height, x, y, gold, speed) {
    super(width, height, x, y);
    this._gold = gold;
    this._speed = speed;
  }

  // Gold
    get gold() {
      return this._gold;
    }

    set gold(val) {
      this._gold = val;
    }

  // Speed
    get speed() {
      return this._speed;
    }
}
