interface UserText {
    operation(): string
}

class EnglishText implements UserText {

    inputText: string

    constructor(inputText: string) {
        this.inputText = inputText
    }

    public operation(): string {
        return this.inputText;
    }
}

class TextDecorator implements UserText {
    protected component: UserText;

    constructor(component: UserText) {
        this.component = component;
    }

    public operation(): string {
        return this.component.operation();
    }
}

class ItalicDecorator extends TextDecorator {
    public operation(): string {
        return super.operation().italics();
    }
}

class BoldDecorator extends TextDecorator {
    public operation(): string {
        return super.operation().bold();
    }
}

class StrikeDecorator extends TextDecorator {
    public operation(): string {
        return super.operation().strike();
    }
}


function clientCode(component: UserText) {
    console.log(`RESULT: ${component.operation()}`);
}

const simple = new EnglishText('Hi');
const decorator1 = new ItalicDecorator(simple);
const decorator2 = new BoldDecorator(decorator1);
const decorator3 = new StrikeDecorator(decorator2);


clientCode(decorator3);