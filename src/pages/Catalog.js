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
import {Link, useMatch} from "react-router-dom"

function Catalog() {
  const catalogItems = catalogData.map((catalog) => {
    // Count the number of occurrences of each media type
    const mediaCounts = catalog.itemCopies.reduce((counts, itemCopy) => {
      const media = itemCopy.itemMedia;
      counts[media] = (counts[media] || 0) + 1;
      return counts;
    }, {});

    // Convert the mediaCounts object into an array of key-value pairs
    const mediaCountsArray = Object.entries(mediaCounts);

    return (
      <tr key={catalog.titleId}>
        <td>{catalog.titleId}</td>
        <td>{catalog.title}</td>
        <td>{catalog.itemCopies.length}</td>
        <td>{catalog.dateReleased}</td>
        <td>{catalog.genre}</td>
        <td>
          {mediaCountsArray
            .map(([media, count]) => `${media} (${count})`)
            .join(", ")}
        </td>
        <td>
          <Link to={`/catalog/${catalog.titleId}`}>View</Link>
          {' | '}
          <Link to={`/catalog/${catalog.titleId}/edit`}>Edit</Link>
        </td>
      </tr>
    );
  });
  return (
    <div className="catalog">
      <h1>Catalog</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Number of Copies</th>
            <th>Date Released</th>
            <th>Genre</th>
            <th>Types of Media</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{catalogItems}</tbody>
      </table>
    </div>
  );
}

export default Catalog;
