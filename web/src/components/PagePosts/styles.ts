import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8.5rem;
  
`

export const PostBoxes = styled.div`
  max-width: 400px; 
  border-bottom: 4px solid ${props => props.theme.colors.primary};
  margin-bottom: 10rem;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 3rem;
  font-size: 2rem;
  border-radius: 1.5rem;
  height: 30rem;
  background: ${props => props.theme.colors.primaryDark};
  text-align: justify;
`

export const Text = styled.div`
  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.primary}
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.secondary};

  }
  overflow-y: auto;
  
  padding-right: 1.5rem;
`

export const DeleteButton = styled.span`
  display: flex;

  opacity:0;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 20;
  border-radius: 3rem;
  box-shadow: 0px 1px 15px #0d0d0d;
  background: ${props => props.theme.colors.primaryDarker};
  width: 5rem;
  height: 5rem;
  padding: 2rem;
  translate: scale(0.1);
  transition: all 0.1s linear;
  img {
    width: 3rem;
  }
  &:hover {
    transform: scale(1.2)
  }
  ${PostBoxes}:hover & {
    opacity: 1;
    display: flex
    
  }
`