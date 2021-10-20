export function getHouseForm() {

  // this won't work but I wanted some kind of form
  return /*html*/ `
  <form onsubmit="app.housesController.createHouse()">
    <div class="mb-3 d-flex justify-content-between"></div>

  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="year" class="form-label">Year</label>
      <input type="number" class="form-control" name="year" id="year" aria-describedby="year"
        placeholder="Year..." min="1950" max="2022" required>
    </div>
    
    <div>
    <label for="sqFt" class="form-label">Square Feet</label>
    <input type="number" class="form-control" name="sqFt" id="sqFt" aria-describedby="sqFt"
      placeholder="Square Feet" min='1' required>
  </div>


    <div>
      <label for="price" class="form-label">Price</label>
      <input type="number" class="form-control" name="price" id="price" aria-describedby="price"
        placeholder="Price..." min='1' required>
    </div>
  </div>

  <div class="mb-3">
    <div>
      <label for="imgUrl" class="form-label">Image Url</label>
      <input type="url" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="imgUrl"
        placeholder="Image Url..." required>
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