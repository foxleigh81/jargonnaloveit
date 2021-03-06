import styled from 'styled-components'

export default styled.li`
  width: 29vw;
  height: 25vh;
  float: left;
  padding: 1rem;
  margin: 1vh 1vw;
  position: relative;

  h1 {
    font-size: 1.6rem;
    text-transform: uppercase;
  }

  .description {
    padding: 1rem 0;
    line-height: 1.4;
  }

  &.card-type {
    &--acronym {
      background-color: ${props => props.theme.colours.acronym};
    }
    &--term {
      background-color: ${props => props.theme.colours.term};
    }
  }

  .card-tag {
    display:block;
    text-align: right;
    padding: .5rem;
    text-transform: uppercase;
    background-color: rgba(0,0,0,0.15);
    color: #fff;
    margin: -1rem;
    margin-bottom: .7rem;
  }

  .long-term {
    &:before {
      content: "(";
    }
    &:after {
      content: ")";
    }
  }
`
