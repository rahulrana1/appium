//import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Dialog {
    /**
     * define selectors using getter methods
     */
    get appbtn() { return $('~App') }
    get repeatAlarmBtn() { return $('~Repeat alarm') }
    weekdayCheckbox(index) {
        return $('//android.widget.CheckedTextView[@index="${index}"]')
    }
    //Repeat alarm
    get alertDialogBtn() { return $('~Alert Dialogs')}
    get textEntryDialogBtn() { return $('~Text Entry dialog') }
    get userNameField() { return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]') }
    get passwordField() { return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]') }
    get dialogOkBtn() { return $('//android.widget.Button[@resource-id="android:id/button1"]') }
    get dialogCancelBtn() { return $('//android.widget.Button[@resource-id="android:id/button2"]') }
    get everyMondayBtn() { return $('//android.widget.CheckedTextView[@index="0"]') }
    get days() { return $$('//android.widget.CheckedTextView')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new Dialog();
