import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: relative;
  padding: 30px;

  .${({ theme }) => theme.prefix} {
    &-btn {
      text-transform: uppercase;
    }
  }
`
