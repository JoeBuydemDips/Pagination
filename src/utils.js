const paginate = (followers) => {
  const itemsPerPage = 10;
  const pages = Math.ceil(followers.length / itemsPerPage);

  //create new arrays of arrrays (undefined at first)
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage; //grab starting point of each array
    return followers.slice(start, start + itemsPerPage);
  });

  return newFollowers;
};
export default paginate;
