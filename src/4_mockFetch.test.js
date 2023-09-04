import { fetchJoke } from './4_mockFetch';
import fetchMock from 'fetch-mock-jest';

// You'll practice how to mock Network requests (fetch)!
// Simple: Mock fetch manually - https://www.youtube.com/watch?v=mHXhuPHiDj8
// Real-world: Use `fetch-mock-jest` to mock fetch - https://www.youtube.com/watch?v=yhUep7E9O20
// Bonus (Advanced): Use `msw` to intercept the requests. - https://www.youtube.com/watch?v=v77fjkKQTH0




describe('fetchJoke', () => {
  afterEach(() => {
    fetchMock.reset();
  });

  test('should return a joke when called with a valid containsWord argument', async () => {
    const containsWord = 'bug';
    const mockResponse = {
      type: 'single',
      joke: 'Why was the JavaScript developer sad? Because he didn\'t know how to `null` his feelings.'
    };

    fetchMock.get(`https://v2.jokeapi.dev/joke/Programming?contains=${containsWord}`, mockResponse);

    const result = await fetchJoke(containsWord);

    expect(typeof result).toBe('string');
    expect(result).toEqual(mockResponse.joke);
  });

  test('should return a two-part joke when called with a valid containsWord argument', async () => {
    const containsWord = 'bug';
    const mockResponse = {
      type: 'twopart',
      setup: 'Why did the bug cross the road?',
      delivery: 'To get to the other side!'
    };

    fetchMock.get(`https://v2.jokeapi.dev/joke/Programming?contains=${containsWord}`, mockResponse);

    const result = await fetchJoke(containsWord);

    expect(typeof result).toBe('string');
    expect(result).toEqual(`${mockResponse.setup} ... ${mockResponse.delivery}`);
  });

  test('should return an error message when API responds with an error', async () => {
    const containsWord = 'invalid';
    const mockErrorResponse = {
      error: true,
      message: 'No jokes found',
      causedBy: ['containsWord parameter is required']
    };

    fetchMock.get(`https://v2.jokeapi.dev/joke/Programming?contains=${containsWord}`, mockErrorResponse);

    const result = await fetchJoke(containsWord);

    expect(typeof result).toBe('string');
    expect(result).toEqual('No jokes found. containsWord parameter is required');
  });
});
