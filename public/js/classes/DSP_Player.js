class DSP_Player extends DSP_Object {
  constructor(width, height, x, y, money, speed) {
    super(width, height, x, y);
    this._money = money;
    this._speed = speed;
  }

  // Money
    get money() {
      return this._money;
    }

    set money(val) {
      this._money = val;
    }

  // Speed
    get speed() {
      return this._speed;
    }
}
