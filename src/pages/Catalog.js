/**
 * Catalog Page
 * MVP: Displays rentals are available
 * Add-Ons:
 * - By Media Type
 * - By Genre Type
 * - By Year (or date)
 * - 
 */

import React from 'react'
import catalogData from "../data/catalog.json"

function Catalog() {
  const catalogItems = catalogData.map(catalog => 
    (
      <tr key={catalog.titleId}>
        <td>{catalog.titleId}</td>
        <td>{catalog.title}</td>
        <td>{catalog.itemCopies.length}</td>
        <td>{catalog.genre}</td>
        <td>
          { 
            [...new Set(catalog.itemCopies.map(item => item.itemMedia))].join(", ")
          }
        </td>
      </tr>
    )
  )
  return (
    <div className="catalog">
      <h1>Catalog</h1>
      <table>
        <thead>
          <tr>
            <th>Title Id</th>
            <th>Title</th>
            <th>Number of Copies</th>
            <th>Date Released</th>
            <th>Genre</th>
            <th>Types of Media</th>
          </tr>
        </thead>
        <tbody>
          {catalogItems}
        </tbody>
      </table>
    </div>
  )
}

export default Catalog