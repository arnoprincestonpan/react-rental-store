import React, { useState } from 'react'
import catalogData from "../data/catalog.json"

function Catalog() {
  // for every catalog item, I will create an itemState
  // showInfo - boolean - toggle to show item Copies information
  const [itemStates, setItemStates] = useState(
    catalogData.map((item) => ({ showInfo: false, showEdit: false }))
  );

  // simply flips the showInfo boolean
  const toggleInfo = (index) => {
    setItemStates(
      itemStates.map((item, i) => 
        // if there is a match, update otherwise the same item
        i === index? {...item, showInfo: !item.showInfo} : item
      )
    )
 }

  // simply flips the showEdit boolean
  const toggleEdit = (index) => {
    setItemStates(
      itemStates.map((item, i) => 
      // if there is a match, update otherwise the same item
        i === index? {...item, showEdit: !item.showEdit} : item
      )
    )
 }
  const catalogItem = catalogData.map((item, index) => {

    const itemCopy = item.itemCopies.map((itemCopy) => 
      <tr>
        <td>{itemCopy.itemId}</td>
        <td>{itemCopy.itemStatus.toString()}</td>
        <td>{itemCopy.itemGrade}</td>
        <td>{itemCopy.itemMedia}</td>
      </tr>
    )
    return(
      <tr>
        <td>{item.titleId}</td>
        <td>{item.title}</td>
        <td>{item.genre}</td>
        <td>{item.dateReleased}</td>
        <td>{item.itemCopies.length}</td>
        <td>
          <button type="button" onClick={() => toggleInfo(index)} className="btn border btn-info m-1">{ itemStates[index].showInfo? <>Hide</> : <>Info</> }</button>
          <button type="button" onClick={() => toggleEdit(index)} className="btn border btn-warning m-1 "> { itemStates[index].showEdit? <>Save</> : <>Edit</> } </button>
        </td>
          { itemStates[index].showInfo &&       
            <td>
              <table className="table">
               <thead>
                <tr>
                  <th>Item Id</th>
                  <th>Item Status</th>
                  <th>Item Grade</th>
                  <th>Item Media Type</th>
                </tr>
                </thead>
                <tbody>
                {itemCopy}
                </tbody>
              </table>
            </td>
          }
      </tr>
    )
  })
  return (
    <div className="container">
      <h1>Catalog</h1>
      <table className="table border table-striped">
        <thead>
          <tr>
            <th>Title Id</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Date Released</th>
            <th># of Copies</th>
          </tr>
        </thead>
        <tbody>
          {catalogItem}
        </tbody>
      </table>
    </div>
  )
}

export default Catalog