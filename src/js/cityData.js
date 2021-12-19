//Импортируем список городов из json-файла
import cityList from '../../current.city.list.json/current.city.list.json';
//Функция фильтрует список городов и выдает относящиеся к Беларуси
function findBy (List) {
  const result = []; //массив для вывода результатов
  List.forEach(city => { //Для каждого объекта из массива
    if (city.country == "BY") { //если его country = BY
      result.push({ //Отправляем в массив с результатами его id, name, country
        id: city.id,
        name: city.name,
        country: city.country
      });
    }
  });
  return result.sort((a, b) => { //вернем массив с результатом, предварительно его отсортировав по имени
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {return 0}
  });
}
const byCityList = findBy(cityList); //Записываем результат выполнения функции в переменную byCityList
export default byCityList;
console.log(byCityList);
