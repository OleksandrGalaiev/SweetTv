import { Locator, Page } from "@playwright/test"

export class ProductPage{
    private page: Page
    productBreadCrumb: Locator

    constructor(page:Page){
        this.page = page
        this.productBreadCrumb = page.locator('#breadcrumb-2')
    }

}