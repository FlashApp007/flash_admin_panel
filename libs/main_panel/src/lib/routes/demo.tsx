 
  // State for default sorting toggle
  const [useDefaultSorting, setUseDefaultSorting] = useState(false);
  
  // State for custom sorting toggle
  const [useCustomSorting, setUseCustomSorting] = useState(true);
  
  // State for sorting option
  const [sortingOption, setSortingOption] = useState("latest");
  
  // State for current sorting method
  const [currentSortingMethod, setCurrentSortingMethod] = useState("priority");

 
    <div className="p-6 max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Category List Info */}
          <div className="p-6">
            <h2 className="text-gray-800 font-medium text-lg mb-2">Category List</h2>
            <p className="text-gray-600 text-sm">
              The Item Category list groups similar items together arranged 
              with the latest category first and in alphabetical order.
            </p>
          </div>
          
          {/* Right Column - Sorting Options */}
          <div className="bg-gray-50 p-6">
            {/* Default Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use default sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useDefaultSorting}
                    onChange={() => {
                      setUseDefaultSorting(!useDefaultSorting);
                      if (!useDefaultSorting) {
                        setUseCustomSorting(false);
                      }
                    }}
                  />
                  <div className={`w-11 h-6 ${useDefaultSorting ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-4 w-4 text-teal-600"
                    name="defaultSortingMethod"
                    checked={currentSortingMethod === "priority"}
                    onChange={() => setCurrentSortingMethod("priority")}
                    disabled={!useDefaultSorting}
                  />
                  <span className="ml-2 text-gray-700">Currently Sorting This Section By Priority</span>
                </label>
              </div>
            </div>
            
            {/* Custom Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use custom sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useCustomSorting}
                    onChange={() => {
                      setUseCustomSorting(!useCustomSorting);
                      if (!useCustomSorting) {
                        setUseDefaultSorting(false);
                      }
                    }}
                  />
                  <div className={`w-11 h-6 ${useCustomSorting ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <label className="flex items-center mb-2">
                  <input
                    type="radio"
                    className="form-radio h-4 w-4 text-teal-600"
                    name="customSortingMethod"
                    value="condition"
                    checked={true}
                    disabled={!useCustomSorting}
                  />
                  <span className="ml-2 text-gray-700">Set Customized Condition To Show This List</span>
                </label>
                
                <div className="ml-6 mt-4 space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-teal-600"
                      name="sortingOption"
                      value="latest"
                      checked={sortingOption === "latest"}
                      onChange={() => setSortingOption("latest")}
                      disabled={!useCustomSorting}
                    />
                    <span className="ml-2 text-gray-700">Sort by latest created</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-teal-600"
                      name="sortingOption"
                      value="first"
                      checked={sortingOption === "first"}
                      onChange={() => setSortingOption("first")}
                      disabled={!useCustomSorting}
                    />
                    <span className="ml-2 text-gray-700">Sort by first created</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-teal-600"
                      name="sortingOption"
                      value="orders"
                      checked={sortingOption === "orders"}
                      onChange={() => setSortingOption("orders")}
                      disabled={!useCustomSorting}
                    />
                    <span className="ml-2 text-gray-700">Sort by orders</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-teal-600"
                      name="sortingOption"
                      value="alphabetical_asc"
                      checked={sortingOption === "alphabetical_asc"}
                      onChange={() => setSortingOption("alphabetical_asc")}
                      disabled={!useCustomSorting}
                    />
                    <span className="ml-2 text-gray-700">Sort by Alphabetical (A to Z)</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-teal-600"
                      name="sortingOption"
                      value="alphabetical_desc"
                      checked={sortingOption === "alphabetical_desc"}
                      onChange={() => setSortingOption("alphabetical_desc")}
                      disabled={!useCustomSorting}
                    />
                    <span className="ml-2 text-gray-700">Sort by Alphabetical (Z to A)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 


 
  // State for Best Stores Nearby section
  const [useDefaultSortingNearby, setUseDefaultSortingNearby] = useState(true);
  const [useCustomSortingNearby, setUseCustomSortingNearby] = useState(false);
  
  // State for Recommended Store section
  const [useDefaultSortingRecommended, setUseDefaultSortingRecommended] = useState(true);
  const [useCustomSortingRecommended, setUseCustomSortingRecommended] = useState(false);

  // Toggle functions for Best Stores Nearby
  const toggleDefaultSortingNearby = () => {
    setUseDefaultSortingNearby(!useDefaultSortingNearby);
    if (!useDefaultSortingNearby) {
      setUseCustomSortingNearby(false);
    }
  };

  const toggleCustomSortingNearby = () => {
    setUseCustomSortingNearby(!useCustomSortingNearby);
    if (!useCustomSortingNearby) {
      setUseDefaultSortingNearby(false);
    }
  };

  // Toggle functions for Recommended Store
  const toggleDefaultSortingRecommended = () => {
    setUseDefaultSortingRecommended(!useDefaultSortingRecommended);
    if (!useDefaultSortingRecommended) {
      setUseCustomSortingRecommended(false);
    }
  };

  const toggleCustomSortingRecommended = () => {
    setUseCustomSortingRecommended(!useCustomSortingRecommended);
    if (!useCustomSortingRecommended) {
      setUseDefaultSortingRecommended(false);
    }
  };

 
    <div className="p-6 max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Best Stores Nearby Info */}
          <div className="p-6">
            <h2 className="text-gray-800 font-medium text-lg mb-2">Best Stores Nearby</h2>
            <p className="text-gray-600 text-sm">
              Best Stores Nearby is the list of customer choices in which 
              customer ordered items most and also highly rated with good 
              reviews
            </p>
          </div>
          
          {/* Right Column - Best Stores Nearby Sorting Options */}
          <div className="bg-gray-50 p-6">
            {/* Default Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use default sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useDefaultSortingNearby}
                    onChange={toggleDefaultSortingNearby}
                  />
                  <div className={`w-11 h-6 ${useDefaultSortingNearby ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">
                    This Section Is Currently Sorted By Distance Which Is The Most Nearby 
                    User And Total Orders.
                  </span>
                </div>
              </div>
            </div>
            
            {/* Custom Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use custom sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useCustomSortingNearby}
                    onChange={toggleCustomSortingNearby}
                  />
                  <div className={`w-11 h-6 ${useCustomSortingNearby ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">Set Customized Condition To Show This List</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Recommended Store Info */}
          <div className="p-6">
            <h2 className="text-gray-800 font-medium text-lg mb-2">Recommended Store</h2>
            <p className="text-gray-600 text-sm">
              Recommended Stores is the list of Admin choices which is 
              highly recommended by admin
            </p>
          </div>
          
          {/* Right Column - Recommended Store Sorting Options */}
          <div className="bg-gray-50 p-6">
            {/* Default Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use default sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useDefaultSortingRecommended}
                    onChange={toggleDefaultSortingRecommended}
                  />
                  <div className={`w-11 h-6 ${useDefaultSortingRecommended ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">
                    This Section Is Currently Sorted By Oldest Recommended Stores.
                  </span>
                </div>
              </div>
            </div>
            
            {/* Custom Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use custom sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useCustomSortingRecommended}
                    onChange={toggleCustomSortingRecommended}
                  />
                  <div className={`w-11 h-6 ${useCustomSortingRecommended ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">Set Customized Condition To Show This List</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 


 
  // State for default sorting toggle
  const [useDefaultSorting, setUseDefaultSorting] = useState(false);
  
  // State for custom sorting toggle
  const [useCustomSorting, setUseCustomSorting] = useState(true);
  
  // State for sorting option
  const [sortingOption, setSortingOption] = useState("alphabetical_asc");
  
  // State for stockout products option
  const [stockoutOption, setStockoutOption] = useState("none");

  // Toggle functions
  const toggleDefaultSorting = () => {
    setUseDefaultSorting(!useDefaultSorting);
    if (!useDefaultSorting) {
      setUseCustomSorting(false);
    }
  };

  const toggleCustomSorting = () => {
    setUseCustomSorting(!useCustomSorting);
    if (!useCustomSorting) {
      setUseDefaultSorting(false);
    }
  };
 
    <div className="p-6 max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Special Offers Info */}
          <div className="p-6">
            <h2 className="text-gray-800 font-medium text-lg mb-2">Special Offers</h2>
            <p className="text-gray-600 text-sm">
              The special offers includes the list of discounted items 
              offered for the customers
            </p>
          </div>
          
          {/* Right Column - Sorting Options */}
          <div className="bg-gray-50 p-6">
            {/* Default Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use default sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useDefaultSorting}
                    onChange={toggleDefaultSorting}
                  />
                  <div className={`w-11 h-6 ${useDefaultSorting ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">Currently Sorting This Section By Highest Discount Amount.</span>
                </div>
              </div>
            </div>
            
            {/* Custom Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use custom sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useCustomSorting}
                    onChange={toggleCustomSorting}
                  />
                  <div className={`w-11 h-6 ${useCustomSorting ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center mb-4">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">Set Customized Condition To Show This List</span>
                </div>
                
                <div className="ml-6 mt-4 space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-teal-600"
                      name="sortingOption"
                      value="orders"
                      checked={sortingOption === "orders"}
                      onChange={() => setSortingOption("orders")}
                      disabled={!useCustomSorting}
                    />
                    <span className="ml-2 text-gray-700">Sort by orders</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-teal-600"
                      name="sortingOption"
                      value="reviews"
                      checked={sortingOption === "reviews"}
                      onChange={() => setSortingOption("reviews")}
                      disabled={!useCustomSorting}
                    />
                    <span className="ml-2 text-gray-700">Sort by reviews count</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-teal-600"
                      name="sortingOption"
                      value="ratings"
                      checked={sortingOption === "ratings"}
                      onChange={() => setSortingOption("ratings")}
                      disabled={!useCustomSorting}
                    />
                    <span className="ml-2 text-gray-700">Sort by ratings</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-teal-600"
                      name="sortingOption"
                      value="alphabetical_asc"
                      checked={sortingOption === "alphabetical_asc"}
                      onChange={() => setSortingOption("alphabetical_asc")}
                      disabled={!useCustomSorting}
                    />
                    <span className="ml-2 text-gray-700">Sort by Alphabetical (A to Z)</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-teal-600"
                      name="sortingOption"
                      value="alphabetical_desc"
                      checked={sortingOption === "alphabetical_desc"}
                      onChange={() => setSortingOption("alphabetical_desc")}
                      disabled={!useCustomSorting}
                    />
                    <span className="ml-2 text-gray-700">Sort by Alphabetical (Z to A)</span>
                  </label>
                </div>
              </div>
              
              {/* Stockout Products Options */}
              <div className="ml-6 mt-8 border-t pt-4 space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-4 w-4 text-teal-600"
                    name="stockoutOption"
                    value="show"
                    checked={stockoutOption === "show"}
                    onChange={() => setStockoutOption("show")}
                    disabled={!useCustomSorting}
                  />
                  <span className="ml-2 text-gray-700">Show stockout products in the last</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-4 w-4 text-teal-600"
                    name="stockoutOption"
                    value="remove"
                    checked={stockoutOption === "remove"}
                    onChange={() => setStockoutOption("remove")}
                    disabled={!useCustomSorting}
                  />
                  <span className="ml-2 text-gray-700">Remove stockout products from the list</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-4 w-4 text-teal-600"
                    name="stockoutOption"
                    value="none"
                    checked={stockoutOption === "none"}
                    onChange={() => setStockoutOption("none")}
                    disabled={!useCustomSorting}
                  />
                  <span className="ml-2 text-gray-700">None</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 


 
  // State for Most Popular Item section
  const [useDefaultSortingPopular, setUseDefaultSortingPopular] = useState(true);
  const [useCustomSortingPopular, setUseCustomSortingPopular] = useState(false);
  
  // State for Best Reviewed Item section
  const [useDefaultSortingReviewed, setUseDefaultSortingReviewed] = useState(true);
  const [useCustomSortingReviewed, setUseCustomSortingReviewed] = useState(false);
  
  // State for Just for You section
  const [useDefaultSortingJustForYou, setUseDefaultSortingJustForYou] = useState(true);
  const [useCustomSortingJustForYou, setUseCustomSortingJustForYou] = useState(false);

  // Toggle functions for Most Popular Item
  const toggleDefaultSortingPopular = () => {
    setUseDefaultSortingPopular(!useDefaultSortingPopular);
    if (!useDefaultSortingPopular) {
      setUseCustomSortingPopular(false);
    }
  };

  const toggleCustomSortingPopular = () => {
    setUseCustomSortingPopular(!useCustomSortingPopular);
    if (!useCustomSortingPopular) {
      setUseDefaultSortingPopular(false);
    }
  };

  // Toggle functions for Best Reviewed Item
  const toggleDefaultSortingReviewed = () => {
    setUseDefaultSortingReviewed(!useDefaultSortingReviewed);
    if (!useDefaultSortingReviewed) {
      setUseCustomSortingReviewed(false);
    }
  };

  const toggleCustomSortingReviewed = () => {
    setUseCustomSortingReviewed(!useCustomSortingReviewed);
    if (!useCustomSortingReviewed) {
      setUseDefaultSortingReviewed(false);
    }
  };

  // Toggle functions for Just for You
  const toggleDefaultSortingJustForYou = () => {
    setUseDefaultSortingJustForYou(!useDefaultSortingJustForYou);
    if (!useDefaultSortingJustForYou) {
      setUseCustomSortingJustForYou(false);
    }
  };

  const toggleCustomSortingJustForYou = () => {
    setUseCustomSortingJustForYou(!useCustomSortingJustForYou);
    if (!useCustomSortingJustForYou) {
      setUseDefaultSortingJustForYou(false);
    }
  };

 
    <div className="p-6 max-w-6xl mx-auto">
      {/* Most Popular Item Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Most Popular Item Info */}
          <div className="p-6">
            <h2 className="text-gray-800 font-medium text-lg mb-2">Most Popular Item</h2>
            <p className="text-gray-600 text-sm">
              Popular Item Nearby means the Item Items list which are 
              mostly ordered by the customers and have good reviews & 
              ratings
            </p>
          </div>
          
          {/* Right Column - Most Popular Item Sorting Options */}
          <div className="bg-gray-50 p-6">
            {/* Default Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use default sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useDefaultSortingPopular}
                    onChange={toggleDefaultSortingPopular}
                  />
                  <div className={`w-11 h-6 ${useDefaultSortingPopular ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">
                    This Section Is Currently Sorted By Higher Ordered Items.
                  </span>
                </div>
              </div>
            </div>
            
            {/* Custom Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use custom sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useCustomSortingPopular}
                    onChange={toggleCustomSortingPopular}
                  />
                  <div className={`w-11 h-6 ${useCustomSortingPopular ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">Set Customized Condition To Show This List</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Reviewed Item Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Best Reviewed Item Info */}
          <div className="p-6">
            <h2 className="text-gray-800 font-medium text-lg mb-2">Best Reviewed Item</h2>
            <p className="text-gray-600 text-sm">
              Best Reviewed Items are the top most ordered item list of 
              customer choice which are highly rated & reviewed
            </p>
          </div>
          
          {/* Right Column - Best Reviewed Item Sorting Options */}
          <div className="bg-gray-50 p-6">
            {/* Default Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use default sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useDefaultSortingReviewed}
                    onChange={toggleDefaultSortingReviewed}
                  />
                  <div className={`w-11 h-6 ${useDefaultSortingReviewed ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">
                    Currently Sorting This Section By Top Ratings
                  </span>
                </div>
              </div>
            </div>
            
            {/* Custom Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use custom sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useCustomSortingReviewed}
                    onChange={toggleCustomSortingReviewed}
                  />
                  <div className={`w-11 h-6 ${useCustomSortingReviewed ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">Set Customized Condition To Show This List</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Just for You Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Just for You Info */}
          <div className="p-6">
            <h2 className="text-gray-800 font-medium text-lg mb-2">Just for You</h2>
            <p className="text-gray-600 text-sm">
              Just for You is the item campaign includes the list of 
              discounted items offered for the customers.
            </p>
          </div>
          
          {/* Right Column - Just for You Sorting Options */}
          <div className="bg-gray-50 p-6">
            {/* Default Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use default sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useDefaultSortingJustForYou}
                    onChange={toggleDefaultSortingJustForYou}
                  />
                  <div className={`w-11 h-6 ${useDefaultSortingJustForYou ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">
                    Currently Sorting This Section By Latest
                  </span>
                </div>
              </div>
            </div>
            
            {/* Custom Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use custom sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useCustomSortingJustForYou}
                    onChange={toggleCustomSortingJustForYou}
                  />
                  <div className={`w-11 h-6 ${useCustomSortingJustForYou ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">Set Customized Condition To Show This List</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 

 
  // State for New On 6amMart section
  const [useDefaultSortingNew, setUseDefaultSortingNew] = useState(true);
  const [useCustomSortingNew, setUseCustomSortingNew] = useState(false);
  
  // State for All Stores section
  const [useDefaultSortingAll, setUseDefaultSortingAll] = useState(true);
  const [useCustomSortingAll, setUseCustomSortingAll] = useState(false);
  
  // State for Category / Subcategory section
  const [useDefaultSortingCategory, setUseDefaultSortingCategory] = useState(true);
  const [useCustomSortingCategory, setUseCustomSortingCategory] = useState(false);

  // Toggle functions for New On 6amMart
  const toggleDefaultSortingNew = () => {
    setUseDefaultSortingNew(!useDefaultSortingNew);
    if (!useDefaultSortingNew) {
      setUseCustomSortingNew(false);
    }
  };

  const toggleCustomSortingNew = () => {
    setUseCustomSortingNew(!useCustomSortingNew);
    if (!useCustomSortingNew) {
      setUseDefaultSortingNew(false);
    }
  };

  // Toggle functions for All Stores
  const toggleDefaultSortingAll = () => {
    setUseDefaultSortingAll(!useDefaultSortingAll);
    if (!useDefaultSortingAll) {
      setUseCustomSortingAll(false);
    }
  };

  const toggleCustomSortingAll = () => {
    setUseCustomSortingAll(!useCustomSortingAll);
    if (!useCustomSortingAll) {
      setUseDefaultSortingAll(false);
    }
  };

  // Toggle functions for Category / Subcategory
  const toggleDefaultSortingCategory = () => {
    setUseDefaultSortingCategory(!useDefaultSortingCategory);
    if (!useDefaultSortingCategory) {
      setUseCustomSortingCategory(false);
    }
  };

  const toggleCustomSortingCategory = () => {
    setUseCustomSortingCategory(!useCustomSortingCategory);
    if (!useCustomSortingCategory) {
      setUseDefaultSortingCategory(false);
    }
  };

 
    <div className="p-6 max-w-6xl mx-auto">
      {/* New On 6amMart Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - New On 6amMart Info */}
          <div className="p-6">
            <h2 className="text-gray-800 font-medium text-lg mb-2">New On 6amMart</h2>
            <p className="text-gray-600 text-sm">
              The New store list arranges stores based on the latest join 
              that are closest to the customers location.
            </p>
          </div>
          
          {/* Right Column - New On 6amMart Sorting Options */}
          <div className="bg-gray-50 p-6">
            {/* Default Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use default sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useDefaultSortingNew}
                    onChange={toggleDefaultSortingNew}
                  />
                  <div className={`w-11 h-6 ${useDefaultSortingNew ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">
                    Currently Sorting This Section By Latest
                  </span>
                </div>
              </div>
            </div>
            
            {/* Custom Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use custom sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useCustomSortingNew}
                    onChange={toggleCustomSortingNew}
                  />
                  <div className={`w-11 h-6 ${useCustomSortingNew ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">Set Customized Condition To Show This List</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Stores Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - All Stores Info */}
          <div className="p-6">
            <h2 className="text-gray-800 font-medium text-lg mb-2">All Stores</h2>
            <p className="text-gray-600 text-sm">
              The all store list arranges all stores based on the latest join 
              that are closest to the customers location.
            </p>
          </div>
          
          {/* Right Column - All Stores Sorting Options */}
          <div className="bg-gray-50 p-6">
            {/* Default Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use default sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useDefaultSortingAll}
                    onChange={toggleDefaultSortingAll}
                  />
                  <div className={`w-11 h-6 ${useDefaultSortingAll ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">
                    This Section Is Currently Sorted By Active Stores.
                  </span>
                </div>
              </div>
            </div>
            
            {/* Custom Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use custom sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useCustomSortingAll}
                    onChange={toggleCustomSortingAll}
                  />
                  <div className={`w-11 h-6 ${useCustomSortingAll ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">Set Customized Condition To Show This List</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category / Subcategory Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Category / Subcategory Info */}
          <div className="p-6">
            <h2 className="text-gray-800 font-medium text-lg mb-2">Category / Subcategory wise product list</h2>
            <p className="text-gray-600 text-sm">
              Category / Subcategory Wise Items means the latest items list 
              under a specific category
            </p>
          </div>
          
          {/* Right Column - Category / Subcategory Sorting Options */}
          <div className="bg-gray-50 p-6">
            {/* Default Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use default sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useDefaultSortingCategory}
                    onChange={toggleDefaultSortingCategory}
                  />
                  <div className={`w-11 h-6 ${useDefaultSortingCategory ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">
                    This Section Is Currently Sorted By Latest Created Items.
                  </span>
                </div>
              </div>
            </div>
            
            {/* Custom Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use custom sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useCustomSortingCategory}
                    onChange={toggleCustomSortingCategory}
                  />
                  <div className={`w-11 h-6 ${useCustomSortingCategory ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">Set Customized Condition To Show This List</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 



 
  // State for Product search list section
  const [useDefaultSortingProduct, setUseDefaultSortingProduct] = useState(true);
  const [useCustomSortingProduct, setUseCustomSortingProduct] = useState(false);
  
  // State for Basic Medicine Nearby section
  const [useDefaultSortingMedicine, setUseDefaultSortingMedicine] = useState(true);
  const [useCustomSortingMedicine, setUseCustomSortingMedicine] = useState(false);
  
  // State for Common Condition section
  const [useDefaultSortingCondition, setUseDefaultSortingCondition] = useState(true);
  const [useCustomSortingCondition, setUseCustomSortingCondition] = useState(false);

  // Toggle functions for Product search list
  const toggleDefaultSortingProduct = () => {
    setUseDefaultSortingProduct(!useDefaultSortingProduct);
    if (!useDefaultSortingProduct) {
      setUseCustomSortingProduct(false);
    }
  };

  const toggleCustomSortingProduct = () => {
    setUseCustomSortingProduct(!useCustomSortingProduct);
    if (!useCustomSortingProduct) {
      setUseDefaultSortingProduct(false);
    }
  };

  // Toggle functions for Basic Medicine Nearby
  const toggleDefaultSortingMedicine = () => {
    setUseDefaultSortingMedicine(!useDefaultSortingMedicine);
    if (!useDefaultSortingMedicine) {
      setUseCustomSortingMedicine(false);
    }
  };

  const toggleCustomSortingMedicine = () => {
    setUseCustomSortingMedicine(!useCustomSortingMedicine);
    if (!useCustomSortingMedicine) {
      setUseDefaultSortingMedicine(false);
    }
  };

  // Toggle functions for Common Condition
  const toggleDefaultSortingCondition = () => {
    setUseDefaultSortingCondition(!useDefaultSortingCondition);
    if (!useDefaultSortingCondition) {
      setUseCustomSortingCondition(false);
    }
  };

  const toggleCustomSortingCondition = () => {
    setUseCustomSortingCondition(!useCustomSortingCondition);
    if (!useCustomSortingCondition) {
      setUseDefaultSortingCondition(false);
    }
  };

 
    <div className="p-6 max-w-6xl mx-auto">
      {/* Product search list Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Product search list Info */}
          <div className="p-6">
            <h2 className="text-gray-800 font-medium text-lg mb-2">Product search list</h2>
            <p className="text-gray-600 text-sm">
              Product search list (Search Bar) means the item list from top 
              search bar
            </p>
          </div>
          
          {/* Right Column - Product search list Sorting Options */}
          <div className="bg-gray-50 p-6">
            {/* Default Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use default sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useDefaultSortingProduct}
                    onChange={toggleDefaultSortingProduct}
                  />
                  <div className={`w-11 h-6 ${useDefaultSortingProduct ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">
                    This Section Is Currently Sorted By Active Items.
                  </span>
                </div>
              </div>
            </div>
            
            {/* Custom Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use custom sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useCustomSortingProduct}
                    onChange={toggleCustomSortingProduct}
                  />
                  <div className={`w-11 h-6 ${useCustomSortingProduct ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">Set Customized Condition To Show This List</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Basic Medicine Nearby Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Basic Medicine Nearby Info */}
          <div className="p-6">
            <h2 className="text-gray-800 font-medium text-lg mb-2">Basic Medicine Nearby</h2>
            <p className="text-gray-600 text-sm">
              Basic Medicine Nearby is item list of the stores based on the 
              latest join that are closest to the customers location.
            </p>
          </div>
          
          {/* Right Column - Basic Medicine Nearby Sorting Options */}
          <div className="bg-gray-50 p-6">
            {/* Default Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use default sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useDefaultSortingMedicine}
                    onChange={toggleDefaultSortingMedicine}
                  />
                  <div className={`w-11 h-6 ${useDefaultSortingMedicine ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">
                    This Section Is Currently Sorted By Total Orders.
                  </span>
                </div>
              </div>
            </div>
            
            {/* Custom Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use custom sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useCustomSortingMedicine}
                    onChange={toggleCustomSortingMedicine}
                  />
                  <div className={`w-11 h-6 ${useCustomSortingMedicine ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">Set Customized Condition To Show This List</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Common Condition Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Common Condition Info */}
          <div className="p-6">
            <h2 className="text-gray-800 font-medium text-lg mb-2">Common Condition</h2>
            <p className="text-gray-600 text-sm">
              Common Condition is the list of items which are mostly 
              commonly used by the users.
            </p>
          </div>
          
          {/* Right Column - Common Condition Sorting Options */}
          <div className="bg-gray-50 p-6">
            {/* Default Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use default sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useDefaultSortingCondition}
                    onChange={toggleDefaultSortingCondition}
                  />
                  <div className={`w-11 h-6 ${useDefaultSortingCondition ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">
                    Currently Sorting This Section By Active Conditions
                  </span>
                </div>
              </div>
            </div>
            
            {/* Custom Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use custom sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useCustomSortingCondition}
                    onChange={toggleCustomSortingCondition}
                  />
                  <div className={`w-11 h-6 ${useCustomSortingCondition ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">Set Customized Condition To Show This List</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 





 
  // State for Brand section
  const [useDefaultSortingBrand, setUseDefaultSortingBrand] = useState(false);
  const [useCustomSortingBrand, setUseCustomSortingBrand] = useState(true);
  
  // State for Brand wise product list section
  const [useDefaultSortingBrandWise, setUseDefaultSortingBrandWise] = useState(true);
  const [useCustomSortingBrandWise, setUseCustomSortingBrandWise] = useState(false);
  
  // State for sorting options
  const [sortingOption, setSortingOption] = useState("alphabetical-z-to-a");

  // Toggle functions for Brand
  const toggleDefaultSortingBrand = () => {
    setUseDefaultSortingBrand(!useDefaultSortingBrand);
    if (!useDefaultSortingBrand) {
      setUseCustomSortingBrand(false);
    }
  };

  const toggleCustomSortingBrand = () => {
    setUseCustomSortingBrand(!useCustomSortingBrand);
    if (!useCustomSortingBrand) {
      setUseDefaultSortingBrand(false);
    }
  };

  // Toggle functions for Brand wise product list
  const toggleDefaultSortingBrandWise = () => {
    setUseDefaultSortingBrandWise(!useDefaultSortingBrandWise);
    if (!useDefaultSortingBrandWise) {
      setUseCustomSortingBrandWise(false);
    }
  };

  const toggleCustomSortingBrandWise = () => {
    setUseCustomSortingBrandWise(!useCustomSortingBrandWise);
    if (!useCustomSortingBrandWise) {
      setUseDefaultSortingBrandWise(false);
    }
  };

  // Handle sorting option change
  const handleSortingOptionChange = (option) => {
    setSortingOption(option);
  };
 
    <div className="p-6 max-w-6xl mx-auto">
      {/* Brand Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Brand Info */}
          <div className="p-6">
            <h2 className="text-gray-800 font-medium text-lg mb-2">Brand</h2>
            <p className="text-gray-600 text-sm">
              The list of well known brands.
            </p>
          </div>
          
          {/* Right Column - Brand Sorting Options */}
          <div className="bg-gray-50 p-6">
            {/* Default Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use default sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useDefaultSortingBrand}
                    onChange={toggleDefaultSortingBrand}
                  />
                  <div className={`w-11 h-6 ${useDefaultSortingBrand ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">
                    Currently Sorting This Section By Active Brands
                  </span>
                </div>
              </div>
            </div>
            
            {/* Custom Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use custom sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useCustomSortingBrand}
                    onChange={toggleCustomSortingBrand}
                  />
                  <div className={`w-11 h-6 ${useCustomSortingBrand ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">Set Customized Condition To Show This List</span>
                </div>
              </div>
              
              {/* Sorting Options */}
              <div className="mt-4 bg-white p-4 rounded-lg border border-gray-100">
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sortOption"
                      className="form-radio text-teal-500 h-4 w-4"
                      checked={sortingOption === "latest-created"}
                      onChange={() => handleSortingOptionChange("latest-created")}
                    />
                    <span className="ml-2 text-gray-700 text-sm">Sort by latest created</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sortOption"
                      className="form-radio text-teal-500 h-4 w-4"
                      checked={sortingOption === "first-created"}
                      onChange={() => handleSortingOptionChange("first-created")}
                    />
                    <span className="ml-2 text-gray-700 text-sm">Sort by first created</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sortOption"
                      className="form-radio text-teal-500 h-4 w-4"
                      checked={sortingOption === "orders"}
                      onChange={() => handleSortingOptionChange("orders")}
                    />
                    <span className="ml-2 text-gray-700 text-sm">Sort by orders</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sortOption"
                      className="form-radio text-teal-500 h-4 w-4"
                      checked={sortingOption === "alphabetical-a-to-z"}
                      onChange={() => handleSortingOptionChange("alphabetical-a-to-z")}
                    />
                    <span className="ml-2 text-gray-700 text-sm">Sort by Alphabetical (A to Z)</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sortOption"
                      className="form-radio text-teal-500 h-4 w-4"
                      checked={sortingOption === "alphabetical-z-to-a"}
                      onChange={() => handleSortingOptionChange("alphabetical-z-to-a")}
                    />
                    <span className="ml-2 text-gray-700 text-sm">Sort by Alphabetical (Z to A)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand wise product list Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Brand wise product list Info */}
          <div className="p-6">
            <h2 className="text-gray-800 font-medium text-lg mb-2">Brand wise product list</h2>
            <p className="text-gray-600 text-sm">
              The Brand wise product list groups similar items together 
              arranged with the latest brand first.
            </p>
          </div>
          
          {/* Right Column - Brand wise product list Sorting Options */}
          <div className="bg-gray-50 p-6">
            {/* Default Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use default sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useDefaultSortingBrandWise}
                    onChange={toggleDefaultSortingBrandWise}
                  />
                  <div className={`w-11 h-6 ${useDefaultSortingBrandWise ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">
                    This Section Is Currently Sorted By Latest Created Items.
                  </span>
                </div>
              </div>
            </div>
            
            {/* Custom Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use custom sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useCustomSortingBrandWise}
                    onChange={toggleCustomSortingBrandWise}
                  />
                  <div className={`w-11 h-6 ${useCustomSortingBrandWise ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">Set Customized Condition To Show This List</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  // State for Brand wise product list section
  const [useDefaultSortingBrandWise, setUseDefaultSortingBrandWise] = useState(true);
  const [useCustomSortingBrandWise, setUseCustomSortingBrandWise] = useState(false);
  
  // State for Top offer near me section
  const [useDefaultSortingTopOffer, setUseDefaultSortingTopOffer] = useState(true);
  const [useCustomSortingTopOffer, setUseCustomSortingTopOffer] = useState(false);

  // Toggle functions for Brand wise product list
  const toggleDefaultSortingBrandWise = () => {
    setUseDefaultSortingBrandWise(!useDefaultSortingBrandWise);
    if (!useDefaultSortingBrandWise) {
      setUseCustomSortingBrandWise(false);
    }
  };

  const toggleCustomSortingBrandWise = () => {
    setUseCustomSortingBrandWise(!useCustomSortingBrandWise);
    if (!useCustomSortingBrandWise) {
      setUseDefaultSortingBrandWise(false);
    }
  };

  // Toggle functions for Top offer near me
  const toggleDefaultSortingTopOffer = () => {
    setUseDefaultSortingTopOffer(!useDefaultSortingTopOffer);
    if (!useDefaultSortingTopOffer) {
      setUseCustomSortingTopOffer(false);
    }
  };

  const toggleCustomSortingTopOffer = () => {
    setUseCustomSortingTopOffer(!useCustomSortingTopOffer);
    if (!useCustomSortingTopOffer) {
      setUseDefaultSortingTopOffer(false);
    }
  };

  // Handle reset
  const handleReset = () => {
    setUseDefaultSortingBrandWise(true);
    setUseCustomSortingBrandWise(false);
    setUseDefaultSortingTopOffer(true);
    setUseCustomSortingTopOffer(false);
  };

  // Handle save
  const handleSave = () => {
    console.log("Saved settings:", {
      brandWiseProductList: {
        useDefaultSorting: useDefaultSortingBrandWise,
        useCustomSorting: useCustomSortingBrandWise
      },
      topOfferNearMe: {
        useDefaultSorting: useDefaultSortingTopOffer,
        useCustomSorting: useCustomSortingTopOffer
      }
    });
    // Add your save logic here
  };
 
    <div className="p-6 max-w-6xl mx-auto">
      {/* Brand wise product list Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Brand wise product list Info */}
          <div className="p-6">
            <h2 className="text-gray-800 font-medium text-lg mb-2">Brand wise product list</h2>
            <p className="text-gray-600 text-sm">
              The Brand wise product list groups similar items together 
              arranged with the latest brand first.
            </p>
          </div>
          
          {/* Right Column - Brand wise product list Sorting Options */}
          <div className="bg-gray-50 p-6">
            {/* Default Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use default sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useDefaultSortingBrandWise}
                    onChange={toggleDefaultSortingBrandWise}
                  />
                  <div className={`w-11 h-6 ${useDefaultSortingBrandWise ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">
                    This Section Is Currently Sorted By Latest Created Items.
                  </span>
                </div>
              </div>
            </div>
            
            {/* Custom Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use custom sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useCustomSortingBrandWise}
                    onChange={toggleCustomSortingBrandWise}
                  />
                  <div className={`w-11 h-6 ${useCustomSortingBrandWise ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">Set Customized Condition To Show This List</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top offer near me Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Top offer near me Info */}
          <div className="p-6">
            <h2 className="text-gray-800 font-medium text-lg mb-2">Top offer near me</h2>
            <p className="text-gray-600 text-sm">
              The store list arranges stores based on the dicount and 
              closest to the customers location.
            </p>
          </div>
          
          {/* Right Column - Top offer near me Sorting Options */}
          <div className="bg-gray-50 p-6">
            {/* Default Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use default sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useDefaultSortingTopOffer}
                    onChange={toggleDefaultSortingTopOffer}
                  />
                  <div className={`w-11 h-6 ${useDefaultSortingTopOffer ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">
                    This Section Sorted Based On The Dicount And Closest To The Customers Location
                  </span>
                </div>
              </div>
            </div>
            
            {/* Custom Sorting Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Use custom sorting list</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={useCustomSortingTopOffer}
                    onChange={toggleCustomSortingTopOffer}
                  />
                  <div className={`w-11 h-6 ${useCustomSortingTopOffer ? 'bg-teal-500' : 'bg-gray-200'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                </label>
              </div>
              
              <div className="ml-6 mt-3">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs mr-2">?</div>
                  <span className="text-gray-700 text-sm">Set Customized Condition To Show This List</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button 
          className="bg-gray-100 text-gray-700 font-medium py-2 px-6 rounded-lg hover:bg-gray-200"
          onClick={handleReset}
        >
          Reset
        </button>
        <button 
          className="bg-teal-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-teal-700"
          onClick={handleSave}
        >
          Save Information
        </button>
      </div>
    </div>
  