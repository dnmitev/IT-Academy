var number = 100;
debugger;
try {
    console.log(number.reverse());
} catch (ex) {
    console.log(ex);
    console.log(typeof(ex));
    console.log(ex.message);
    console.log(ex.name);
    console.log(ex.stack);
}