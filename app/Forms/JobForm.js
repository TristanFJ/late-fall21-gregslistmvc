export function getJobForm() {
  return `
  <form onsubmit="app.housesController.createHouse()">
    <div class="mb-3 d-flex justify-content-between"></div>

  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="year" class="form-label">Year</label>
      <input type="number" class="form-control" name="year" id="year" aria-describedby="year"
        placeholder="Year..." min="1950" max="2022" required>
    </div>
    

    <div>
      <label for="price" class="form-label">Salary</label>
      <input type="number" class="form-control" name="price" id="price" aria-describedby="price"
        placeholder="Salary..." min='1' required>
    </div>
  </div>


  <div class="mb-3">
    <div>
      <label for="description" class="form-label">Description</label>
      <textarea type="text" class="form-control" name="description" id="description"
        aria-describedby="description" placeholder="Description..." min="5" max="250" required> </textarea>
    </div>
  </div>

  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="submit" class="btn btn-primary">Create</button>
  </div>
</form>`
}