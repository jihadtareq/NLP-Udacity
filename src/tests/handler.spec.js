import { handleSubmit } from '../client/js/formHandler'
import { handleSubmitArticle } from '../client/js/URLHandler'



describe('Test,functions "handleSubmit()& handleSubmitArticle()" should exist' , () => {
    test('It should return true', async () => {
        expect(handleSubmit).toBeDefined();
        expect(handleSubmitArticle).toBeDefined();
    });
});

describe('Test,functions "handleSubmit()& handleSubmitArticle()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof handleSubmit).toBe("function");
        expect(typeof handleSubmitArticle).toBe("function");
    });
});
