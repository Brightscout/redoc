import { darken } from 'polished';
import { Tabs as ReactTabs } from 'react-tabs';

import styled from '../styled-components';

export { Tab, TabList, TabPanel } from 'react-tabs';

export const Tabs = styled(ReactTabs)`
  ${({ theme }) =>
    theme.rightPanel.borderColor &&
    `& {
      border: 1px solid  ${theme.rightPanel.borderColor};
    }
  `}

  ${({ theme }) =>
    theme.rightPanel.showBorderRadius &&
    `& {
        border-radius: 5px;
        overflow: hidden;
      }
    `}

  > ul {
    list-style: none;
    padding: 0;

    ${({ theme }) =>
      theme.rightPanel.borderColor &&
      `& {
        border-bottom: 1px solid ${theme.rightPanel.borderColor};
        background: ${theme.codeBlock.backgroundColor};
        margin: 0;
      }
    `}

    > li {
      padding: 5px 10px;
      display: inline-block;
      ${({ theme }) =>
        theme.rightPanel.borderColor &&
        `& {
          margin: 0;
          background: ${({ theme }) => theme.colors.gray[100]};
        }
      `}

      background-color: ${({ theme }) => theme.codeBlock.backgroundColor};
      cursor: pointer;
      text-align: center;
      outline: none;
      color: ${({ theme }) => darken(theme.colors.tonalOffset, theme.rightPanel.textColor)};
      ${({ theme }) =>
        !theme.rightPanel.borderColor &&
        `& {
            border-bottom: 1px solid rgba(0, 0, 0, 0.5);
            margin: 0 ${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit}px;
            border: 1px solid ${({ theme }) => darken(0.05, theme.codeBlock.backgroundColor)};
            border-radius: 5px;
          }
      `}
      min-width: 60px;
      font-size: 0.9em;
      font-weight: bold;

      &.react-tabs__tab--selected {
        ${({ theme }) =>
          theme.rightPanel.borderColor &&
          `& {
            border-bottom: 4px solid #5eacd8;
            margin-bottom: -1px;
          }
        `}
        color: ${props => props.theme.colors.text.primary};
        background: ${({ theme }) => theme.rightPanel.panelControlsBackgroundColor};
        &:focus {
          outline: auto;
        }
      }

      &:only-child {
        flex: none;
        min-width: 100px;
      }

      &.tab-success {
        color: ${props => props.theme.colors.responses.success.tabTextColor};
      }

      &.tab-redirect {
        color: ${props => props.theme.colors.responses.redirect.tabTextColor};
      }

      &.tab-info {
        color: ${props => props.theme.colors.responses.info.tabTextColor};
      }

      &.tab-error {
        color: ${props => props.theme.colors.responses.error.tabTextColor};
      }
    }
  }
  > .react-tabs__tab-panel {
    background: ${({ theme }) => theme.codeBlock.backgroundColor};
    & > div,
    & > pre {
      padding: ${props => props.theme.spacing.unit * 4}px;
      margin: 0;
    }

    & > div > pre {
      padding: 0;
    }
  }
`;

export const SmallTabs = styled(Tabs)`
  > ul {
    display: block;
    > li {
      padding: 2px 5px;
      min-width: auto;
      margin: 0 15px 0 0;
      font-size: 13px;
      font-weight: normal;
      border-bottom: 1px dashed;
      color: ${({ theme }) => darken(theme.colors.tonalOffset, theme.rightPanel.textColor)};
      border-radius: 0;
      background: none;

      &:last-child {
        margin-right: 0;
      }

      &.react-tabs__tab--selected {
        color: ${({ theme }) => theme.rightPanel.textColor};
        background: none;
      }
    }
  }
  > .react-tabs__tab-panel {
    & > div,
    & > pre {
      padding: ${props => props.theme.spacing.unit * 2}px 0;
    }
  }
`;
