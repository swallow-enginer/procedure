export class Title {
    constructor(no, title, date) {
        this._no           = no;
        this._title        = title;
        this._date         = date;
    }

    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }

    get date() {
        return this._date;
    }

    set date(date) {
        this._date = date;
    }
    get no() {
        return this._no;
    }

    set no(no) {
        this._no = no;
    }
}
