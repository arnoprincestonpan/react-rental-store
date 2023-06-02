# Rental Store
Idea: An application for a store that rents out items. 

#### Version
Frontend with JSON data files. 

## Steps
In order of how to complete this product from minimum product to extra features. 

#### Minimum Viable Product
As a staff member, I want to be able to search for avaiability of items, so I can see what is available for rent.

#### Rent Tracking
As a staff member, I want to track who rented items, so I can see what are the statuses of some items.

1.) As a staff member, I can check out items for customers, so I can keep track of items. 
2.) As a staff member, I can check in items for customers, so I can keep track of items.
3.) As a staff member, I can edit item stock, so I can keep track of items.

#### Payment
As a staff member, I want to calculate customer costs, so I can charge for penalties and for rents. 

#### Comments
06-01-2023: Next Steps...

1.) Make Customer Search similar to Catalog Search, specifically have name, e-mail and phone category searches.
2.) Make Customer Select similar to Catalog Select, we can use this information to retrieve the "Checked Out Information".
3.) Thought! Could remove Select from Catalog Search if needed, but select can be later used to edit information.
4.) Enable Checkout from Catalog Search, takes the current row's "Items" and turns one of that statuses as false to show checked out. But also is added 
to the "Checked Out Information" of the Customer. 
Later...Add a whole Return Session, where you have to search Catalog and in here when you return, you update the Catalog Item and the Customer Checked Out Information. This should use the the ItemId. 