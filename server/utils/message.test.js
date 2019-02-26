const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  
  it('should generate the correct message object', () => {
    let message = generateMessage('Billy Idol', 'Rebel Yell')

    expect(typeof message.createdAt).toBe('number');
    // expect(message.from).toBe('Billy Idol');
    // expect(message.text).toBe('Rebel Yell');
    expect(message).toMatchObject({
      from: 'Billy Idol',
      text: 'Rebel Yell'
    })
  })
})

describe('generateLocationMessage', () => {

  it('should generate the correct location object', () => {
    let locMessage = generateLocationMessage('Duke Ellington', 25, 25);

    expect(locMessage.from).toBe('Duke Ellington');
    expect(typeof locMessage.createdAt).toBe('number');
    expect(locMessage.url).toBe('https://www.google.com/maps?q=25,25');

  })
})