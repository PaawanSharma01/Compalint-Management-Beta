function nextPage() {
  const name = document.getElementById('name').value;
  const mobile = document.getElementById('mobile').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;


  if (name && mobile && email && address) {

    document.body.innerHTML = `
      <div class="container">
        <h2>What complaint would you like to lodge?</h2>
        <form id="complaintForm">
          <label for="complaintType">Complaint Type:</label>
          <select id="complaintType">
            <option value="" disabled selected>select complain type</option>
            <option value="service">Service Issue</option>
            <option value="product">Product Quality</option>
            <option value="technical">Technical Issue</option>
            <option value="other">Other</option>
          </select>

          <label for="description">Description:</label>
          <textarea id="description" rows="4" required></textarea>

          <button type="button" onclick="submitComplaint()">Submit</button>
        </form>
      </div>
    `;
  } else {
    alert('Please fill in all the fields.');
  }
}

function submitComplaint() {



  document.body.innerHTML = `
    <div class="container">
      <h1>Thank You!</h1>
      <p>We will try our best to resolve your problem.</p>
      <button onclick="goHome()">Go Home</button>
    </div>
  `;
}

function goHome() {

  location.reload();
}
