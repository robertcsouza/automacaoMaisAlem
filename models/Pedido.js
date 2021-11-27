"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');


const PedidoSchema = new (0, _mongoose.Schema)({

        rastreio:String,
        status:String,
        descricao:String,
        
        }  

);


exports. default = _mongoose.model.call(void 0, 'pedido',PedidoSchema);