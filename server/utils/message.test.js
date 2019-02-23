const expect = require('expect');
const {generateMessage} = require('./message');

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