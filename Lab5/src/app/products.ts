export interface Product {
  id: number;
  name: string;
  price: number;
  display: string;
  process: string;
  video: string;
  razmer: string;
  disk: string;
  img: string;
  url: string;
  likes: number;
  category: string;
  deleted: string;
}

export const products = [
  {
    id: 1,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 480550,
    display: '13.3 дюйм',
    process: 'Apple M1',
    video: 'Apple M1 7 core',
    razmer: '8 ГБ',
    disk: 'SSD',
    likes: 0,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/',
    category: 'Apple',
    deleted: 'False'
  },
  {
    id: 2,
    name: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
    price: 389897,
    display: '15.6 дюйм',
    process: 'Intel Core i5 11400H',
    video: 'NVIDIA GeForce GTX 1650',
    razmer: '16 ГБ',
    disk: 'SSD',
    likes: 0,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
    url: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/',
    category: 'Game',
    deleted: 'False'
  },
  {
    id: 3,
    name: 'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
    price: 164990,
    display: '15.6 дюйм',
    process: 'Intel Pentium Gold 7505',
    video: 'Intel UHD Graphics',
    razmer: '8 ГБ',
    disk: 'SSD',
    likes: 0,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h3a/66993674190878/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg',
    url: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/',
    category: 'Smart',
    deleted: 'False'
  },
  {
    id: 4,
    name: 'Ноутбук ASUS X515EA-BQ3144W I385SUW1 темно-серый',
    price: 239924 ,
    display: '15.6 дюйм',
    process: 'Intel Core i3 1115G4',
    video: 'Intel UHD Graphics',
    razmer: '8 ГБ',
    disk: 'SSD',
    likes: 0,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hbd/65953424277534/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-1.jpg',
    url: 'https://kaspi.kz/shop/p/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928/',
    category: 'Smart',
    deleted: 'False'
  },
  {
    id: 5,
    name: 'Ноутбук Apple MacBook Air 13 MGND3 золотистый',
    price: 498000,
    display: '13.3 дюйм',
    process: 'Apple M1',
    video: 'Apple M1 8 core',
    razmer: '8 ГБ',
    disk: 'SSD',
    likes: 0,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfd/h54/33286638272542/apple-macbook-air-2020-13-3-mgnd3-zolotistyj-100797576-1-Container.jpg',
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgnd3-zolotistyi-100797576/',
    category: 'Apple',
    deleted: 'False'
  },
  {
    id: 6,
    name: 'Ноутбук ASUS TUF Gaming A15 FA506IHRB-HN084 черный',
    price: 369990,
    display: '15.6 дюйм',
    process: 'AMD Ryzen 5 4600H',
    video: 'nVidia GeForce GTX1650',
    razmer: '8 ГБ',
    disk: 'SSD',
    likes: 0,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg',
    url: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/',
    category: 'Game',
    deleted: 'False'
  },
  {
    id: 7,
    name: 'Ноутбук Apple MacBook Air 13 MGN93 серебристый',
    price: 499780,
    display: '13.3 дюйм',
    process: 'Apple M1',
    video: 'Apple M1',
    razmer: '8 ГБ',
    disk: 'SSD',
    likes: 0,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd6/h5b/33271772446750/apple-macbook-air-2020-13-3-mgn93-serebristyj-100798912-1-Container.jpg',
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/',
    category: 'Apple',
    deleted: 'False',
    cart: 'False'
  },
  {
    id: 8,
    name: 'Ноутбук Acer Nitro 5 AN515-45 NH.QB9ER.004 черный',
    price: 379980 ,
    display: '15.6 дюйм',
    process: 'AMD Ryzen 5 5600H',
    video: 'NVIDIA GeForce GTX 1650',
    razmer: '8 ГБ',
    disk: 'SSD',
    likes: 0,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/h65/66626494398494/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784-1.jpg',
    url: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784/',
    category: 'Game',
    deleted: 'False',
    cart: 'False'
  },
  {
    id: 9,
    name: 'Ноутбук Apple MacBook Air 13 MLY33 черный',
    price: 628327,
    display: '13.6 дюйм',
    process: '',
    video: 'Apple M2 8-Core',
    razmer: '8 ГБ',
    disk: 'SSD',
    likes: 0,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc0/h3d/52679174357022/apple-macbook-air-13-mly33-chernyi-105933768-1.jpg',
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mly33-chernyi-105933768/',
    category: 'Apple',
    deleted: 'False'
  },
  {
    
    id: 10,
    name: 'Ноутбук Acer Extensa 15 EX215-52 NX.EG8ER.00B черный',
    price: 299990,
    display: '15.6 дюйм',
    process: 'Intel Core i5 1035G1',
    video: 'Intel UHD Graphics g1',
    razmer: '8 ГБ',
    disk: 'SSD',
    likes: 0,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h05/h56/52615655948318/acer-extensa-15-ex215-52-nx-eg8er-00b-serebristyj-105725654-1.jpg',
    url: 'https://kaspi.kz/shop/p/acer-extensa-15-ex215-52-nx-eg8er-00b-chernyi-105725654/',
    category: 'Smart',
    deleted: 'False'
  },
  {
    id: 11,
    name: 'Ноутбук Apple MacBook Air 13 MLXW3 серый',
    price: 635148,
    display: '13.6 дюйм',
    process: 'Apple M2',
    video: 'Apple M2 8-Core',
    razmer: '8 ГБ',
    disk: 'SSD',
    likes: 0,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/he9/52679187890206/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-space-gray-105933794-1.jpg',
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mlxw3-seryi-105933794/',
    category: 'Apple',
    deleted: 'False'
  }
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/