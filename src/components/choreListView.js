import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import FaCheck from 'react-icons/lib/fa/check'


const ChoreListView = ({ chores, completeChore }) => (
  <ListGroup>
    {chores.map((chore, index) => (
      <ListGroupItem key={index}>
        {chore.text} 
        <FaCheck onClick={() => completeChore(index)} className="CheckIcon" />
      </ListGroupItem>
    ))}
  </ListGroup>
)

export default ChoreListView