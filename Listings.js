export default function Listings(){
    const listing={};

    console.log("Listings initialized");

    const form=document.getElementById("create-listings-form");
    const listingsContainer=document.querySelector ("#listings-container");

    console.log("form loaded--->",form);

    const appendListing=({title, price, description,host="John"})=>{

        console.log("appendListing called with data:",{title, price, description,host});
        // Logic to append listing to the UI can be added here

        const listingDiv=document.createElement("div");
        listingDiv.className="listing col-6";
        listingDiv.innerHTML=`                    
        
                <article class="card">
                  <img
                    src="https://a0.muscache.com/pictures/b7c2a199-4c17-4ba6-b81d-751719d2dac6.jpg"
                    alt="Thumbnail for Serviced apartment in San Francisco · ★4.87 · 1 bedroom · 2 beds · 1 bath"
                    class="card-img-top"
                  />

                  <div class="card-body">
                    <h3>
                      ${title}
                    </h3>
                    <div class="host">${host}</div>
                    <div class="price">${price}</div>
                    <div class="rating">★4.87</div>
                    <div
                      class="description overflow-scroll"
                      style="max-height: 180px"
                    >
                      ${description}
                    </div>
                    <div class="actions">
                      <button class="btn btn-primary">Rent</button>
                    </div>
                  </div>
                  <!--/.card-body-->
                </article>
        `;

        listingsContainer.appendChild(listingDiv);



            //          <div class="listing col-6">
            //     <article class="card">
            //       <img
            //         src="https://a0.muscache.com/pictures/b7c2a199-4c17-4ba6-b81d-751719d2dac6.jpg"
            //         alt="Thumbnail for Serviced apartment in San Francisco · ★4.87 · 1 bedroom · 2 beds · 1 bath"
            //         class="card-img-top"
            //       />

            //       <div class="card-body">
            //         <h3>
            //           Serviced apartment in San Francisco · ★4.87 · 1 bedroom ·
            //           2 beds · 1 bath,
            //         </h3>
            //         <div class="host">Holly</div>
            //         <div class="price">$187.00</div>
            //         <div class="rating">★4.87</div>
            //         <div
            //           class="description overflow-scroll"
            //           style="max-height: 180px"
            //         >
            //           Our bright garden unit overlooks a lovely backyard area
            //           with fruit trees and native plants. It is an oasis in a
            //           big city. The apartment comfortably fits a couple or small
            //           family. It is located on a cul de sac street that ends at
            //           lovely Duboce Park.<br /><br /><b>The space</b><br />Newly
            //           remodeled, modern, and bright garden unit in historic
            //           Victorian home. <br /><br />New fixtures and finishes.<br />Zero
            //           VOC and non-toxic paint.<br />Organic and fair-trade teas,
            //           fresh local ground coffee.<br />Local art on walls.<br />Sofa
            //           bed and Queen bed are in the same room. More of a petite
            //           apartment with a separate room for dining and kitchen.<br /><br /><b
            //             >Guest access</b
            //           ><br />Full access to patio and backyard (Shared)<br />Beautiful
            //           garden with fruit trees & native plants <br />Washer &
            //           dryer (Shared)<br />Children's toys<br />Charcoal grill<br /><br /><b
            //             >Other things to note</b
            //           ><br />Due to the fact that we have children and a dog, we
            //           are up early 7-8am and their footsteps or paws can be
            //           heard",
            //         </div>
            //         <div class="actions">
            //           <button class="btn btn-primary">Rent</button>
            //         </div>
            //       </div>
            //       <!--/.card-body-->
            //     </article>
            //   </div>
            //   <!--./listings-->
    }

    const onCreate=(event)=>{
        console.log("onCreate called");
        event.preventDefault();
        console.log("event--->",event);

        const formData=new FormData(form);  
        const listing=Object.fromEntries(formData.entries());

        appendListing(listing);
        console.log("form submitted");
    }

    form.addEventListener("submit",onCreate)
    return listing
}