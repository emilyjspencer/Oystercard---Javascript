'use strict';

describe('OysterCard', function() {
  var oystercard;

  beforeEach(function() {
    oystercard = new Oystercard();
  });

  it('has a balance of 0 by default', function() {
    expect(oystercard.balance).toEqual(0)
  });

  it('can have credit added to it', function() {
      oystercard.topup(10)
      expect(oystercard.balance).toEqual(10)
  });

});