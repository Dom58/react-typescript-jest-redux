# React typescript Redux Jest

![badge-branches](https://user-images.githubusercontent.com/33524053/168774004-e7664c0d-3589-4daf-8ae4-d9b415ce8adc.svg)
![badge-functions](https://user-images.githubusercontent.com/33524053/168774016-4945ea80-6f5a-496e-9ff0-d521dc7bc57f.svg)
![badge-lines](https://user-images.githubusercontent.com/33524053/168774019-fc5e9c75-12ac-410e-b812-c6763b7cb932.svg)
![badge-statements](https://user-images.githubusercontent.com/33524053/168774023-12dae5ac-a9cd-44d7-80ed-e21ce004c4bc.svg)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

#### Jest will look for test files with any of the following popular naming conventions:

Files with .js suffix in `__tests__` folders.
Files with `.test.tsx` suffix.
Files with `.spec.jsx` suffix.
The `.test.js / .spec.js` files (or the `__tests__ `folders) can be located at any depth under the `src` top level folder.

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# `npm test -- --coverage` running test with the coverage

Or

# `npm test -- --coverage --watchAll=false` running test with the coverage by checking in all files

# Create Snatpshots

Run `npm i --save-dev @types/react-test-renderer` and import it in your test file like
`import renderer from 'react-test-renderer';` and use it in test method as
<code>
const tree = renderer.create(
<Your_Provider store={store}>
<Your_Componets />
</End_Your_Provider>
).toJSON();
expect(tree).toMatchSnapshot();
</code>

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Author `Dominique Ndahimana`
