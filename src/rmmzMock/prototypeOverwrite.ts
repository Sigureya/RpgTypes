// @ts-ignore
Number.prototype.clamp = function (min, max) {
  // @ts-ignore
  return Math.min(Math.max(this, min), max);
};
