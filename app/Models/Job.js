import {
  generateId
} from "../Utils/generateId.js";

export class Job {

  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.year = data.year
    this.price = data.price
    this.description = data.description

  }

  get Template() {
    return `
    <div class="col-lg-3 mt-3">
    <div class="bg-light elevation-1 rounded h-100">
      <div class="p-3">
        <p><b>Job Title: ${this.title}</b></p>
        <p>${this.description}</p>
        <div class="d-flex align-items-center">
          <p class="m-0"><b>Starting Salary: $${this.price}</b></p>
          </div>
          <p class="mt-2">Date Posted: ${this.year}</p>
          <div class="text-end">
          <button title="delete job" class='btn btn-danger justify-self-end' onclick="app.jobsController.deleteJob('${this.id}')"><i class='mdi mdi-delete'></i></button>
          </div>
      </div>
    </div>
  </div>

    
    `
  }
}