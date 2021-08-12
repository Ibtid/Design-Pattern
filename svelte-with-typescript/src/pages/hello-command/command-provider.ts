import {
    Light,
    RedLight,
    Command,
    LightOnCommand,
    LightOffCommand, 
    RedLightIncrease, 
    RedLightDecrease, 
    RemoteControl
} from  '../../patterns/command/command-remote'

let remote
let light
let lightOnCommand
let lightOffCommand
let redLight
let redLightIncrease 
let redLightDecrease



remote = new RemoteControl();
console.log(' new remote')

light = new Light();
lightOnCommand = new LightOnCommand(light);
lightOffCommand = new LightOffCommand(light);

redLight = new RedLight();
redLightIncrease = new RedLightIncrease(redLight);
redLightDecrease = new RedLightDecrease(redLight);

export function controlLight(bulb: string){
    if(bulb === 'on'){
        remote.setCommand(lightOnCommand);
        console.log('on executed')
    }
    if(bulb === 'off'){
        remote.setCommand(lightOffCommand);
        console.log('off executed')

    }
    if(bulb === 'increaseLum'){
        remote.setCommand(redLightIncrease);
        console.log('red + executed')

    }
    if(bulb === 'decreaseLum'){
        remote.setCommand(redLightDecrease);
        console.log('red - executed')

    }
    if(bulb === 'redLight'){
        remote.setCommand(redLightDecrease);
        console.log('red executed')

    }
    return remote.buttonWasPressed()
}