    /*==================================================
                  Phone api loading
  ==================================================*/
  const phoneApiLoad = async () => {
    const url = `https://openapi.programming-hero.com/api/phones?search=apple`;
    const res = await fetch(url);
    const phoneData = await res.json();
    displayPhone(phoneData.data)
 }
 
 phoneApiLoad();
 /*==================================================
                   print display elements
   ==================================================*/
 const displayPhone = phone => {
    const phonesContainer = document.getElementById("phones-container");
    // display only 20 phones print
    phone = phone.slice(0, 30);
 
    phone.map(phones => {
       // create a new HTML element and display it
       const parentDiv = document.createElement("div");
       parentDiv.innerHTML = `
       <div class="card py-5 bg-base-100 shadow-xl">
       <figure>
          <img src="${phones.image}" alt="Shoes" />
       </figure>
       <div class="card-body">
          <h2 class="card-title">${phones.phone_name}</h2>
          <div class="card-actions justify-end">
             <button class="btn btn-primary w-full mt-1">Buy Now</button>
          </div>
       </div>
    </div>
    `
       phonesContainer.appendChild(parentDiv)
    })
 }