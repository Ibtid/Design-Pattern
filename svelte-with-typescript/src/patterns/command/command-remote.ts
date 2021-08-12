//Vendor class
export class Light {
    public on(){
        return "on"
    }
    public off(){
        return "off"
    }
}

export class LightOnCommand implements Command {
    light:Light;
    constructor(light:Light) {
        this.light = light;
    }
    execute():string{
        return this.light.on()
    }
}

export class LightOffCommand implements Command {
    light:Light;
    constructor(light:Light) {
        this.light = light;
    }
    execute():string{
        return this.light.off()
    }
}

export class RedLight {
    public HIGH:number = 3;
    public MEDIUM:number = 2;
    public LOW:number = 1;
    public VERYLOW:number = 0;
    luminosity:number;

    constructor(){
        this.luminosity = this.VERYLOW
    }

    public redZero(){
        this.luminosity=this.VERYLOW;
        return 'red0';
    }
    public redOne(){
        this.luminosity=this.LOW;
        return "red1"
    }
    public redTwo(){
        this.luminosity=this.MEDIUM;
        return "red2"
    }
    public redThree(){
        this.luminosity=this.HIGH;
        return "red3"
    }

    public  getLuminosity(){
        return this.luminosity;
    }
}

export interface Command {
    execute():string
}

export class RedLightIncrease implements Command {
    light:RedLight;
    prevLuminosity:number;
    constructor(light:RedLight) {
        this.light = light;
        this.prevLuminosity=light.getLuminosity();
    }
    execute():string{
        console.log(this.prevLuminosity)
        if(this.prevLuminosity === this.light.HIGH){
           return this.light.redThree()
        }
        if(this.prevLuminosity === this.light.MEDIUM){
           return this.light.redThree();
        }
        if(this.prevLuminosity === this.light.LOW){
           return this.light.redTwo();
        }
        if(this.prevLuminosity === this.light.VERYLOW){
           return this.light.redOne();
        }
    }
}

export class RedLightDecrease implements Command {
    light:RedLight;
    prevLuminosity:number;
    constructor(light:RedLight) {
        this.light = light;
        this.prevLuminosity=light.getLuminosity();
    }
    execute():string{
        

        if(this.prevLuminosity === this.light.HIGH){
           return this.light.redTwo()
        }
        if(this.prevLuminosity === this.light.MEDIUM){
           return this.light.redOne();
        }
        if(this.prevLuminosity === this.light.LOW){
           return this.light.redZero();
        }
        if(this.prevLuminosity === this.light.VERYLOW){
           return this.light.redZero();
        }
    }
}

export class RedLightOn implements Command {
    light:RedLight;
    prevLuminosity:number;
    constructor(light:RedLight) {
        this.light = light;
        this.prevLuminosity=light.getLuminosity();
    }
    execute():string{
        return this.light.redOne();
      
    }
}

export class RemoteControl{
    command:Command

    setCommand(command:Command){
        this.command = command
    }

    buttonWasPressed(){
       return this.command.execute()
    }
}