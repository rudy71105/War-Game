var compose = function(functions) {
	return function(x) {
      var val = x
      var start = functions.length - 1;
      for (i = start; i >= 0; i--) {
        var temp = functions[i];
        var result = temp(val);
        val = result;
      }
      return val;      
    }
};

const fn = compose([x => x + 1, x => 2 * x]);
fn(4);

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */