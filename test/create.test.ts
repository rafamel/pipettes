import { create } from '~/create';
import { pipe } from '~/pipe';

test(`sync succeeds`, () => {
  expect(create()).toBe(pipe);
});

test(`async succeeds`, () => {
  expect(create.async()).toBe(pipe.async);
});
