export function getStoredReadBooks() {
   const previousStoredList = localStorage.getItem("stored-read-books");
   if (previousStoredList) {
      const storedList = JSON.parse(previousStoredList);
      return storedList;
   }

   localStorage.setItem("stored-read-books", JSON.stringify([]));
   return [];
}

export function addToStoredReadBooks(id) {
   const storedList = getStoredReadBooks();
   if(storedList.includes(id)) {
      return;
   }

   storedList.push(id);
   localStorage.setItem("stored-read-books", JSON.stringify(storedList));
}

export function getStoredWishlistBooks() {
   const previousStoredWishlist = localStorage.getItem("stored-wishlist-books");
   if (previousStoredWishlist) {
      const storedWishlist = JSON.parse(previousStoredWishlist);
      return storedWishlist;
   }

   localStorage.setItem("stored-wishlist-books", JSON.stringify([]));
   return [];
}

export function addToStoredWishlistBooks(id) {
   const storedWishlist = getStoredWishlistBooks();
   if(storedWishlist.includes(id)) {
      return;
   }

   storedWishlist.push(id);
   localStorage.setItem("stored-wishlist-books", JSON.stringify(storedWishlist));
}

