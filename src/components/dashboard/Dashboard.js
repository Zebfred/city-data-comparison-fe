import React, {useState, useEffect} from 'react'
// import data from './assets/data.svg'
// import forsale from './assets/forsale.svg'
// import insync from './assets/insync.svg'
import dataVisual from './assets/dataVisual.svg'
import map from './assets/map.svg'
import money from './assets/money.svg'
import graph from './assets/graph.svg'


function Dashboard(){

     // * SEARCH STATE / HANDLECHANGE
     const [search, setSearch] = useState("")
     const searchChange = (event) => {
          event.preventDefault();
          setSearch(event.target.value)
     }
     
     //* COMPARE STATE / HANDLECHANGE */
     const [compare, setCompare] = useState({
          cityOne:"",
          cityTwo:""
     })
     const compareChange = (event) => {
          event.preventDefault();
          setCompare({
               ...compare,
               [event.target.name]:event.target.value
          })
     }

     //* SUBMIT SEARCH */
     const submitCity = (event) => {
          event.preventDefault();
          console.log(search)
     }
     const submitCities = (event) => {
          event.preventDefault();
          console.log(compare)
     }


     return(
          <div className="dashboard-container">
               {/* SEARCH FUNCTION */}
               <div className="dashboard-search-container">
                    <div className="slanted-san-francisco"></div>
                    {/* <div className="slanted-blue-one"></div> */}
                    <div className="search-function"
                         data-aos="fade-up"
                         data-aos-offset="200"
                         data-aos-delay="50"
                         data-aos-duration="1000"
                         data-aos-easing="ease-in-out"
                         data-aos-mirror="true"
                         data-aos-once="true"
                    >
                         <h1>Choice is YOURS</h1>
                         <p className="cities-description">Choose the information you want to see about city(ies).</p>
                         
                         <form onSubmit={submitCity}>
                              <input 
                                   type="text"
                                   name="city"
                                   value={search}
                                   onChange={searchChange}
                                   placeholder="San Francisco, CA"
                              />
                              <button className="search-city-button">Go</button>
                         </form>
                         <p className="cities-description-two">Want to learn about more cities? Click the button below to compare multiple cities.</p>
                         <button className="compare-cities-button">Compare cities</button>
                    </div>
               </div>




               {/* PRODUCT FEATURES */}
               <div className="dashboard-features-container">
                    <div className="feature-descriptions"
                         data-aos="fade-right"
                         data-aos-offset="200"
                         data-aos-delay="50"
                         data-aos-duration="1000"
                         data-aos-easing="ease-in-out"
                         data-aos-mirror="true"
                         data-aos-once="true"
                    >
                         <h3>Control of data</h3>
                         <img className="feature-images money" src={control} alt="money" />
                         <p>Explore cost of living and other data of a single city or compare multiple cities to learn about differences.</p>
                    </div>
                    <div className="feature-descriptions"
                         data-aos="fade-up"
                         data-aos-offset="200"
                         data-aos-delay="50"
                         data-aos-duration="1000"
                         data-aos-easing="ease-in-out"
                         data-aos-mirror="true"
                         data-aos-once="true"
                    >
                         <img className="feature-images map" src={data} alt="map"/>
                         <h3>Map View</h3>
                         <p>View the map to explore what is near cities and how the data compares with different parts of the city.</p>
                    </div>
                    <div className="feature-descriptions"
                         data-aos="fade-left"
                         data-aos-offset="200"
                         data-aos-delay="50"
                         data-aos-duration="1000"
                         data-aos-easing="ease-in-out"
                         data-aos-mirror="true"
                         data-aos-once="true"
                    >
                         <img className="feature-images dataVisual" src={location} alt="data visual"/>
                         <h3>Visualize Data</h3>
                         <p>Data visuals help to easily understand in cost of living in multiple cities and provide data from a bird’s eye view.</p>
                    </div>
               </div>

               {/* TOP CITY METRICS */}
               <div className="dashboard-metrics-container">
                    <div className="dashboard-metrics">
                         <div
                              data-aos="fade-up"
                              data-aos-delay="150"
                              data-aos-duration="1000"
                              data-aos-easing="ease-in-out"
                              data-aos-mirror="true"
                              data-aos-once="true"
                         >
                              <img src={graph} alt="living cost graph" />
                              <p>Data for living costs</p>
                         </div>
                         <div
                              data-aos="fade-up"
                              data-aos-delay="350"
                              data-aos-duration="1000"
                              data-aos-easing="ease-in-out"
                              data-aos-mirror="true"
                              data-aos-once="true"
                         >
                              <img src={graph} alt="living cost graph" />
                              <p>Data for job prospects</p>
                         </div>
                         <div
                              data-aos="fade-up"
                              data-aos-delay="550"
                              data-aos-duration="1000"
                              data-aos-easing="ease-in-out"
                              data-aos-mirror="true"
                              data-aos-once="true"
                         >
                              <img src={graph} alt="living cost graph" />
                              <p>Data for safety/crime</p>
                         </div>
                    </div>
               </div>



               {/* COMPARE CITIES FUNCTION */}
               <div className="dashboard-compare-container"
                    data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
               >
                    <div className="dashboard-compare">
                         <h2>Compare Multiple Cities</h2>
                         <div className="compare-buttons">
                              <form onSubmit={submitCities}>
                                   <input 
                                        type="text"
                                        name="cityOne"
                                        value={compare.cityOne}
                                        onChange={compareChange}
                                        placeholder="San Francisco, CA"
                                   />
                                   <span className="versus">vs.</span>

                                   <PlacesAutocomplete name="cityTwo" value={cityTwo} onChange={setCityTwo} onSelect={handleCityTwo}>
                                        {
                                             ({ getInputProps, suggestions, getSuggestionItemProps, loading })=>(
                                             <div>
                                                  <input {...getInputProps({placeholder: "Type address"})}/>
                                                  <div>
                                                       {loading ? <div>...loading</div> : null}

                                                       {suggestions.map( (suggestion) => {
                                                            const style = {
                                                                 backgroundColor: suggestion.active ? "#F2F9FD" : "#fff",
                                                                 cursor: "pointer"
                                                            }

                                                            return <div {...getSuggestionItemProps(suggestion, {style})}>{suggestion.description}</div>
                                                       })}
                                                  </div>
                                             </div>)
                                        }
                                   </PlacesAutocomplete>
                                   <button
                                        data-aos="zoom-in"
                                        data-aos-offset="200"
                                        data-aos-delay="50"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="true"
                                        data-aos-once="true"
                                   >
                                        Compare
                                   </button>
                              </form>
                         </div>
                    </div>
               </div>



          </div>
     )
}

export default Dashboard;