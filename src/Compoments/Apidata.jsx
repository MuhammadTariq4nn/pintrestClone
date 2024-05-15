

 let fetchedData=null;

async function fetchData() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const json = await response.json();
    fetchedData=json.products;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export {fetchData,fetchedData}
// console.log(fetchedData)