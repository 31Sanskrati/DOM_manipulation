let jsonObj = {
    name: "Anni",
    name2: "Sanskrati",
    food: "Paneer Kulche",
  };
  console.log(jsonObj);

  let myJson = JSON.stringify(jsonObj);
  console.log(myJson);

  myJson = myJson.replace("Anni", "Anna");
  console.log(myJson);

  newJsonStr = JSON.parse(myJson);
  console.log(newJsonStr);