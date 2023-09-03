var expect = function(val) {
    return {
      toBe: function (num) {
        if (val === num) {
          return true;
        }
        else {
          return "Not Equal";
        }
      },
      notToBe: function (num) {
        if (val !== num) {
          return true;
        }

        else {
          return "Not Equal";
        }
      }
    }
};

expect(5).toBe(5);