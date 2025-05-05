import { render } from '@testing-library/react';

import SupportPanel from './support_panel';

describe('SupportPanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SupportPanel />);
    expect(baseElement).toBeTruthy();
  });
});
