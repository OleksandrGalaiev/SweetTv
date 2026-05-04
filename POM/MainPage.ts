import { Locator, Page } from "playwright";


export class MainPage{
    page:Page
    ageConfirnmationBtn: Locator
    ageConfirmationPopup: Locator

    constructor(page:Page){
        this.page = page
        this.ageConfirnmationBtn = page.locator(".confirmation__info-close").first()
        this.ageConfirmationPopup = page.locator(".confirmation__info").first()
        let currentLanguage = this.page.locator('')
    }

    async switchLanguageTo(language:string){
        
    }


}