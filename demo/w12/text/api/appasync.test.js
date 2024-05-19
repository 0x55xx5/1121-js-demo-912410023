// Import the necessary dependencies for testing
const fetch = require('node-fetch');

// Mock the fetch function
jest.mock('node-fetch');

// Import the function to be tested
const { test2 } = require('./appasync');

describe('test2', () => {
  it('should fetch data and append it to the document body', async () => {
    // Mock the response data
    const responseData = [
      { name: 'John Doe', email: 'johndoe@example.com' },
      { name: 'Jane Smith', email: 'janesmith@example.com' },
      { name: 'Bob Johnson', email: 'bobjohnson@example.com' },
      { name: 'Alice Brown', email: 'alicebrown@example.com' },
    ];

    // Mock the fetch function to return a resolved promise with the response data
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(responseData),
    });

    // Create a mock div element
    const mockDiv = document.createElement('div');

    // Mock the document.createElement function to return the mock div element
    jest.spyOn(document, 'createElement').mockReturnValueOnce(mockDiv);

    // Call the function to be tested
    await test2();

    // Assert that the fetch function was called with the correct URL
    expect(fetch).toHaveBeenCalledWith(url);

    // Assert that the response data was logged to the console
    expect(console.log).toHaveBeenCalledWith(responseData);

    // Assert that the data was appended to the document body
    expect(document.body.appendChild).toHaveBeenCalledWith(mockDiv);
  });

  it('should handle errors', async () => {
    // Mock the fetch function to return a rejected promise
    fetch.mockRejectedValueOnce(new Error('Network error'));

    // Call the function to be tested
    await test2();

    // Assert that the error was logged to the console
    expect(console.log).toHaveBeenCalledWith(new Error('Network error'));
  });
});