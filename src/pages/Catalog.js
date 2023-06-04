import React, { useEffect, useState } from 'react'
import catalogJson from '../data/catalog.json'

function Catalog() {
  const [catalogData, setCatalogData] = useState(catalogJson)
  const [categorySelect, setCategorySelect] = useState("title")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedItem, setSelectedItem] = useState("")
  const [showSelectedItem, setShowSelectedItem] = useState(Array(catalogData.length).fill(false))

  useEffect(() => {
    // Filter the catalog data when searchTerm or categorySelect changes
    const filteredData = catalogJson.filter((item) =>
      item[categorySelect].toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCatalogData(filteredData);
    // Show Items Array, 0 and 1 for ON/OFF Toggle
    // Every time the list is changed so does the Boolean Array
    setShowSelectedItem(Array(catalogData.length).fill(false))
    // clear selectedItem
    setSelectedItem("")
  }, [searchTerm, categorySelect]);

  const catalogDataItems = catalogData.map((items) =>
      <tr key={items.titleId} className={items.titleId === selectedItem.titleId? "table-warning" : ""}>
        <td><button className="btn btn-primary border" onClick={() => setSelectedItem(items)}>Select</button></td>
        <td>{items.titleId}</td>
        <td>{items.title}</td>
        <td>{items.genre}</td>
        <td>{items.dateReleased}</td>
        <td>
          <button className="btn btn-primary m-1">CheckOut</button>
          <button className={showSelectedItem[catalogData.indexOf(items)] ? "btn btn-secondary" : "btn btn-info"} onClick={() => setShowSelectedItem(prevState => prevState.map((value, index) => index === catalogData.indexOf(items) ? !value : value))}>{showSelectedItem[catalogData.indexOf(items)] ? "Close" : "View"}</button>
          {/** Delete this when done, checking index # */}
          {/* <p>{catalogData.indexOf(items)}</p>
          <p>Boolean: {showSelectedItem[catalogData.indexOf(items)].toString()}</p> */}
          { showSelectedItem[catalogData.indexOf(items)] &&
            <table className="table border table-striped">
              <thead>
                <tr>
                  <th>Item Id</th>
                  <th>Item Status</th>
                  <th>Item Grade</th>
                  <th>Item Media</th>
                  <th>Item Id</th>
                </tr>
              </thead>
              <tbody>
                {items.itemCopies.map((medias) => (
                  <tr>
                    <td>{medias.itemId}</td>
                    <td>{medias.itemStatus.toString()}</td>
                    <td>{medias.itemGrade}</td>
                    <td>{medias.itemMedia}</td>
                    <td>{medias.titleId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          }
        </td>
      </tr>
  )

  return (
    <div className="container">
      <h1>Catalog</h1>
      {/* Use dropdown menus to select categories...
        1.) Genre
        2.) Release Date
        3.) Title
        4.) TitleId
        *** optional - In Stock? Checkbox***
       */}
      <div>
        <label className="form-check-label" htmlFor="">Search: </label>
        <input className="form-control" type="text" name="search-term" id="search-term" onChange={(e) => setSearchTerm(e.target.value)}  />
        <label className="form-check-label" htmlFor="category-select">Search by Category: </label>
        <select className="form-select" name="category-select" id="category-select" onChange={(e) => setCategorySelect(e.target.value)}>
          <option value="title" selected>Title</option>
          <option value="genre">Genre</option>
          <option value="dateReleased">Date Released</option>
          <option value="titleId">Title Id</option>
        </select>
      </div>
      <br/>
      <table className="table border table-striped">
        <thead>
          <tr>
            <th></th>
            <th>Title Id</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Date Released</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {catalogDataItems}
        </tbody>
      </table>
      <div>
       <h1>Debugging Area</h1>
       <p>Number of Items: {catalogData.length}</p>
       <p>Number of Show Itmes: {showSelectedItem.length}</p>
       <p>Search Term: {searchTerm}</p>
       <p>Category Selected: {categorySelect}</p>
       <p>Item Selected: {selectedItem.titleId}</p>
      </div>
    </div>
  )
}

export default Catalog