import Vue from 'vue'
import App from './App.vue'
//import Casa from './casa.vue'
import Connect from './connect'
new Vue({
  el: '#app',
  render: h => h(App),
  methods:{
    conectar: function(){
      console.log("TESTE");
      var url = "wss://m11.cloudmqtt.com";

      var config = {
        port: 37450,
        username: 'etcmeuix',
        password: 'RvzvqeN4Tlw3',
        clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
      };

     var con = new Connect(url,config);
    }
  },
  created: function(){

    // this.conectar();
  }
})
