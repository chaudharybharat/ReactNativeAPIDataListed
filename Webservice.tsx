class Webservie {
  static callGetWevservice = async (endPoint: string) => {
    const start = new Date();
    let response = await fetch(
      'http://jsonplaceholder.typicode.com/' + endPoint,
    );
    if (response != null) {
      let json = await response.json();
      const timeTaken = new Date() - start;
      console.log(timeTaken);
      return json;
    }

    return null;
  };
  static callGetWevserviceProduct = async () => {
    const start = new Date();

    return fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(responseJson => {
        const timeTaken = new Date() - start;
        console.log('api took time' + timeTaken);
        return responseJson;
      })
      .catch(error => {
        return error;
      });

    /*  let response = await fetch('https://dummyjson.com/products');
    if (response != null) {
      let json = await response.json();
      console.log(json);
      return json;
    } */
  };

  static calPutWebservice = async () => {
    return fetch('https://dummyjson.com/products/1', {
      method: 'PUT' /* or PATCH */,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: 'iPhone Galaxy +3',
        price: 8600,
/*   "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones", */
      }),
    })
      .then(res => res.json())
      .then(console.log);
  };
}

export default Webservie;
