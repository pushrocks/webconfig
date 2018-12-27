import { expect, tap } from '@pushrocks/tapbundle';
import * as webconfig from '../ts/index';

let testConfig: webconfig.WebConfig;

tap.test('first test', async () => {
  testConfig = new webconfig.WebConfig({
    name: 'Test Name',
    description: 'a description for testing',
    fsCode: '1234',
    gaCode: '123456'
  });
});

tap.start();
