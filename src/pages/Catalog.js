import React, {useState} from 'react'
import catalogData from "../data/catalog.json"

function Catalog() {
  const [data, setData] = useState(catalogData)

  // Viewing
  const [showView, setShowView] = useState(false)
  const [showEdit, setShowEdit] = useState(false)

  // 1st Layer Titles
  const titles = data.map((item, index) => {

    // 2nd Layer - Item Copies - View Only
    const copies = item.itemCopies.map((copy, subIndex) => 
      <tr>
        <td>{copy.itemId}</td>
        <td>{copy.itemStatus.toString()}</td>
        <td>{copy.itemGrade}</td>
        <td>{copy.itemMedia}</td>
        <td>{subIndex + 1}</td>
      </tr>
    )

    // 2nd Layer - Item Copies - Edit 
    const edits = item.itemCopies.map((copy, subIndex) => 
      <tr>
        <td>
          <input type="text" value={copy.itemId}></input>
        </td>
        <td>
          <input type="button" value={copy.itemStatus}></input>
        </td>
        <td>
          <input type="text" value={copy.itemGrade}></input>
        </td>
        <td>
          <input type="text" value={copy.itemMedia}></input>
        </td>
        <td>{subIndex + 1}</td>
      </tr>
    )

    return(
      <tr>
        <td>{item.titleId}</td>
        <td>{item.title}</td>
        <td>{item.genre}</td>
        <td>{item.dateReleased}</td>
        <td>
          <button className={showView? "btn btn-light border" : "btn btn-info border"}  onClick={() => (setShowView(!showView), setShowEdit(false))}>{showView? "Close" : "View"}</button>
          <button className={showEdit? "btn btn-danger border" : "btn btn-warning border"} onClick={() => (setShowEdit(!showEdit), setShowView(false))}>{showEdit? "Save" : "Edit"}</button>
        </td>
        <td>
          {
            showView &&
            <table className="table table-striped border">
              <thead>
                <tr>
                  <th>Item Id</th>
                  <th>Item Status</th>
                  <th>Item Grade</th>
                  <th>Item Media</th>
                  <th>Item #</th>
                </tr>
              </thead>
              <tbody>
                {copies}
              </tbody>
            </table>
          }
          {
            showEdit &&
            <table className="table table-striped border">
              <thead>
                <tr>
                  <th>Item Id</th>
                  <th>Item Status</th>
                  <th>Item Grade</th>
                  <th>Item Media</th>
                  <th>Item #</th>
                </tr>
              </thead>
              <tbody>
                {edits}
              </tbody>
            </table>
          }
        </td>
      </tr>
    )
  })

  return (
    <div class="container">
      <h1>Catalog</h1>
      <table className="table border table-striped">
        <thead>
          <tr>
            <th>Title ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Date Released</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {titles}
        </tbody>
      </table>
    </div>
  )
}

export default Catalog