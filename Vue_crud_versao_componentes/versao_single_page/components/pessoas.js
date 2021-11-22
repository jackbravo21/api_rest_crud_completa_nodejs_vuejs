import { http } from './config'

export default	{

	//esse formato eh o ecmascript: metodo: () => {};

	listar:()=>{
		//'pessoas' eh o parametro(rota) em string que vai no http, tipo "listarprodutos" na rota node;
		return http.get('listar')
  },

    filtrar:(busca)=>{
		//'pessoas' eh o parametro(rota) em string que vai no http, tipo "listarprodutos" na rota node;
		return http.post('buscar', { busca });
  },

	salvar:(pessoa)=>{
		//'pessoa' eh o parametro(rota) em string que vai no http;
		//pessoa eh o parametro que esta sendo recebido no salvar:(produto);
		return http.post('inserir', pessoa);
  },
    
	atualizar:(pessoa)=>{
		return http.put('editar', pessoa);
  },
   
	apagar:(pessoa)=>{
		//passa a pessoa, e pega o method data.pessoa, no caso o pessoa{id:"", nome:""...}
		return http.delete('remover', { data: pessoa })
  }
}