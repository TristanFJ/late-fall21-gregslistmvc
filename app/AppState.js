import {
  Car
} from "./Models/Car.js"
import {
  House
} from "./Models/House.js"
import {
  EventEmitter
} from "./Utils/EventEmitter.js"
import {
  isValidProp
} from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]} */
  cars = [
    new Car({
      make: 'Tesla',
      model: 'CyberTruck',
      year: 2022,
      price: 1000000,
      color: '#C0C0C0',
      description: 'This thing is sleek, new WINDOWS!!!',
      imgUrl: 'https://media.wired.com/photos/5dd82f459ac14a0008116985/4:3/w_1412,h_1059,c_limit/Transoi_storyone_Screen-Shot-2019-11-22-at-10.38.01-AM.jpg'
    }),
    new Car({
      make: 'Mystery',
      model: 'Machine',
      year: 1987,
      price: 29389,
      color: '#249255',
      description: 'Smell like teenagers and a dog in here',
      imgUrl: 'https://www.nydailynews.com/resizer/9_FBW7nzQALkDYNMcdQL8XHAaG8=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/4LB77NIIQWOB7WZU5VLNX6J5XA.JPG'
    }),
    new Car({
      make: 'Ford',
      model: 'Pinto',
      year: 1980,
      price: 1488,
      color: '#900d09',
      description: 'This car is HOT!!!',
      imgUrl: 'https://i.ytimg.com/vi/1mqu-gRqt3g/hqdefault.jpg'
    }),
    new Car({
      make: 'Zoomy',
      model: 'Fast',
      year: 2019,
      price: 2000,
      color: '#000',
      description: 'likes scritches',
      imgUrl: 'https://thiscatdoesnotexist.com'
    })
  ]

  houses = [
    new House({
      year: 2015,
      price: 300000,
      description: "the worst house, in the best location",
      imgUrl: 'https://cdn.cnn.com/cnnnext/dam/assets/210206204954-01-first-3d-printed-house-united-states-for-sale-trnd-large-169.jpg',
      sqFt: 1500,
    }),
    new House({
      year: 2021,
      price: 20000,
      description: "sleek, modern, low impact",
      imgUrl: 'https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2019/4/19/0/CI_Airbnb_North-Carolina-Container.jpg.rend.hgtvcom.966.644.suffix/1555762549263.jpeg',
      sqFt: 500,
    }),

    new House({
      year: 667,
      price: 125999,
      description: "a hole in the ground",
      imgUrl: 'https://i.insider.com/5de972d479d7573e943a3c23?width=1136&format=jpeg',
      sqFt: 700,
    })

  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})