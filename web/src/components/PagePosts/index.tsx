import React, { useEffect, useState } from 'react'
import { PostContainer, PostBoxes, Text, DeleteButton } from './styles'

import DeleteIcon from '../../assets/svg/trash-outline.svg'
import axios from 'axios'

function PagePost() {
  
  const [data, setData] = useState([])
  const [boxId, setBoxId] = useState(0)
  console.log(boxId)

  async function handleClick(id: number) {
    await axios.delete(`http://localhost:3333/textDelete/${id}`)
    setBoxId(id);
  }
  
  useEffect(() => {
    axios.get('http://localhost:3333/texts')
      .then(res => {
        const dataBase = res.data
        return setData(dataBase)
      })
  }, [boxId])

  return (
    <PostContainer>

      { data.map((title: any) => {
        return (
          <PostBoxes key={title.text_id} >
              <DeleteButton  onClick={() => { handleClick(title.text_id)} } ><img src={DeleteIcon} alt=""/></DeleteButton>
            <Text>  
              {title.text}
            </Text>
          </PostBoxes>
        )
      })}

    </PostContainer>
  )
}

export default PagePost