import {
  ProxyState
} from "../AppState.js";
import {
  getJobForm
} from "../Forms/JobForm.js";

import {
  jobsService
} from "../Services/JobsService.js"

function _drawJobs() {
  const jobs = ProxyState.jobs
  let template = ''
  jobs.forEach(job => template += job.Template)
  document.getElementById('listings').innerHTML = template
}

export class JobsController {
  constructor() {
    ProxyState.on('jobs', _drawJobs)
  }
  createJob() {
    window.event.preventDefault()

    const formElem = window.event.target
    const jobData = {
      title: formElem.title.value,
      year: formElem.year.value,
      price: formElem.price.value,
      description: formElem.description.value,
    }

    jobsService.createJob(jobData)
    formElem.reset()
    bootstrap.Modal.getInstance(document.getElementById('form-modal')).toggle()
  }

  deleteJob(id) {
    jobsService.deleteJob(id)
  }
  showJobs() {
    _drawJobs()
    document.getElementById('form-button').classList.remove('visually-hidden')
    document.getElementById('modal-body-slot').innerHTML = getJobForm()
  }
}