import React, { useEffect, useState } from 'react'
import { PostContainer, PostBoxes, Text, DeleteButton } from './styles'

import DeleteIcon from '../assets/svg/trash-outline.svg'
import axios from 'axios'

function PagePost() {
  const [data, setData] = useState([])
  const [boxId, setBoxId] = useState()
  console.log(boxId)

  function handleClick(id: number) {
    axios.delete(`http://localhost:3004/text/${id}`)
  }
  
  useEffect(() => {
    axios.get('http://localhost:3004/text')
      .then(res => {
        const dataBase = res.data
        return setData(dataBase)
      })
  }, [boxId])

  return (
    <PostContainer>

      { data.map((title: any, id: number) => {
        return (
          <PostBoxes key={title.id} >
              <DeleteButton  onClick={() => {setBoxId(title.id); handleClick(title.id)} } ><img src={DeleteIcon} alt=""/></DeleteButton>
            <Text>  
              {title.title}
            </Text>
          </PostBoxes>
        )
      })}

    </PostContainer>
  )
}

export default PagePost