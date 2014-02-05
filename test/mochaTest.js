var should = require('should');

(function () {
  describe('before test', function () {
    before(function(){
      console.log('before');
    });
    beforeEach(function(){
      console.log('beforeEach');
    });
    after(function () {
      console.log('after');
    });
    afterEach(function () {
      console.log('afterEacb');
    });
    it('should show console.log', function () {
      console.log('test');
    });

    it('should tests', function () {
      true.should.be.ok;
      'test'.should.equal('test');
      'foobar'.should.startWith('foo');
      'foobar'.should.endWith('bar');
      (5).should.be.within(5, 10).and.within(5, 5);
      (99.99).should.be.approximately(100, 0.1);
      (5).should.be.above(0);
      (5).should.be.below(6);
      'test'.should.be.type('string');
      [].should.be.an.instanceOf(Array);

      var user = {name: 'kazuya'};
      user.should.have.property('name');
    });


  });
})();