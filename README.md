## Evaluate News article & Text with Natural Language Processing (NLP)

## what is NLP?
Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

## instructions
in this project we will build a web tool which takes URL / Text and gives you a result based on Natural Language Processing(NLP) by using Aylien API so our simple web interect with thier NLP system ..
here is we use two EndPoint:
1-Entity Extraction
2-Sentiment Analysis.

## Running
to run this project clone or install it from github repo `https://github.com/jihadtareq/NLP-Udacity`

write `cd` to enter its folder then copy this command line`npm install`.

## run in development mode
development mode runs at port 8080 
to run this mode copy this ` $ npm run build-dev`.

### run in production mode
this mode also runs at port 8080

`$ npm run build-prod`

` $ npm run start`.

## Configs
we have two webpack config files for both development mode(`webpack.config.dev.js`) and production mode(`webpack.config.prod.js` )

`package.json` file to manage dependencies

## Aylien API
The AYLIEN Text Analysis API is a package of Natural Language Processing and Machine Learning-powered APIs for analyzing and extracting various kinds of information from textual content.

## SDKs
our SDKs from `Aylien`.

## service workers 
the project have service workers set up in webpack to provide the offline functionality of our app.

## Testing
we used `jest` to test

copy this `npm run test` for running the test

## HTML 
this project contains just only one Home Page contains two inputs, one for text and the other for URL
