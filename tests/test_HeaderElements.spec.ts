import {test} from "../test-options"
import { Localization } from "../types/header"


test.describe('WEB. Header UI Elememts', async()=>{
    const localizationSwitcher: Localization[] = [
        {'language':'uk', 'loginBtn':'Увійти','isAuthBtn':'Спробувати безкоштовно'},
        {'language':'en', 'loginBtn':'Sign in','isAuthBtn':'Try for free'},
        {'language':'ru', 'loginBtn':'Войти','isAuthBtn':'Попробовать бесплатно'}
    ]

    for(const{language, loginBtn, isAuthBtn} of localizationSwitcher){
        test(`Check of switching to ${language} language`, {tag:'@header'}, async({app, SWEET_TV})=>{
            await test.step(`Open main page- ${SWEET_TV}`, async()=>{
                await app.open('https://sweet.tv/en/')
            })
            await test.step(`Switch language to ${language}`, async()=>{
                
            })
        })
    }
})


