//Vendor class
class Light {
    public on(){
        return "on.png"
    }
    public off(){
        return "off.png"
    }
}

class RedLight {
    public HIGH:number = 3;
    public MEDIUM:number = 2;
    public LOW:number = 1;
    public VERYLOW:number = 0;
    luminosity:number;

    constructor(luminosity:number){
        this.luminosity = luminosity
    }

    public redZero(){
        this.luminosity=this.VERYLOW;
        return 'red/0.png';
    }
    public redOne(){
        this.luminosity=this.LOW;
        return "red/1.png"
    }
    public redTwo(){
        this.luminosity=this.MEDIUM;
        return "red/2.png"
    }
    public redThree(){
        this.luminosity=this.HIGH;
        return "red/3.png"
    }

    public  getLuminosity(){
        return this.luminosity;
    }
}

interface Command {
    execute():void
}

export class LightOnCommand implements Command {
    light:Light;
    constructor(light:Light) {
        this.light = light;
    }
    execute():void{
        this.light.on()
    }
}

export class LightOffCommand implements Command {
    light:Light;
    constructor(light:Light) {
        this.light = light;
    }
    execute():void{
        this.light.off()
    }
}

export class RedLightIncrease implements Command {
    light:RedLight;
    prevLuminosity:number;
    constructor(light:RedLight) {
        this.light = light;
    }
    execute():void{
        this.prevLuminosity = this.light.getLuminosity();
        if(this.prevLuminosity = this.light.HIGH){
            this.light.redThree()
        }
        if(this.prevLuminosity = this.light.MEDIUM){
            this.light.redThree();
        }
        if(this.prevLuminosity = this.light.LOW){
            this.light.redTwo();
        }
        if(this.prevLuminosity = this.light.VERYLOW){
            this.light.redOne();
        }
    }
}

export class RedLightDeccrease implements Command {
    light:RedLight;
    prevLuminosity:number;
    constructor(light:RedLight) {
        this.light = light;
    }
    execute():void{
        this.prevLuminosity = this.light.getLuminosity();
        if(this.prevLuminosity = this.light.HIGH){
            this.light.redTwo()
        }
        if(this.prevLuminosity = this.light.MEDIUM){
            this.light.redOne();
        }
        if(this.prevLuminosity = this.light.LOW){
            this.light.redZero();
        }
        if(this.prevLuminosity = this.light.VERYLOW){
            this.light.redZero();
        }
    }
}
