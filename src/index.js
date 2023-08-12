const contentContainer = document.querySelector("#content");
function renderHomePage() {
  contentContainer.innerHTML = `<div id="home" class="active" data-tab-content>
 
  <div class="hero">
  <h1>
  SAMI MAKIS</h1>
    <h2>Los mejores Sami makis del Perú</h1>
    <p>Delicioso y de alta calidad</p>
    <img id = "IMGmakis" src="https://images.pexels.com/photos/983299/pexels-photo-983299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
  </div>
</div>`;
  setupButtons();
}

function renderMenu() {
  contentContainer.innerHTML = `<div class="hero">
  <h1>SAMI MAKIS</h1>
  <div class="maki1">
    <div><p>MAYIMON</p><img src="https://images.pexels.com/photos/9424914/pexels-photo-9424914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="menuIMG"> </div>
    <div><p>MAYIMOTO</p><img src="https://images.pexels.com/photos/6541663/pexels-photo-6541663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="menuIMG"> </div>
    <div><p>CHIKI</p><img src="https://images.pexels.com/photos/10296410/pexels-photo-10296410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="menuIMG"> </div>
    <div><p>LUNIMON</p><img src="https://images.pexels.com/photos/9424914/pexels-photo-9424914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="menuIMG"> </div>
    <div><p>ASMODEUS</p><img src="https://images.pexels.com/photos/7245470/pexels-photo-7245470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="menuIMG">  </div>
    <div><p>ESTRATOKI</p><img src="https://images.pexels.com/photos/7474368/pexels-photo-7474368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="menuIMG">  </div>
  </div>
</div>
</div>
<style>
.maki1 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
}
.menuIMG {
  width: 250px;
  height: 250px;
}
</style>
</div>`;
  setupButtons();
}

function renderContact() {
  contentContainer.innerHTML = `
    <h1>Contact Us</h1>
    <p>Please fill out the form below:</p>
    <form>
      <!-- form fields go here -->
    </form>
  `;
  setupButtons();
}

function setupButtons() {
  const buttonContainer = document.createElement("div");

  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", renderHomePage);
  buttonContainer.appendChild(homeButton);

  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", renderMenu);
  buttonContainer.appendChild(menuButton);

  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", renderContact);
  buttonContainer.appendChild(contactButton);

  contentContainer.prepend(buttonContainer); // Prepend the button container to the contentContainer
}

// Initial page setup
renderHomePage();
