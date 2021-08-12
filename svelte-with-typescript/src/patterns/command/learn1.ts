export interface Command {
    execute():void;
}


//This is a command, so we need to implement the Command interface.
class LightOnCommand implements Command{
   light!:Light
   
//The constructor is passed the specific light that this command is going to
//control - say the living room light - and stashes it in the light instance
//variable. When execute gets called, this is the light object that is going to be
//the Receiver of the request.
   constructor(light:Light){
       this.light = light;
   }

//The execute method calls the on() method on the receiving
//object, which is the light weare controlling.
   execute():void{
       this.light.on();
   }
}

class Light {
   on():void{
       console.log('the light is turned on');
   }
   off():void{
       console.log('the light is turned off');
   }
}

class SimpleRemoteControl {
   //We have one slot to hold our command, which will control one device.
   slot!:Command

//We have a method for setting the command the slot is going to control. 
//This could be called multiple times if the client of
//this code wanted to change the behavior of the remote button
   setCommand(command:Command){
       this.slot = command
   }

//This method is called when the button is pressed. All we do is take
//the current command bound to the slot and call its execute() method.
   buttonWasPressed():void{
       this.slot.execute();
   }
}

//The remote is our Invoker it will be passed a command object that can be used to make requests.
let remote = new SimpleRemoteControl()
//Now we create a Light object, this will be the Receiver of the request.
let light = new Light()
//Here, create a command and pass the Receiver to it
let lightOn = new LightOnCommand(light);


//Here, pass the command to the Invoker.
remote.setCommand(lightOn)
//And then we simulate the button being pressed.
remote.buttonWasPressed()