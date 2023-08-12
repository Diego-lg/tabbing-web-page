const renderMenu = () => {
  // Container
  const contentContainer = document.querySelector("#content");

  const menu = document.createElement("div");
  menu.classList.add("tab-content");
  menu.innerHTML = `<div id="home" class="active" data-tab-content>
     
    <div class="hero">
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

  contentContainer.appendChild(menu);
};

export { renderMenu };
