export function addToCart(obj) {
  // initial cart object model/prototype
  let cartModal = { items: [], qty: 0, total: 0 };
  // check if cart object is present in localstorage
  if (!!localStorage.getItem("cart")) {
    // run this block of code if cart object is prsent in localstorage
    // convert cart data from strong to object
    let cart = JSON.parse(localStorage.getItem("cart"));
    // use this variable for creating the new item in cart
    let itemPresent = false;
    cart.items.map(item => {
      if (item.id === obj.id) {
        // run this block of code is user selected item is present in cart
        // update the located item in cart
        item.qty++;
        item.amount = item.amount + item.price;
        cart.total = cart.total + item.price;
        cart.qty++;
        // save the updated cart in localstorage
        localStorage.setItem("cart", JSON.stringify(cart));
        // store the true value into the itemPresent variable and return the map funtion
        return (itemPresent = true);
      }
    });
    if (!itemPresent) {
      // run this code if user selected item is not exist in localstorage
      // create new item obj
      obj.qty = 1;
      obj.amount = obj.price;
      // update cart object
      cart.items.push(obj);
      cart.total = cart.total + obj.price;
      cart.qty++;
      // save the updated cart in localstorage
      return localStorage.setItem("cart", JSON.stringify(cart));
    }
  } else {
    // run this block of code if cart object is not present in localstorage
    // create item object
    obj.qty = 1;
    obj.amount = obj.price;
    // push created item object into cartModel.items array
    cartModal.items.push(obj);
    // update the cartModal qty and total amount
    cartModal.qty++;
    cartModal.total = obj.price;
    // store the cartModal object as a cart into localStorage
    return localStorage.setItem("cart", JSON.stringify(cartModal));
  }
}

export function removeItem(id) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  // console.log(cart, "afd")  
  // use this varibale for creating the new item in cart
    cart.items.map((item, i) => {
      console.log(item.id, id)
      if (item.id === id) {
        cart.items.splice(i,1);
        cart.qty = cart.qty - item.qty;
        // save the updated cart in localstorage
        localStorage.setItem("cart", JSON.stringify(cart));
        // store the true value into the itemPresent variable and return the map funtion
      }
    });
}