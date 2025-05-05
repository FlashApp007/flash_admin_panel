import { render } from '@testing-library/react';

import MainPanel from './main_panel';

describe('MainPanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainPanel />);
    expect(baseElement).toBeTruthy();
  });
});
