var requestPost = require("../server/index")
var validateRequest = requestPost.validate
var httpMocks = require('node-mocks-http')


describe('Test, the function "validate()" should exist' , () => {
    test('It should return true', async () => {
        expect(validateRequest).toBeDefined();
    });
 });

 describe('Test "validate()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof validateRequest).toBe("function");
      });
 });

 describe('Test, the function "validate()" throw error if incorrect user inputs' , () => {
    test('validate function should throw error if incorrect user inputs', () => {
    const next = jest.fn();
    const req = httpMocks.createRequest({ 
        body: { 
        url: "https://www.nydailynews.com/sports/football/ny-colin-kaepernick-roger-goodell-protest-kneeling-20200616-rv6q4k2geneadfhm6haxspryhi-story.html"
        }
  });

    const res = httpMocks.createResponse();
    validateRequest(req, res, next);
    // validate HTTP result
    expect(res.statusCode).toBe(400);
    expect(res._isJSON()).toBeTruthy();
    // validate message
    const json = JSON.parse(res._getData());
    expect(json.message).toBe('Invalid input');
     });
 })