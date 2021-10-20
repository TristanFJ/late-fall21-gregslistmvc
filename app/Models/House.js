import {
  generateId
} from "../Utils/generateId.js";

export class House {

  constructor(data) {
    this.id = generateId()
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
    this.sqFt = data.sqFt

  }

  get Template() {
    return `
  <div class="col-md-3 m-3">
    <div class="bg-light elevation-1 rounded h-100">
      <img width="100%" height="300px" class="car-img rounded-top" src="${this.imgUrl}" alt="car image">
      <div class="p-3">
        <p><b>Made in ${this.year} - ${this.sqFt} Square Feet</b></p>
        <p>${this.description}</p>
        <div class="d-flex align-items-center">
          <p class="m-0"><em>$${this.price}</em></p>
          </div>
          <div class="text-end">
          <button title="delete house" class='btn btn-danger justify-self-end' onclick="app.housesController.deleteHouse('${this.id}')"><i class='mdi mdi-delete'></i></button>
          </div>
      </div>
    </div>
  </div>
  `
  }
}