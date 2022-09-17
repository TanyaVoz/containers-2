import ErrorRepository from '../app';

const errorRepository = new ErrorRepository();

errorRepository.errors.set('404', 'Not Found');
errorRepository.errors.set('406', 'Not Acceptable');
errorRepository.errors.set('414', 'Request-URL Too Long');
errorRepository.errors.set('502', 'Bad Gateway');
errorRepository.errors.set('504', 'Gateway Timeout');

test('has code', () => {
  expect(errorRepository.translate('406')).toBe('Not Acceptable');
});

test('has code', () => {
  expect(errorRepository.translate('404')).toBe('Not Found');
});

test('has code', () => {
  expect(errorRepository.translate('504')).toBe('Gateway Timeout');
});

test('no code', () => {
  expect(errorRepository.translate('425')).toBe('Unknown error');
});

test('no code', () => {
  expect(errorRepository.translate('500')).toBe('Unknown error');
});

test('no code', () => {
  expect(errorRepository.translate('511')).toBe('Unknown error');
});
