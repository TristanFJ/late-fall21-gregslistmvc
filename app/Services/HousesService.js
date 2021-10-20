import {
  ProxyState
} from "../AppState.js";

import {
  House
} from "../Models/House.js";

class HouseService {

  deleteHouse(id) {
    // Filters the array of house removing the one with the id that was passed
    ProxyState.house = ProxyState.house.filter(car => car.id != id)
  }


  createHouse(houseData) {
    const house = new House(houseData)
    ProxyState.house = [...ProxyState.house, house]
  }

}

export const houseService = new HouseService()