  /* What are the values around a cell?
  What are my neighbors values if I added them all up?
  Cells on the edges and corners have less neighbors that cells in the center.
  Break Down the Logic:
  a) find all our neighbors.
  b) how can we find a way to add up all the values of our neighbors
  1st , we will work in the middle of the grid.
  - find your index
  - make a square around your index  to find the index of each of the neighbors around you
  -total up all neighbors values, don't forget about those cells on the edge!
  */
