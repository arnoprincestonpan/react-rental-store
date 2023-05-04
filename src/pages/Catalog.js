/**
 * Catalog Page
 * MVP: Displays rentals are available
 * Add-Ons:
 * - By Media Type
 * - By Genre Type
 * - By Year (or date)
 * -
 */

import React from "react";
import catalogData from "../data/catalog.json";

function Catalog() {
  const catalogItems = catalogData.map((item) => {
    let itemMediaTypes = []
    item.itemCopies.map(itemCopy => {
      if(itemCopy.itemStatus){
        itemMediaTypes.push(itemCopy.itemMedia)
      }
    })
    itemMediaTypes = [...new Set(itemMediaTypes)]
    itemMediaTypes = itemMediaTypes.join(", ")
    return (
      <tr id={item.titleId}>
        <td>{item.titleId}</td>
        <td>{item.title}</td>
        <td>{item.itemCopies.length}</td>
        <td>{itemMediaTypes}</td>
        <td>{item.genre}</td>
        <td>
          
        </td>
      </tr>
    );
  });
  return (
    <div className="container">
      <h1>Catalog</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th># Copies</th>
            <th>Types of Media</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>{catalogItems}</tbody>
      </table>
    </div>
  );
}

export default Catalog;
