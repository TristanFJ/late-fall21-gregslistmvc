import {
  ProxyState
} from "../AppState.js";

import {
  getHouseForm
} from "../Forms/HouseForm.js"

import {
  housesService
} from "../Services/HousesService.js";

function _drawHouses() {
  const houses = ProxyState.houses
  let template = ''
  houses.forEach(house => template += house.Template)
  document.getElementById('listings').innerHTML = template
}

export class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
  }

  createHouse() {
    window.event.preventDefault()

    const formElem = window.event.target
    const houseData = {
      year: formElem.year.value,
      price: formElem.price.value,
      description: formElem.description.value,
      imgUrl: formElem.imgUrl.value,
      sqFt: formElem.sqFt.value,
    }

    housesService.createHouse(houseData)
    formElem.reset()
    bootstrap.Modal.getInstance(document.getElementById('form-modal')).toggle()
  }

  deleteHouse(id) {
    housesService.deleteHouse(id)
  }

  showHouses() {
    _drawHouses()
    document.getElementById('form-button').classList.remove('visually-hidden')
    document.getElementById('modal-body-slot').innerHTML = getHouseForm()
  }
}