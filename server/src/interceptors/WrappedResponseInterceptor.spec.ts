import { HttpArgumentsHost, ExecutionContext } from '@nestjs/common/interfaces';
import { of } from 'rxjs';
import { WrappedResponseInterceptor } from './WrappedResponseInterceptor';

const interceptor = new WrappedResponseInterceptor();

const httpArgumentsHost: HttpArgumentsHost = {
  getNext: jest.fn(),
  getRequest: jest.fn(),
  getResponse: jest.fn(),
};

const executionContext: ExecutionContext = {
  switchToHttp: jest.fn().mockReturnValue(httpArgumentsHost),
  getClass: jest.fn(),
  getArgs: jest.fn(),
  getArgByIndex: jest.fn(),
  getHandler: jest.fn(),
  getType: jest.fn(),
  switchToRpc: jest.fn(),
  switchToWs: jest.fn(),
};

const callHandler = {
  handle: jest.fn(),
};

describe('WrappedResponseInterceptor', () => {
  it('should be defined', () => {
    expect(interceptor).toBeDefined();
  });

  describe('intercept', () => {
    it('should wrap simple data', (done) => {
      (executionContext.switchToHttp().getResponse as jest.Mock<
        any,
        any
      >).mockReturnValueOnce({
        statusCode: 200,
      });
      callHandler.handle.mockReturnValue(of('next handle'));
      interceptor
        .intercept(executionContext, callHandler)
        .subscribe((value) => {
          expect(value).toEqual({
            statusCode: 200,
            data: 'next handle',
          });
          expect(callHandler.handle).toBeCalledTimes(1);
          done();
        });
    });
  });
});
