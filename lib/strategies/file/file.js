const File = {
    init: function() {
        console.log("hello this is file from a seperate branch");
    },
    doSomething: function(arg){
        console.log("Hello, here is your argument "+ arg);
    }
}

module.exports = File;