/* app module */

// const App 대신 module.exports로 대체가능
const App = function(){
    const app = {};
    app.textContent = "Hello World";
    return app;
}

module.exports = App;