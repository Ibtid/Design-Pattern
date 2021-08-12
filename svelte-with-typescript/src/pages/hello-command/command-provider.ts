import {
    Light,
    LightOnCommand,
    LightOffCommand, 
    RedLightIncrease, 
    RedLightDecrease, 
    RemoteControl,
    RedLightOn,
} from  '../../patterns/command/command-remote'

let remote
let light


remote = new RemoteControl();
light = new Light();

export function controlLight(bulb: string){
    if(bulb === 'on'){
        remote.setCommand(new LightOnCommand(light));
    }
    if(bulb === 'off'){
        remote.setCommand(new LightOffCommand(light));
    }
    if(bulb === 'increaseLum'){
        remote.setCommand(new RedLightIncrease(light));
    }
    if(bulb === 'decreaseLum'){
        remote.setCommand(new RedLightDecrease(light));
    }
    if(bulb === 'redLight'){
        remote.setCommand(new RedLightOn(light));
    }
    return remote.buttonWasPressed()
}