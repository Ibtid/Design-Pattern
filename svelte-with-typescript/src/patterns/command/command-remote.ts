//Vendor class
export class Light {
    public HIGH:number = 3;
    public MEDIUM:number = 2;
    public LOW:number = 1;
    public VERYLOW:number = 0;
    isRedLightOn:boolean;
    isLightOn:boolean;
    luminosity:number;

    constructor(){
        this.luminosity = this.VERYLOW
        this.isRedLightOn = false
        this.isLightOn = false
    }

    public on(){
        this.isLightOn = true;
        this.isRedLightOn = false;
        return "on";
    }
    public off(){
        this.isLightOn = false;
        this.isRedLightOn = false;
        return "off"
    }
    public redZero(){
        this.luminosity=this.VERYLOW;
        return 'red0';
    }
    public redOne(){
        this.luminosity=this.LOW;
        this.isRedLightOn = true;
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
    public getRedLightStatus(){
        return this.isRedLightOn;
    }
    public getLightOnStatus(){
        return this.isLightOn;
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


export interface Command {
    execute():string
}

export class RedLightIncreaseCommand implements Command {
    light:Light;
    prevLuminosity:number;
    isRedLightOn:boolean;
    isLightOn:boolean;
    constructor(light:Light) {
        this.light = light;
        this.prevLuminosity=light.getLuminosity();
        this.isRedLightOn=light.getRedLightStatus();
        this.isLightOn=light.getLightOnStatus();
    }
    execute():string{
        if(!this.isLightOn){
            return this.light.off()
        }
        else if(!this.isRedLightOn){
            return this.light.on();
        }
        else if(this.prevLuminosity === this.light.HIGH){
           return this.light.redThree()
        }
        else if(this.prevLuminosity === this.light.MEDIUM){
           return this.light.redThree();
        }
        else if(this.prevLuminosity === this.light.LOW){
           return this.light.redTwo();
        }
        else {
           return this.light.redOne();
        }
    }
}

export class RedLightDecreaseCommand implements Command {
    light:Light;
    prevLuminosity:number;
    isRedLightOn:boolean;
    isLightOn:boolean;
    constructor(light:Light) {
        this.light = light;
        this.prevLuminosity=light.getLuminosity();
        this.isRedLightOn=light.getRedLightStatus();
        this.isLightOn=light.getLightOnStatus();
    }
    execute():string{
        if(!this.isLightOn){
            return this.light.off()
        }
        else if(!this.isRedLightOn){
            return this.light.on();
        }
        else if(this.prevLuminosity === this.light.HIGH){
           return this.light.redTwo()
        }
        else if(this.prevLuminosity === this.light.MEDIUM){
           return this.light.redOne();
        }
        else if(this.prevLuminosity === this.light.LOW){
           return this.light.redZero();
        }
        else {
           return this.light.redZero();
        }
    }
}

export class RedLightOnCommand implements Command {
    light:Light;
    prevLuminosity:number;
    isLightOn:boolean;
    constructor(light:Light) {
        this.light = light;
        this.prevLuminosity=light.getLuminosity();
        this.isLightOn=light.getLightOnStatus()
    }
    execute():string{
        if(this.isLightOn){
            return this.light.redOne();
        }else{
            return this.light.off();
        }
    }
}

export class RemoteControl{
    command!:Command

    setCommand(command:Command){
        this.command = command
    }

    buttonWasPressed(){
       return this.command.execute()
    }
}