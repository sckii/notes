import React, { useContext, useState } from 'react'

import axios from 'axios'

import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

import addIcon from '../../assets/svg/add-circle-outline.svg'

import { HeaderContainer, Button, Buttons, AddNote } from './styles'


interface Props {
  toggleTheme(): void,
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)
  const [value, setValue] = useState(false)
  const [card, setCard] = useState('')

  function openAddNote() {
    setValue(!value)
  }

  async function handleAddCard() {
    if(card === '') {
      return setValue(!value)
    }
    await axios.post('http://localhost:3333/textAdd', {
      "text": card
    })
      .then(res => {
        console.log(res)
        console.log(res.data)
      }) 

  }
  return (
    <HeaderContainer>
      <h1>Notes</h1>
      <Buttons>
        <>
          <Button onClick={ openAddNote }> 
            <img src={addIcon} alt=""/>Note
          </Button>
          { value === true ? 
            <AddNote> 
              <form onSubmit={handleAddCard} >
                <textarea
                  name='add card'
                  value={card}
                  onChange={(e) => { setCard(e.target.value) }} 
                />
                <button type="submit" > <img src={addIcon} alt=""/> </button>

              </form>
            </AddNote> : <> </>}
        </>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offHandleColor={colors.text}
          offColor={colors.text}
          onColor={colors.text}
        />
      </Buttons>
    </HeaderContainer>
  )
}

export default Header