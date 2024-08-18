const addNewProductForm = document.querySelector("#addProductForm");

async function handleAddNewProduct(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = {};
  for (let keyValue of formData.entries()) {
    data[keyValue[0]] = keyValue[1];
  }

  const res = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const postedData = await res.json();

  form.reset();
  console.log(postedData);
}

addNewProductForm.addEventListener("submit", handleAddNewProduct);

////////////////////////////////////////////////////

const addUpdateProductForm = document.querySelector("#updateProductForm");

async function handleUpdateNewProduct(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = {};
  for (let keyValue of formData.entries()) {
    data[keyValue[0]] = keyValue[1];
  }

  const { id, ...newData } = data;

  console.log(id);
  console.log(newData);

  const res = await fetch(`https://fakestoreapi.com/products/${data.id}`, {
    method: "PUT",
    body: JSON.stringify(newData),
  });
  const updatedData = await res.json();

  console.log(data);
  console.log(updatedData);
}

addUpdateProductForm.addEventListener("submit", handleUpdateNewProduct);

////////////////////////////

const deleteForm = document.querySelector("#deleteProductForm");

async function deleteProduct(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = {};
  for (let keyValue of formData.entries()) {
    data[keyValue[0]] = keyValue[1];
  }

  console.log(data.id);

  const res = await fetch(`https://fakestoreapi.com/products/${data.id}`, {
    method: "DELETE",
  });

  const deletedData = await res.json();

  console.log(deletedData);
}

deleteForm.addEventListener("submit", deleteProduct);
