import React, { useState } from 'react'
import catalogJson from '../data/catalog.json'

function Catalog() {
  const [catalogData, setCatalogData] = useState(catalogJson)
  const [categorySelect, setCategorySelect] = useState("title")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedItem, setSelectedItem] = useState("")

  /**
   * Handle Search Function
   * 1.) Set the Search Term
   * 2.) Search the Search Term (default: "title") by the Category Select
   */
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const catalogDataItems = catalogData.map((items) =>
    <tbody>
      <tr>
        <td><button className="btn btn-primary border" onClick={() => setSelectedItem(items)}>Select</button></td>
        <td>{items.titleId}</td>
        <td>{items.title}</td>
        <td>{items.genre}</td>
        <td>{items.dateReleased}</td>
        <td>
          <button className="btn btn-primary m-1">CheckOut</button>
          <button className="btn btn-info">Details</button>
        </td>
      </tr>
    </tbody>
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
        <input className="form-control" type="text" name="search-term" id="search-term" onChange={(e) => handleSearch(e)}  />
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
        {catalogDataItems}
      </table>
      <div>
       <h1>Debugging Area</h1>
       <p>Search Term: {searchTerm}</p>
       <p>Category Selected: {categorySelect}</p>
       <p>Item Selected: {selectedItem.titleId}</p>
      </div>
    </div>
  )
}

export default Catalog