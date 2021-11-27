"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _PedidoController = require('../controllers/PedidoController'); var _PedidoController2 = _interopRequireDefault(_PedidoController);



const routes = new (0, _express.Router)();



routes.get('/', (req, res)=>{
  
    return res.json({ ok:true});
});









//rotas de consultas a API externa

routes.get('/pedido/:rastreio', _PedidoController2.default.index);
routes.get('/pedido/status/:rastreio', _PedidoController2.default.status);
routes.get('/pedido/descricao/:rastreio', _PedidoController2.default.descri);







exports. default = routes;