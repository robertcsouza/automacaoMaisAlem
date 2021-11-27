"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _pedido = require('../models/pedido'); var _pedido2 = _interopRequireDefault(_pedido);


class PedidoController {

   
  //lista todas as itegracoes do banco



    
   async index(req,res){

      const   rastreio  = req.params;
       
      const result = await _pedido2.default.findOne(rastreio)

      if(!result){
        return res.json({"result":"nao foi possivel encontrar o produto"});
      }
            
        return res.json(result);   
    }

    async status (req,res){

      const   rastreio  = req.params;
       
      const result = await _pedido2.default.findOne(rastreio)

      if(!result){
        return res.json({"result":"nao foi possivel encontrar o produto"});
      }
            
        return res.json({'result':result.status});   
    
    }

    async descri (req,res){

      const   rastreio  = req.params;
       
      const result = await _pedido2.default.findOne(rastreio)

      if(!result){
        return res.json({"result":"nao foi possivel encontrar o produto"});
      }
            
        return res.json({'result':result.descricao});   
    
    }
 
}

exports. default = new  PedidoController();