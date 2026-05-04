import {expect, test} from "../test-options"
import { Categories, LaningPages } from "../types/categories"
import { Localization } from "../types/header"


test.describe('WEB. Header UI Elememts. Switch languages', async()=>{
    const localizationSwitcher: Localization[] = [
        {'language':'uk', 'loginBtn':'Увійти','isAuthBtn':'Спробувати безкоштовно'},
        {'language':'en', 'loginBtn':'Sign in','isAuthBtn':'Try for free'},
        {'language':'ru', 'loginBtn':'Войти','isAuthBtn':'Попробовать бесплатно'}
    ]

    for(const{language, loginBtn, isAuthBtn} of localizationSwitcher){
        test(`Check of switching to ${language} language`, {tag:'@localization'}, async({app, SWEET_TV})=>{
            await test.step(`Open main page- ${SWEET_TV}`, async()=>{
                await app.open(SWEET_TV)
            })
            await test.step(`Switch language to ${language}`, async()=>{
                await app.mainPage.switchLanguageTo(language)
            })
            await test.step('Check localization of buttons: Log in, IsAuthButton', async()=>{
                expect(await app.getClearTextContent(app.mainPage.signIn)).toEqual(loginBtn)
                expect(await app.getClearTextContent(app.mainPage.headerIsAuthBtn)).toEqual(isAuthBtn)
            })
        })
    }
})

test.describe('WEB, UI. Categories and landing pages', async()=>{

    const categories:Categories[] = [
        {'categoryBurgerMenuPoint':'Мультики', 'categoryBreadCrumps':'Мультфільми','headerText':'Мультики на Світ ТВ'},
        {'categoryBurgerMenuPoint':'Серіали', 'categoryBreadCrumps':'Серіали','headerText':'Серіали на Світ ТВ'},
        {'categoryBurgerMenuPoint':'Спорт', 'categoryBreadCrumps':'Спорт','headerText':'Спорт на Світ ТВ'},
        {'categoryBurgerMenuPoint':'Новини', 'categoryBreadCrumps':'Новини','headerText':'Всі новини'},
        {'categoryBurgerMenuPoint':'Телепрограма', 'categoryBreadCrumps':'Програма каналу','headerText':'Телепрограма на сьогодні'},
        {'categoryBurgerMenuPoint':'FAQ', 'categoryBreadCrumps':'Поширені запитання','headerText':'Питання та відповіді'}
    ]
    for(const{categoryBurgerMenuPoint, categoryBreadCrumps, headerText} of categories ){
        test(`Check redirect from burger menu ${categoryBurgerMenuPoint} to category`,
            {tag:'@categories'} ,async({app, SWEET_TV})=>{
            await test.step(`Open main page- ${SWEET_TV}`, async()=>{
                await app.open(SWEET_TV)
            })
            await test.step(`Choose ${categoryBurgerMenuPoint} point in burger menu`, async()=>{
                await app.mainPage.chooseBurgeMenuCategory(categoryBurgerMenuPoint)
            })
            await test.step('Check BreadCrumbs and page header tittle', async()=>{
                expect(await app.getClearTextContent(app.mainPage.categoryBreadCrumb)).toEqual(categoryBreadCrumps)
                expect(await app.getClearTextContent(app.mainPage.titleHeader)).toEqual(headerText)
            })
        })
    }

    const landingPages: LaningPages[] = [
        {'categoryName':'SWEET.TV Originals', 'pageUrl':'originals_content'},
        {'categoryName':'Тарифи', 'pageUrl':'tariffs'},
        {'categoryName':'Промокод', 'pageUrl':'promo_code'}
    ]
    for(const{categoryName, pageUrl}of landingPages){
        test(`Check redirection from ${categoryName} category to landing page`, 
            {tag:'@categories'}, async({app, SWEET_TV})=>{
            await test.step(`Open main page- ${SWEET_TV}`, async()=>{
                await app.open(SWEET_TV)
            })
            await test.step(`Open ${categoryName} category and check url`, async()=>{
                await app.mainPage.chooseBurgeMenuCategory(categoryName)
                expect(await app.getCurrentUrl()).toContain(pageUrl)
            })
            })
    }

    const supportLandCategory: LaningPages[] = [
        {categoryName:'Про нас', pageUrl:'about'},
        {categoryName:'Hollywood українською', pageUrl:'hollywood-ukraine'},
        {categoryName:'Підтримка IT', pageUrl:'promo_it'},
        {categoryName:'Битва блогерів', pageUrl:'zaruba'},
        {categoryName:'Фонд кіно', pageUrl:'cinema_fund'},
        {categoryName:'Для преси', pageUrl:'for_press'},
        {categoryName:'Партнери', pageUrl:'partners'},
        {categoryName:'Опитування', pageUrl:'questionnaire'}
    ]
    for(const{categoryName, pageUrl}of supportLandCategory){
        test(`Check redirect from ${categoryName} category to support landing pages`, 
            {tag:'@categories'}, async({app, SWEET_TV})=>{
            await test.step(`Open main page- ${SWEET_TV}`, async()=>{
                await app.open(SWEET_TV)
            })
            await test.step(`Open support landing page - ${categoryName} and check url`, async()=>{
                await app.mainPage.openSupportCategoryLandingPage(categoryName)
                expect(await app.getCurrentUrl()).toContain(pageUrl)
            })  
        })
    }
})

    



