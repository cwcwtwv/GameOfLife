describe('Game of Life', function() {
  context('setRange', function() {
    it('should be a function', function() {
      assert.isFunction(setRange);
    });
    it('should have no arguments', function() {
      assert.equal(setRange.length, 0);
    });
    it('x value should be 20 after initialization', function() {
      assert.equal(setRange()[0], 20);
    })
    it('y value should be 10 after initialization', function() {
      assert.equal(setRange()[1], 10);
    })
  });

  context('initCells', function() {
    it('should be a function', function() {
      assert.isFunction(initCells);
    });
    it('should have two arguments', function() {
      assert.equal(initCells.length, 2);
    });
  });

  context('initGrid', function() {
    it('should be a function', function() {
      assert.isFunction(initGrid);
    });
    it('should have two arguments', function() {
      assert.equal(initGrid.length, 2);
    });
  });

  context('init', function() {
    it('should be a function', function() {
      assert.isFunction(init);
    });
    it('should have no arguments', function() {
      assert.equal(init.length, 0);
    });
  });

  context('becomeLive', function() {
    it('should be a function', function() {
      assert.isFunction(becomeLive);
    });
    it('should have three arguments', function() {
      assert.equal(becomeLive.length, 3);
    });
  });

  context('becomeDead', function() {
    it('should be a function', function() {
      assert.isFunction(becomeDead);
    });
    it('should have three arguments', function() {
      assert.equal(becomeDead.length, 3);
    });
  });

  context('changeCellState', function() {
    it('should be a function', function() {
      assert.isFunction(changeCellState);
    });
    it('should have three arguments', function() {
      assert.equal(changeCellState.length, 3);
    });
  });

  context('getNextGeneration', function() {
    it('should be a function', function() {
      assert.isFunction(getNextGeneration);
    });
    it('should have no arguments', function() {
      assert.equal(getNextGeneration.length, 0);
    });
  });

  context('showChangedCells', function() {
    it('should be a function', function() {
      assert.isFunction(showChangedCells);
    });
    it('should have no arguments', function() {
      assert.equal(showChangedCells.length, 0);
    });
  });

  context('generate', function() {
    it('should be a function', function() {
      assert.isFunction(generate);
    });
    it('should have no arguments', function() {
      assert.equal(generate.length, 0);
    });
  });

});