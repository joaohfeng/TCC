import Mqtt from 'mqtt'


export default class{

  connection = false;
   self = this;

  constructor(urlMqtt,options){

   console.log("CONSTTRUINDO A CLASSE Connect \n");
   self.Mqtt = Mqtt.connect(urlMqtt,options);

    self.Mqtt.on('connect',function(){

      self.Mqtt.publish('conexao','Conectado com sucesso', function(){
        console.log("\nCONEXAO ESTABELECIDA");
      });
    return self.connection =true;
    });


  }

  publish (topic,message){

   self.Mqtt.publish(topic,message);
    return console.log("Comando executado!");
  }
  subscribe (topic){
    self.Mqtt.subscribe(topic);
  }
}
