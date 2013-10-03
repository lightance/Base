# Base

The base javascript class with some useful features.


## Features

* Options
    * `setOptions`
    * `setDefaultOptions`


## Dependencies

* createClass [[bitbucket](https://bitbucket.org/lightance/createclass), [github](https://github.com/lightance/createClass)]


## Examples

See more examples in the tests.

    var SomeClass = createClass({
      $extends: Base,
      _options: {
        opt1: '',
        opt2: 'bar'
      }
      myFunction: function(){
        return this._options.opt1 + this._options.opt2;
      }
    });
  
    var obj = new SomeClass({
      opt1: 'foo'
    });
  
    obj.myFunction(); // 'foobar'


## Unit Tests

Start `tests/tests.html`.


## Questions

If you have any questions, please feel free to ask on [hello@lightance.com](mailto:hello@lightance.com).