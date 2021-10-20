import {
  ProxyState
} from "../AppState.js";

import {
  House
} from "../Models/House.js";

class HousesService {

  deleteHouse(id) {
    // Filters the array of house removing the one with the id that was passed
    ProxyState.houses = ProxyState.houses.filter(car => car.id != id)
  }


  createHouse(houseData) {
    const house = new House(houseData)
    ProxyState.house = [...ProxyState.houses, house]
  }

}

export const housesService = new HousesService()