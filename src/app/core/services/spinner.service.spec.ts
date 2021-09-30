import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;

  it('should be created', () => {
    service = new SpinnerService();
    expect(service).toBeTruthy();
  });
});
