
function systemDados( res, result){

    this.res = res;
    this.result = result;

    this.dados = function(){

     if (Array.isArray(this.result) && this.result.length > 0){
        this.res.status(200).json(this.result);
     }else{
        this.result = ['Usuário não encontrado!'];
        res.status(404).json(this.result);
        
      }
    }
 
}

module.exports = systemDados;