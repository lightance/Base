// QUnit case, http://qunitjs.com/
module('Base');

test('simple', function(){
  var obj = new Base;
  ok(obj instanceof Base);
});

test('setOptions', function(){
  var obj = new Base;

  obj.setOptions({
    abc: 123,
    dfe: 456
  });
  obj.setOptions({
    foo: 'bar'
  });

  equal(obj.getOptions().abc,  123 );
  equal(obj.getOptions().dfe,  456 );
  equal(obj.getOptions().foo, 'bar');
});

test('constructor', function(){
  var obj = new Base({
    foo: 'bar'
  });

  equal(obj.getOptions().foo, 'bar');
});

test('reset', function(){
  var obj = new Base({
    foo: 'bar'
  });

  obj.setOptions(null);

  equal(obj.getOptions().foo, undefined);
});

test('setDefaultOptions', function(){
  var obj = new Base({
    abc: 123
  });

  obj.setDefaultOptions({
    abc: 987,
    foo: 'bar'
  });

  equal(obj.getOptions().abc,  123 );
  equal(obj.getOptions().foo, 'bar');

  obj.setOptions({
    abc: 987
  });

  equal(obj.getOptions().abc,  987 );
});