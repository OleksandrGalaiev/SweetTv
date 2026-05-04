import {expect, test} from "../test-options"

test.describe('WEB, UI, Search film', async()=>{

    test('Search tv Program via search field', {tag:'@search'}, async({app, SWEET_TV})=>{
        let searchContent = 'Вгадай мелодію'
        await test.step(`Open main page- ${SWEET_TV}`, async()=>{
            await app.open(SWEET_TV)
        })
        await test.step(`Search for content - ${searchContent}`, async()=>{
            await app.mainPage.searchFor(searchContent)
        })
        await test.step('Check found conten bread crumb',async()=>{
            expect(await app.getClearTextContent(app.productPage.productBreadCrumb)).toEqual(searchContent)
        })
    })
})