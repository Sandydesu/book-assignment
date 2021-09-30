import { WebstorageService } from './webstorage.service';

describe('WebstorageService', () => {
  let service: WebstorageService;
  beforeEach(() => {
    service = new WebstorageService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get values from localstorage', () => {
    service.setItem('One', 'A');
    const value = service.getItem('One');
    expect(value).toEqual('A');
  });
});
