let ButtonClickNumberCounter: number = 0;
let ButtonClickArray = [];

class ButtonClickActivity {
    private _buttonClickNumber: number;
    private _buttonClickTime: Date;
    private static _numberOfObjectCreatedOnClass: number = 0;

    set ButtonClickNumber(ButtonClickNumber: number) {
        this._buttonClickNumber = ButtonClickNumber;
    }

    get ButtonClickNumber(): number {
        return (this._buttonClickNumber);
    }

    set ButtonClickTime(ButtonClickTime: Date) {
        this._buttonClickTime = ButtonClickTime;
    }

    get ButtonClickTime(): Date {
        return (this._buttonClickTime);
    }

    constructor(params: { ButtonClickNumber: number }) {
        this.ButtonClickNumber = params.ButtonClickNumber;
        this.ButtonClickTime = new Date();
        ButtonClickActivity._numberOfObjectCreatedOnClass++;
    }

    public GetButtonClickTime(): Date {
        return (this.ButtonClickTime);
    }

    public GetButtonClickNumberAndTime(): string {
        return ((this.ButtonClickNumber + " : " + this.ButtonClickTime).toString());
    }

    // Funktionen herunder giver en transpiling fejl. Så vi må altså ikke lave
    // Function Overload i TypeScript, som vi er vant til fra f,eks. C#.
    //public GetButtonClickTime(Test : number): Date {
    //    return (this.ButtonClickTime);
    //}

    //public toString = (): string => {
    //    return `(${(this.ButtonClickNumber + " : " + this.ButtonClickTime + " : " + ButtonClickActivity._numberOfObjectCreatedOnClass).toString()})`; 

    public toString(): string {
        return (this.ButtonClickNumber + " : " + this.ButtonClickTime + " : Number Objects : " + ButtonClickActivity._numberOfObjectCreatedOnClass).toString(); 
    }
}

function DoTheShitTypeScript() {
    //let ButtonClickActivity_Object: ButtonClickActivity = new ButtonClickActivity({ ButtonClickNumber: ButtonClickNumberCounter })
    ButtonClickNumberCounter++;
    ButtonClickArray.push(new ButtonClickActivity({ ButtonClickNumber: ButtonClickNumberCounter }));
}

function GetLastButtonActivity(): string {
    //return (ButtonClickArray[ButtonClickArray.length - 1]);
    return (ButtonClickArray[ButtonClickArray.length - 1].GetButtonClickNumberAndTime());
}

function GetLastButtonActivityObject(): ButtonClickActivity {
    return (ButtonClickArray[ButtonClickArray.length - 1]);
}