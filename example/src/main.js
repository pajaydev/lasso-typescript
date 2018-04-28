const add = require('./add');
const jquery = require('jquery');
const Greeter = require('./Greeter');

jquery(function () {
    $(document.body).append('2+2=' + add(2, 2));
    let greeter = new Greeter("Ajaykumar");
    $(document.body).append(greeter.greet());
});
