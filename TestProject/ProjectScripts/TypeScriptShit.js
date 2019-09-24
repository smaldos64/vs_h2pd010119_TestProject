var ButtonClickNumberCounter = 0;
var ButtonClickArray = [];
var ButtonClickActivity = /** @class */ (function () {
    function ButtonClickActivity(params) {
        this.ButtonClickNumber = params.ButtonClickNumber;
        this.ButtonClickTime = new Date();
        ButtonClickActivity._numberOfObjectCreatedOnClass++;
    }
    Object.defineProperty(ButtonClickActivity.prototype, "ButtonClickNumber", {
        get: function () {
            return (this._buttonClickNumber);
        },
        set: function (ButtonClickNumber) {
            this._buttonClickNumber = ButtonClickNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonClickActivity.prototype, "ButtonClickTime", {
        get: function () {
            return (this._buttonClickTime);
        },
        set: function (ButtonClickTime) {
            this._buttonClickTime = ButtonClickTime;
        },
        enumerable: true,
        configurable: true
    });
    ButtonClickActivity.prototype.GetButtonClickTime = function () {
        return (this.ButtonClickTime);
    };
    ButtonClickActivity.prototype.GetButtonClickNumberAndTime = function () {
        return ((this.ButtonClickNumber + " : " + this.ButtonClickTime).toString());
    };
    // Funktionen herunder giver en transpiling fejl. Så vi må altså ikke lave
    // Function Overload i TypeScript, som vi er vant til fra f,eks. C#.
    //public GetButtonClickTime(Test : number): Date {
    //    return (this.ButtonClickTime);
    //}
    //public toString = (): string => {
    //    return `(${(this.ButtonClickNumber + " : " + this.ButtonClickTime + " : " + ButtonClickActivity._numberOfObjectCreatedOnClass).toString()})`; 
    ButtonClickActivity.prototype.toString = function () {
        return (this.ButtonClickNumber + " : " + this.ButtonClickTime + " : Number Objects : " + ButtonClickActivity._numberOfObjectCreatedOnClass).toString();
    };
    ButtonClickActivity._numberOfObjectCreatedOnClass = 0;
    return ButtonClickActivity;
}());
function DoTheShitTypeScript() {
    //let ButtonClickActivity_Object: ButtonClickActivity = new ButtonClickActivity({ ButtonClickNumber: ButtonClickNumberCounter })
    ButtonClickNumberCounter++;
    ButtonClickArray.push(new ButtonClickActivity({ ButtonClickNumber: ButtonClickNumberCounter }));
}
function GetLastButtonActivity() {
    //return (ButtonClickArray[ButtonClickArray.length - 1]);
    return (ButtonClickArray[ButtonClickArray.length - 1].GetButtonClickNumberAndTime());
}
function GetLastButtonActivityObject() {
    return (ButtonClickArray[ButtonClickArray.length - 1]);
}
//# sourceMappingURL=TypeScriptShit.js.map