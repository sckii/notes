import styled from 'styled-components'

export const HeaderContainer = styled.div`
  padding: 0 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10rem;
  background-color: ${props => props.theme.colors.primaryDarker};
  border-bottom: 2px solid ${props => props.theme.colors.secondary};
  h1 {
    letter-spacing: 0.5rem;
    font-size: 3.5rem
  }
`

export const Button = styled.a`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  img{
    margin-right: 0.4rem;
    width: 2rem
  }
  border-radius: 1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  background: ${props => props.theme.colors.primaryDark};
  transition: transform 0.1s cubic-bezier(1, 1.45, 1, 1.43); 
  &:hover {
    transform: scale(1.1)
  }
`
export const Buttons = styled.div`
  width: 16rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const AddNote = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 8rem;
  right: 5rem;
  z-index: 100;
  padding: 3rem;
  color: white;
  background: ${props => props.theme.colors.secondary};
  border-radius: 1.4rem;
  box-shadow: 0px 0px 10px black;
  
  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors.secondary};
    border-radius: 50%;
    margin-top: 1.7rem;
    border-radius: 0.5rem;
    color: white;
    border: 0;
    height: 6rem;
    width: fit-content;
    outline: 0;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.2)
    }
    img {
      width: 4rem;
    }
  
  }
  textarea {
    outline: 0;
    border: 0;
    border-left: 3px solid  ${props => props.theme.colors.primaryDark};
    background: ${props => props.theme.colors.secondary};
    text-align: justify;
    padding: 2rem;
    font-size: 3.4rem;
    resize: none;
    color: white;
    width: 37rem;
    height: 30rem;
    max-width: 40rem;
    max-height: 40rem;
  }
`