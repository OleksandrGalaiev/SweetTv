import { Page } from "playwright";
import { MainPage } from "./MainPage";

export class BaseTest{
    page: Page
    mainPage: MainPage

    constructor(page:Page){
        this.page = page
        this.mainPage = new MainPage(this.page)
    }

    async open(url:string){
        await this.page.goto(url)
        await this.page.waitForTimeout(1000)
        if(await this.mainPage.ageConfirmationPopup.isVisible()){
            await this.mainPage.ageConfirnmationBtn.click()
        }
    }
}