import { test as base } from '@playwright/test';
import { BaseTest } from './POM/BaseTest';


export type TestFixtures = {
  app: BaseTest;
  SWEET_TV: string
};

export const test = base.extend<TestFixtures>({
  app: async ({ page }, use) => {
    const app = new BaseTest(page);
    await use(app);
  },
  SWEET_TV:['',{option:true}]
});

export { expect } from '@playwright/test';
