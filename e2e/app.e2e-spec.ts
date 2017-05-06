import { AssignmentsProject1Page } from './app.po';

describe('assignments-project1 App', () => {
  let page: AssignmentsProject1Page;

  beforeEach(() => {
    page = new AssignmentsProject1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
