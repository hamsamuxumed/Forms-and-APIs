
let card = require('../index.html');

describe('index.html', () => {
    describe('form', () => {
        let form;
        let greetingInput;
        let eventType;
        let messageInput;

        beforeEach(() => {
            form = document.querySelector('form')
            greetingInput = form.getElementById('greeting');
            eventType = form.getElementById('event');
            messageInput = form.getElementById('message');
            submitInput = form.getElementById('submit');
        })

        test('it exists', () => {
            expect(form).toBeTruthy();
        });

        describe('greeting input', () => {
            test('it has an id of "greeting"', () => {
                expect(greetingInput.id).toBe('greeting');
            });
    
            test('it has a placeholder of "Enter greeting"', () => {
                expect(greetingInput.getAttribute('placeholder')).toBe('Enter greeting');
            });
        });

        describe('event type', () => {
            test('it has an id of "event"', () => {
                expect(eventType.id).toBe('event');
            });
    
            test('it has a placeholder of "Select event type"', () => {
                expect(eventType.getAttribute('placeholder')).toBe('Select event type');
            });
        });

        describe('message input', () => {
            test('it has an id of "message"', () => {
                expect(messageInput.id).toBe('message');
            });
    
            test('it has a placeholder of "Enter message"', () => {
                expect(messageInput.getAttribute('placeholder')).toBe('Enter message');
            });
        });

        describe('submit input', () => {
            test('it says "submit greeting"', () => {
                expect(submitInput.value).toBe('submit greeting');
            });
        });
    })
})