export class Qa {
    constructor(question, description, answer) {
        this._question      = question;
        this._description   = description;
        this._answer        = answer;
    }
    get title() {
        return this._question;
    }
    set title(title) {
        this._question = title;
    }

    get answer() {
        return this._answer;
    }

    set answer(answer) {
        this._answer = answer;
    }
    get question() {
        return this._question;
    }

    set question(question) {
        this._question = question;
    }
    get description() {
        return this._description;
    }

    set description(description) {
        this._description = description;
    }
}
