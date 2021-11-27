"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
require('dotenv/config');
class App{

    constructor(){
        this.server = _express2.default.call(void 0, );
        //mudar para o padrao ecs6
        this.app = require('http').createServer(this.server)
    
        _mongoose2.default.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });

        this.routes();

    }

    routes(){

        this.server.use(_routes2.default);

    }

}


exports. default = new App();