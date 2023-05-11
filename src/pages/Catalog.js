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
      <tr key={subIndex}>
        <td>{copy.itemId}</td>
        <td>{copy.itemStatus.toString()}</td>
        <td>{copy.itemGrade}</td>
        <td>{copy.itemMedia}</td>
        <td>{subIndex + 1}</td>
      </tr>
    )

    // 2nd Layer - Item Copies - Edit 
    const edits = item.itemCopies.map((copy, subIndex) => {

      const handleFieldChange = (subIndex, fieldName, newValue) => {
        setData(prevData => {
          const newData = [...prevData];
          newData[index].itemCopies[subIndex] = {
            ...newData[index].itemCopies[subIndex],
            [fieldName]: newValue
          };
          return newData;
        });
      }

      return (
        <tr key={subIndex}>
          <td>
            <input type="text" value={copy.itemId} onChange={e => handleFieldChange(subIndex, "itemId", e.target.value)}></input>
          </td>
          <td>
            <input type="button" value={copy.itemStatus ? "True" : "False"} onClick={e => handleFieldChange(subIndex, "itemStatus", !copy.itemStatus)}></input>
          </td>
          <td>
            <input type="text" value={copy.itemGrade} onChange={e => handleFieldChange(subIndex, "itemGrade", e.target.value)}></input>
          </td>
          <td>
            <input type="text" value={copy.itemMedia} onChange={e => handleFieldChange(subIndex, "itemMedia", e.target.value)}></input>
          </td>
          <td>{subIndex + 1}</td>
        </tr>
      );
    })


    return(
      <tr key={index}>
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
    <div className="container">
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