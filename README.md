# React Image Regression Test Example [![Build Status](https://travis-ci.org/w0rm/react-image-regression-test-example.png)](https://travis-ci.org/w0rm/react-image-regression-test-example)

A demo project for the React Grid component, that is tested by
Travis on different platforms provided by Sauce Labs.

Gemini is used for the image regression tests.

```xml
<Container wrap={{phone: true, tablet: true, desktop: true}}>
    <Item span={{phone: 12, tablet: 6, desktop: 3}}>Content</Item>
    <Item span={{phone: 12, tablet: 6, desktop: 3}}>Content</Item>
    <Item span={{phone: 12, tablet: 6, desktop: 3}}>Content</Item>
</Container>
```

# Commands

`npm start` runs dev server
`npm test` runs gemini tests on sauce labs
`npm run gather` gathers gemini reference images
`npm run gui` starts gemini gui
