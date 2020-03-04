let save = document.getElementById("btnSave");
let load = document.getElementById("btnLoad");
let dataKey = "Teste";

save.onclick = function(element) {
  let data = [];
  chrome.tabs.query({}, function(tabs) {
    tabs.forEach(function(tab) {
      data.push({ url: tab.url, title: tab.title });
    });
    local.set(dataKey, data);
  });
};

load.onclick = function(element) {
  let data = local.get(dataKey);
  chrome.windows.create(null, function(window) {
    window.tabs.push
  });
}

function getIt() {
  console.log(local.get(dataKey));
}
