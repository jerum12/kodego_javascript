async function getData() {
  try {
    const apiCall = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await apiCall.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();

async function getJsonInfoData() {
  const apiCall = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await apiCall.json();
}
