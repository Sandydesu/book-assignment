import { PhonePipe } from './phone.pipe';

describe('PhonePipe', () => {
  let pipe: PhonePipe;
  beforeEach(() => {
    pipe = new PhonePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('provide 10 digit phone number and check proper format', () => {
    expect(pipe.transform('1234567890')).toBe('(123) 456-7890');
  });
});
