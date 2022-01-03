"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Dog = /*#__PURE__*/function () {
  function Dog(name, breed, age) {
    _classCallCheck(this, Dog);

    this.name = name;
    this.breed = breed;
    this.age = age;
  }

  _createClass(Dog, [{
    key: "greeting",
    value: function greeting() {
      return "Hi, I'm ".concat(this.name, " and I am a ").concat(this.age, " year old ").concat(this.breed, ".");
    }
  }]);

  return Dog;
}();

var myDog = new Person('Moopy', 'Golden', 2);
console.log(myPerson.age); // 2

console.log(myPerson.greeting()); // "Hi I'm Moopy and I'm a 2 year old Golden."