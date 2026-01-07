function submitData() {
  const username = document.getElementById("username").value.trim();
  const jobrole = document.getElementById("jobrole").value.trim();
  const resultDiv = document.getElementById("result");

  if (!username || !jobrole) return;

  
  const card = document.createElement("div");
  card.className =
    "flex justify-between items-center bg-blue-50 border border-blue-200 rounded-lg p-4";

  
  const textDiv = document.createElement("div");
  textDiv.innerHTML = `
    <p class="font-semibold text-gray-800">${username}</p>
    <p class="text-sm text-gray-600">${jobrole}</p>
  `;

  
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "✖";
  removeBtn.className =
    "text-red-500  font-bold text-lg";

  removeBtn.addEventListener("click", () => {
    card.remove();
  });
  card.append(textDiv, removeBtn);
  resultDiv.append(card);

  document.getElementById("username").value = "";
  document.getElementById("jobrole").value = "";
}
