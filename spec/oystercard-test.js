'use strict';

describe('OysterCard', function() {
  var oystercard;

  it('has a balance of 0 by default', function() {
    oystercard = new OysterCard;
    expect(oystercard.balance).toEqual(0)
  });

});