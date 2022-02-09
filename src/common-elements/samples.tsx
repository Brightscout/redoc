import styled from '../styled-components';
import { PrismDiv } from './PrismDiv';
import { darken, getLuminance, lighten } from 'polished';

export const SampleControls = styled.div`
  opacity: 0.7;
  transition: opacity 0.3s ease;
  text-align: right;
  &:focus-within {
    opacity: 1;
  }
  > button {
    background-color: ${({ theme }) => theme.rightPanel.panelControlsBackgroundColor};
    border-radius: 5px;
    margin: 5px;
    border: 0;
    color: inherit;
    padding: 2px 10px;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize};
    line-height: ${({ theme }) => theme.typography.lineHeight};
    cursor: pointer;
    outline: 0;

    :hover,
    :focus {
      background: ${({ theme }) =>
        (getLuminance(theme.rightPanel.panelControlsBackgroundColor) > 0.5 ? darken : lighten)(
          0.1,
          theme.rightPanel.panelControlsBackgroundColor,
        )};
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const SampleControlsWrap = styled.div`
  &:hover ${SampleControls} {
    opacity: 1;
  }
`;

export const StyledPre = styled(PrismDiv.withComponent('pre'))`
  font-family: ${props => props.theme.typography.code.fontFamily};
  font-size: ${props => props.theme.typography.code.fontSize};
  overflow-x: auto;
  margin: 0;

  white-space: ${({ theme }) => (theme.typography.code.wrap ? 'pre-wrap' : 'pre')};
`;
