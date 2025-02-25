//Яндекс.Директ:/ru
//Бегущая строка в троллейбусах Екатеринбурга:/ru/svrd/ekb
//Быстрый курьер:/ru/svrd/ekb
//Ревдинский рабочий:/ru/svrd/revda,/ru/svrd/pervik
//Газета уральских москвичей:/ru/msk,/ru/permobl,/ru/chelobl
//Беларусская правда:/be/msk

//сама рекламная площадка
//рекламная площадка действительна только в определенных городах
class Platform {
  constructor(name, workCities) {
    this.name = name; // Яндекс.Директ -  Бегущая строка в троллейбусах Екатеринбурга - Быстрый курьер
    this.workCities = workCities.split(",").map((c) => c.trim()); //  ru/msk,/ru/permobl,/ru/chelobl
  }

  //метод проверяющий действителен ли город
  isActiveCity(city) {
    return this.workCities.some((c) => city.startsWith(c) || city === c);
  }
  //Если одна содержит другую как префикс, например /ru/svrd/ekb вложена в /ru/svrd, /ru/svrd вложена в /ru, /ru/svrd/ekb вложена в /ru
  //Рекламная площадка действует во всех указанных локациях, а также во всех вложенных.
}

class PromoService {
  constructor() {
    this.platforms = [];
  }

  addPlatform(name, cities) {
    const platform = new Platform(name, cities);
    this.platforms.push(platform);
  }

  //поиск определенного города для определенной платформы
  getWorkPlatforms(city) {
    return this.platforms
      .filter((platform) => platform.isActiveCity(city))
      .map((platform) => platform.name);
  }
}

const promoService1 = new PromoService();

promoService1.addPlatform(
  "Бегущая строка в троллейбусах Екатеринбурга",
  "/ru/svrd/ekb"
);
promoService1.addPlatform(
  "Газета уральских москвичей",
  "/ru/msk,/ru/permobl,/ru/chelobl"
);

console.log(promoService1.getWorkPlatforms("/ru/svrd/ekb"));
console.log(promoService1.getWorkPlatforms("/ru"));

//fs.readFileSync('basic.txt', 'utf8');
