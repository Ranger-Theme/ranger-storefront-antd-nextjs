import styled from 'styled-components'

export const StyledAction = styled.div`
  display: grid;
  margin: 10px 0;
  grid-template-columns: 1fr 40px;
  grid-column-gap: 20px;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
  }
`
