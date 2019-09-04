import readTime from './readTime';

describe('Testing readTime function', () => {
  it('should return a read time of less than 1 minute', () => {
    expect(readTime(0)).toEqual('Less than 1 min read');
  });
  it('should return a read time of 1 min', () => {
    expect(readTime(1)).toEqual('1 min read');
  });
  it('should return read time with min in plural form', () => {
    expect(readTime(5)).toEqual('5 mins read');
  });
});
