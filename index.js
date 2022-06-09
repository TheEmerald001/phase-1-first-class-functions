const receivesAFunction = callBack => callBack();
function returnsANamedFunction() {
    return function iHaveAName() {
      console.log("I have a name!");
    };
  }
  function returnsAnAnonymousFunction() {
    return () => console.log("I am Anonymous");
  }