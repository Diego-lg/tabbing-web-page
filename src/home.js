const renderHomePage = () => {
  //container
  const contentContainer = document.querySelector("#content");

  const home = document.createElement("div");
  home.classList.add("tab-content");
  home.innerHTML = `<div id="home" class="active" data-tab-content>
 
    <div class="hero">
    <h1>
    SAMI MAKIS</h1>
      <h2>Los mejores Sami makis del Perú</h1>
      <p>Delicioso y de alta calidad</p>
      <img id = "IMGmakis" src="https://images.pexels.com/photos/983299/pexels-photo-983299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
    </div>
  </div>`;

  contentContainer.appendChild(home);
};

export { renderHomePage };
