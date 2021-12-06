import AppHeader from '@/components/AppHeader'
import { mount } from '@vue/test-utils'

//describe - use for grouping test per component
describe('AppHeader', function () {
    //test - method use for creating test case
    test('if user not logged in, do not show logout button', () => {
        // test body
        const wrapper = mount(AppHeader) // mounting the component 
        expect(wrapper.find('button').isVisible()).toBe(false)
    })

    test('if user is logged in, show logout button', async () => {
        //test body
        const wrapper = mount(AppHeader)
        wrapper.setData({ loggedIn: true }) //setting our data value
        await wrapper.vm.$nextTick() 
        expect(wrapper.find('button').isVisible()).toBe(true)
    })

})