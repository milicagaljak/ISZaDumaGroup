(function(window, undefined) {
  var dictionary = {
    "4946272e-a61d-4d28-9ff8-2246c1ad2b76": "Fotografija",
    "69b1e3be-67c0-4b80-a619-4f69f23adbc7": "Kraj",
    "dc913d74-eeba-49f7-ae54-700d8d25ab69": "Ketering",
    "c2a4ba6f-e232-46fc-aa67-f6ccf20b235f": "Prijava",
    "5fe170ae-ba5e-4556-b481-50c0e77315cd": "Prenosivi bar",
    "bd490e74-1b05-4a00-9e0c-be015d62f1e1": "Placanje",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "924ebe8e-0181-48fd-813c-43b8884bbff4": "Profil",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);