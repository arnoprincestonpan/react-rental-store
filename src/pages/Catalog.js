import React, {useState} from 'react'
import catalogData from "../data/catalog.json"

function Catalog() {
  const [data, setData] = useState(catalogData)

  // Viewing
  const [showView, setShowView] = useState(false)
  const [showEdit, setShowEdit] = useState(false)

  // 1st Layer Titles
  const titles = data.map((item, index) => {

    // 2nd Layer - Item Copies
    const copies = item.itemCopies.map((copy, index) => 
      <tr>
        <td>{copy.itemId}</td>
        <td>{copy.itemStatus.toString()}</td>
        <td>{copy.itemGrade}</td>
        <td>{copy.itemMedia}</td>
        <td>{index + 1}</td>
      </tr>
    )

    return(
      <tr>
        <td>{item.titleId}</td>
        <td>{item.title}</td>
        <td>{item.genre}</td>
        <td>{item.dateReleased}</td>
        <td>
          <button className="btn btn-primary border" onClick={() => setShowView(!showView)}>{showView? "Close" : "View"}</button>
        </td>
        <td>
          {showView &&
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