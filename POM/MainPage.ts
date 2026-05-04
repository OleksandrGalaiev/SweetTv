import { Locator, Page } from "playwright";


export class MainPage{
    private page:Page
    ageConfirnmationBtn: Locator
    ageConfirmationPopup: Locator
    currentLanguage: Locator
    signIn: Locator
    headerIsAuthBtn: Locator
    categoryBreadCrumb: Locator
    titleHeader: Locator
    burgerMenu: Locator
    searchField: Locator

    constructor(page:Page){
        this.page = page
        this.ageConfirnmationBtn = page.locator(".confirmation__info-close").first()
        this.ageConfirmationPopup = page.locator(".confirmation__info").first()
        this.currentLanguage = page.locator('.header-seo__language-current')
        this.signIn = page.locator('.header-seo__sign-link')
        this.headerIsAuthBtn = page.locator("//div[@class='header-seo__buttons']//button[@data-isauth]")
        this.categoryBreadCrumb = page.locator('#breadcrumb-1')
        this.titleHeader = page.locator("//h1")
        this.burgerMenu = page.locator('.header-seo__burger').first()
        this.searchField = page.locator("#search_v2")
    }

    async switchLanguageTo(language:string){
        let defaultLanguage = await this.currentLanguage.textContent()
        if( defaultLanguage?.trim() !== 'uk'){
            await this.currentLanguage.click()
            await this.page.locator(`//a[@id="${language}"]`).click()
        }
    }

    async chooseBurgeMenuCategory(categoryName:string){
        await this.burgerMenu.click()
        let category = await this.page.locator(`.header-seo__burger .header-seo__routes-route-text`, {hasText:categoryName})
        await category.click()
    }

    async openSupportCategoryLandingPage(categoryName:string){
        await this.burgerMenu.click()
        await this.page.locator('.header-seo__burger-additional-list-header').first().click()
        await this.page.locator(`//a[contains(text(), '${categoryName}')]`).first().click()
    }

    async searchFor(nameOfContent:string){
        await this.searchField.click()
        await this.page.locator("#searchInput").fill(nameOfContent)
        let foundElement = this.page.locator(".header-seo__search-dropdown-items-item").first()
        await foundElement.waitFor({'state':'visible'})
        await foundElement.click()
    }
    


}