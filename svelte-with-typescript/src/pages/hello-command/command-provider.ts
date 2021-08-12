import {
    Light,
    RedLight,
    LightOnCommand,
    LightOffCommand, 
    RedLightIncrease, 
    RedLightDecrease, 
    RemoteControl,
    RedLightOn,
} from  '../../patterns/command/command-remote'

let remote
let light
let lightOnCommand
let lightOffCommand
let redLight


remote = new RemoteControl();

light = new Light();
lightOnCommand = new LightOnCommand(light);
lightOffCommand = new LightOffCommand(light);

redLight = new RedLight();
let redLightOn = false;

export function controlLight(bulb: string){
    if(bulb === 'on'){
        remote.setCommand(lightOnCommand);
    }
    if(bulb === 'off'){
        remote.setCommand(lightOffCommand);
        redLightOn = false;
    }
    if(bulb === 'increaseLum' && redLightOn){
        remote.setCommand(new RedLightIncrease(redLight));
    }
    if(bulb === 'decreaseLum' && redLightOn){
        remote.setCommand(new RedLightDecrease(redLight));
    }
    if(bulb === 'redLight'){
        remote.setCommand(new RedLightOn(redLight));
        redLightOn=true
    }
    return remote.buttonWasPressed()
}