# Testing

I used [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) with [Jest](https://jestjs.io/) for writing tests. I have a combination of unit tests and integration tests. Eventually I'll add end-to-end testing with [Cypress](https://www.cypress.io/). I do not currently have full test coverage, but I tested some of the important authentication functions inside the `auth` folder. And I have tests for the profile, projects, and project pages.

## 🧪 Running the tests

You can run the tests with `yarn test`

## Test utilities

In the `__testUtils__` folder there is a file called `factories`. This is where I create objects that can be used for mocking data in the tests.

## Mocking axios requests

Using jest, axios can be mocked by using:

```
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
```

Then inside the test, you can add `mockedAxios.get.mockResolvedValueOnce({ data: 'Hello world' });` where the `mockedResolvedValueOnce` function returns the mock data that is needed for the component.
