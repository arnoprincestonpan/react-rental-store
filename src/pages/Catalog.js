import React, { useState } from 'react'
import catalogJson from '../data/catalog.json'

function Catalog() {
  const [catalogData, setCatalogData] = useState(catalogJson)

  const catalogDataItems = catalogData.map((items) =>
    <tbody>
      <tr>
        <td><button className="btn btn-primary border">Select</button></td>
        <td>{items.titleId}</td>
        <td>{items.title}</td>
        <td>{items.genre}</td>
        <td>{items.dateReleased}</td>
        <td>
          <button className="btn btn-primary">CheckOut</button>
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
        <input className="form-control" type="text"  />
        <label className="form-check-label" htmlFor="category-select">Search by Category: </label>
        <select className="form-select" name="category-select" id="category-select">
          <option value="title" selected>Title</option>
          <option value="genre">Genre</option>
          <option value="dateReleased">Date Released</option>
          <option value="titleId">Title Id</option>
        </select>
      </div>
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
    </div>
  )
}

export default Catalog