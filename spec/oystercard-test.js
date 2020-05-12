'use strict';

describe('OysterCard', function() {
  var oystercard;

  it('has a balance of 0 by default', function() {
    oystercard = new OysterCard;
    expect(oystercard.balance).toEqual(0)
  });

  it('can have credit added to it', function() {
      oystercard = new OysterCard;
      oystercard.topup(10)
      expect(oystercard.balance).toEqual(10)
  });

});