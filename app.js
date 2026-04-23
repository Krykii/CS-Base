function getData() {
  return JSON.parse(localStorage.getItem("reports") || "[]");
}

function saveData(data) {
  localStorage.setItem("reports", JSON.stringify(data));
}

function addReport(link, type, description) {
  const data = getData();

  const newReport = {
    id: Date.now(),
    link,
    type,
    description,
    date: new Date().toLocaleDateString()
  };

  data.push(newReport);
  saveData(data);
}

function getById(id) {
  return getData().find(x => x.id == id);
}

function findByLink(link) {
  return getData().find(x => x.link === link);
}

function deleteReport(id) {
  let data = getData();
  data = data.filter(x => x.id != id);
  saveData(data);
}
