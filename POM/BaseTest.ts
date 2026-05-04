import { Locator, Page } from "playwright";
import { MainPage } from "./MainPage";
import { ProductPage } from "./ProductPage";

export class BaseTest{
    page: Page
    mainPage: MainPage
    productPage: ProductPage

    constructor(page:Page){
        this.page = page
        this.mainPage = new MainPage(this.page)
        this.productPage = new ProductPage(this.page)
    }

    async open(url:string){
        await this.page.goto(url)
        await this.page.waitForTimeout(1000)
        if(await this.mainPage.ageConfirmationPopup.isVisible()){
            await this.mainPage.ageConfirnmationBtn.click()
        }
    }
    async getClearTextContent(element:Locator){
        let draftText = await element.textContent()
        return draftText?.trim()
    }
    async getCurrentUrl(){
        return await this.page.url()
    }
}