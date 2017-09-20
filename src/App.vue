<template>
    <div id="app">
        <h1>{{ msg }}</h1></br>
        PINO2 <button type="button" v-on:click='conectado.publish("esp8266","on2")'>ON</button>
        <button type="button" v-on:click='conectado.publish("esp8266","off2")'>OFF</button></br>
        PINO4 <button type="button" v-on:click='conectado.publish("esp8266","on4")'>ON</button>
        <button type="button" v-on:click='conectado.publish("esp8266","off4")'>OFF</button></br>
        PINO5 <button type="button" v-on:click='conectado.publish("esp8266","on13")'>ON</button>
        <button type="button" v-on:click='conectado.publish("esp8266","off13")'>OFF</button></br>
        <input v-model="topic" placeholder="TOPICO" >
        <input v-model="menssagem" placeholder="MENSSAGEM" >
        <button type="button" v-on:click='publisher' >Publicar</button>

    </div>
</template>

<script>
import Connect from './connect'

export default {
    name: 'app',
    data () {
        return {
            conectado:'',
            urlmqtt:'Url do broker',
            configMqtt:{
                port: XXXXXX,
                username: 'usuario',
                password: 'Senha',
            },
            portmqtt:'',
            usermqtt:'',
            passmqtt:'',
            topic:'',
            menssagem:'',
            msg: 'DOMÓTICA COM COMUNICAÇÃO WIFI CONTROLADO POR UMA PÁGINA WEB',
            lista: [
                { itemdalista: 'ITEMX'  },
                { itemdalista: 'ITEMY'  }

            ]
        }
    },
    created:function(){
       this.conectar();
    },
    methods:{
        conectar:function(){
            console.log("CONECTANDO!");
            this.conectado = new Connect(this.urlmqtt,this.configMqtt);

        },
        addNovaFunction: function(){
            return "funçao"
        },
        subscriber: function(){
            this.conectado.subscribe(this.topic);
        },
        publisher: function(){

           this.conectado.publish(this.topic,this.menssagem);
        }

    },
    components:{
        componente:'<li>   </li>'

    }
}

</script>

<style lang="css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {

  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
