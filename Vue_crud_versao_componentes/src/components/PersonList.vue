<template>
  <div id="app">

    <div class="container">
    <br>


      <label><b>Filtrar:</b></label>
      <input type="text" placeholder="Nome" v-model="busca" required>
      <button @click="buscar(busca)" class="waves-effect waves-light btn-small">Filtrar<i class="material-icons left">search</i></button>


      <br><br>

      <table>

        <thead>

          <tr>
            <th>#</th>
            <th>NOME</th>
            <th>DATA ADMISSÃO</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="pessoa of pessoas" :key="pessoa.id">

            <td>{{ pessoa.id_pessoa }}</td>
            <td>{{ pessoa.nome | converteNome }}</td>
            <td>{{ pessoa.data_admissao | formatardata }}</td>
            <td>
              <!-- chama o method editar e remover, passando o objeto (produto), atraves do click -->
              <button @click="editar(pessoa)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              &nbsp;
              <button @click="remover(pessoa)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

      <!-- exibe os erros, tanto o erro quanto o indice/index, e os campos nulos campo: erro.filed/campo -->
      <ul>
        <li v-for="(erro, index) of errors" :key="index">
          campo <b>{{erro.field}}</b> - {{erro.defaultMessage}}
        </li>
      </ul>

<br><br>

      <!-- metodo salvar vai ser disparado com o @submit.prevent="salvar" (metodo salvar), que chama o Method: Salvar() -->
      <form @submit.prevent="salvar">

          <input type="hidden" v-model="pessoa.id_pessoa">
          <label><b>Nome Completo:</b></label>
          <!-- v-model esta pegando os atributos do model.produto aqui no caso eh data.produto -->
          <input type="text" placeholder="Nome" v-model="pessoa.nome" required>
          <label><b>RG:</b></label>
          <input type="text" v-mask="'##.###.###-#'" placeholder="RG" v-model="pessoa.rg" maxlength="12" required>
          <label><b>CPF:</b></label>
          <input type="text" v-mask="'###.###.###-##'" placeholder="CPF" v-model="pessoa.cpf" maxlength="13" required>
          <label><b>Data de Nascimento: (ANO/MÊS/DIA)</b></label>
          <input type="text" v-mask="'####-##-##'" placeholder="ANO/MÊS/DIA" v-model="pessoa.data_nascimento" required>
          <label><b>Data de Admissão: (ANO/MÊS/DIA)</b></label>
          <input type="text" v-mask="'####-##-##'" placeholder="ANO/MÊS/DIA" v-model="pessoa.data_admissao" required>
          <label><b>Função:</b></label>
          <input type="text" placeholder="Função" v-model="pessoa.funcao">
          <br>
          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>
          <button v-on:click="limpar()" type="reset" class="waves-effect red darken-1 btn-small right">Limpar<i class="material-icons left">clear</i></button>

      </form>



    </div>

    <br><br><br><br>

  </div>
</template>

<script>

import conn from './PersonItem'


export default {
  name: 'app',
  data () {
    return {
      //produto serve para armazenar os dados que vem do formulario, vinculados pelo v-model;
      pessoa:{
        id_pessoa: "",
        nome: "",
        rg: "",
        cpf: "",
        data_nascimento: "",
        data_admissao: "",
        funcao: ""
      },
      pessoas: [],
      busca: "",
      errors: []            //variavel que armazena os erros vindo do catch;
    }
  },

  mounted(){
    this.listar()
  },

  filters:{
    
    converteNome(nome){
      let divisao = nome.split(" ");     
      //aqui abaixo exibe o primeiro e ultimo nome, acharia melhor assim, mas;
			//let valorfinal = divisao[0] + " " + divisao[divisao.length-1];
      let valorfinal = divisao[0];
      return valorfinal;
    },

    formatardata(valor)
    {
      let c = valor;
      let d = c.split("T");
      let f = d[0];
      let g = f.split("-");
      let h = g[2]+"/"+g[1]+"/"+g[0];
      return h;
    },
  },

  methods:{

    limpar(){
      this.pessoa = {};
    },

    listar(){
        conn.listar().then(resposta => {
          this.pessoas = resposta.data;
        })
    },

    buscar()
    {
      /*
        let nome = this.busca;
        console.log(nome);
      */
        conn.filtrar(this.busca).then(resposta => {         
          this.pessoas = resposta.data;
        })
    },

    //metodo salvar vai ser disparado com o @submit.prevent="salvar" do form (metodo salvar);
    salvar(){

      if(!this.pessoa.id_pessoa){                   //verifica se for nulo, ele salva, se nao else e atualiza

        conn.salvar(this.pessoa).then(() => {
          this.pessoa = {}                          //limpa o campo do form apos enviar os dados;
          alert('Cadastrado com sucesso!')
          this.listar();                            //chama-atualiza o metodo listar;
          this.errors = {}
        }).catch(e => {
          this.errors = e.response.data.errors      //pega o erro do response.data e joga na tela;
        })

      }else{                                        //verifica se for nulo, ele salva, se nao else e atualiza

        conn.atualizar(this.pessoa).then(() => {
          this.pessoa = {}
          this.errors = {}
          alert('Atualizado com sucesso!')
          this.listar()
        }).catch(e => {
          this.errors = e.response.data.errors
        })

      }
      

    },

    editar(pessoa){
      //ele recebe os dados da pessoa selecrionada, e joga no pessoa do data, para exibir os dados nos campos;
      this.pessoa = pessoa
    },

    remover(pessoa){

      //metodo js confirm, para confirmar exclusao;
      if(confirm('Deseja excluir o produto?')){

        conn.apagar(pessoa).then(() => {
          this.listar()
          this.errors = {}
          this.pessoa = {}
        }).catch(e => {
          this.errors = e.response.data.errors
        })

      }

    }
  }

}
</script>

<style>



</style>
