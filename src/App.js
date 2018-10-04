import React from 'react'

const items = [
  {
    id: 1,
    title: 'the star',
    content: 'is twunkling in the sky'
  },
  {
    id: 2,
    title: 'the bear',
    content: 'is shitting in the woods'
  },
  {
    id: 3,
    title: 'the moon',
    content: 'is a balloon'
  }
]
const add = e => {
  e.preventDefault()
  console.log('clickwd')
}

const ListItems = ({ ListObject }) =>
  ListObject.map(item => (
    <table key={item.id}>
      <tbody>
        <tr>
          <td>{item.title}</td>
          <td>{item.content}</td>
        </tr>
      </tbody>
    </table>
  ))

export default () => (
  <div>
    <h1>List of something</h1>
    <ListItems ListObject={items} />
    <input name='addItem' />
    <button onClick={add}>Add</button>
  </div>
)
