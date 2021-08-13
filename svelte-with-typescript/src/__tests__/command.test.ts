import { Light, LightOnCommand,LightOffCommand, RedLightOnCommand, RedLightDecreaseCommand, RedLightIncreaseCommand } from "../patterns/command/command-remote";

describe('Command Pattern Test', () => {
    test('Red Light Increased', () => {
        let expected = new Light();
        expected.isLightOn = true;
        expected.isRedLightOn=true;
        expected.luminosity=1;
        let reality = new RedLightIncreaseCommand(expected);
        expect(expected.redTwo()).toEqual(reality.execute());
    })
    test('Red Light Decreased', () => {
        let expected = new Light();
        expected.isLightOn = true;
        expected.isRedLightOn=true;
        expected.luminosity=1;
        let reality = new RedLightDecreaseCommand (expected);
        expect(expected.redZero()).toEqual(reality.execute());
    })
    test('Set Red Light', () => {
        let expected = new Light();
        expected.isLightOn = true;
        let reality = new RedLightOnCommand(expected);
        expect(expected.redOne()).toEqual(reality.execute());
    })
    test('Turn On Light', () => {
        let expected = new Light();
        expected.isLightOn = true;
        let reality = new LightOnCommand(expected);
        expect(expected.on()).toEqual(reality.execute());
    })
    test('Turn Off Light', () => {
        let expected = new Light();
        let reality = new LightOffCommand(expected);
        expect(expected.off()).toEqual(reality.execute());
    })
})