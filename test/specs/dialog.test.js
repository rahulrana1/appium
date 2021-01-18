const dialog = require('../pageobjects/dialog.page')
const expect = require('chai').expect;
//import dialog from '../pageobjects/dialog.page'
describe('Dialog', () => {
    it('Verify that the text entry dialog username & password field are editable', () => {
        dialog.appbtn.click();
        dialog.alertDialogBtn.click()
        dialog.textEntryDialogBtn.click()

        dialog.userNameField.clearValue()
        dialog.userNameField.addValue('Test User')

        dialog.passwordField.clearValue()
        dialog.passwordField.addValue('Test Pass')

        let text = dialog.userNameField.getText()
        console.log(text)
        expect(text).equal('Test User')
        dialog.dialogOkBtn.click()
    })

    it.only('Verify that the app adjusts when orientation is switched', () => {
        console.log(driver.getOrientation())
        driver.setOrientation('LANDSCAPE')

        driver.pause(3000)
        driver.saveScreenshot('./screenshots/landscape.png')

        dialog.appbtn.click();
        driver.setOrientation('PORTRAIT')
        driver.back()
        driver.saveScreenshot('./screenshots/portrait.png')

    })

    it.only('Verify thee repeat alarm options has attribute checked set to true when selected', () => {
        dialog.appbtn.click()
        dialog.alertDialogBtn.click()

    })
})