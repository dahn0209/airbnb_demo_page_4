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

    }

    const onCreate=(event)=>{
        console.log("onCreate called");
        event.preventDefault();
        console.log("event--->",event);

        const formData=new FormData(form);  
        const listing=Object.fromEntries(formData.entries());

        appendListing(listing);
        console.log("form submitted");
        form.reset();
    }

    const fetchListings=async()=>{
        console.log("fetchListings called");

        try{

          const res=await fetch("/api/listings");

          if(!res.ok){
            console.log("Failed to fetch listings");
            return
          }
          const listings=await res.json();
          console.log("Fetched listings:",listings.data);

        }

        catch(error){
          console.error("Error fetching listings:",error);
        }

    }

    form.addEventListener("submit",onCreate)

    fetchListings();

    return listing
}