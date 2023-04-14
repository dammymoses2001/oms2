/* eslint-disable sort-keys */
export const AUTH_START = "AUTH_START";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const FORGET_PASSWORD_FAIL = "FORGET_PASSWORD_SUCCESS_FAIL";
export const FORGET_PASSWORD_SUCCESS = "FORGET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAIL = "FORGET_PASSWORD_SUCCESS_FAIL";
export const RESET_PASSWORD_SUCCESS = "FORGET_PASSWORD_SUCCESS";
export const LOGOUT_START = "LOGOUT_START";
export const GET_CURRENT_USER_SUCCESS = "GET_CURRENT_USER_SUCCESS";
export const GET_CURRENT_USER_FAIL = "GET_CURRENT_USER_FAIL";
export const GET_ALL_PRODUCT_FAIL = "GET_ALL_PRODUCT_FAIL";
export const GET_ALL_PRODUCT_SUCCESS = "GET_ALL_PRODUCT_SUCCESS";
export const GET_ALL_MY_PRODUCT_FAIL = "GET_ALL_MY_PRODUCT_FAIL";
export const GET_ALL_MY_PRODUCT_SUCCESS = "GET_ALL_MY_PRODUCT_SUCCESS";
export const GET_ALL_SUPPLIERS_SUCCESS = "GET_ALL_SUPPLIERS_SUCCESS";
export const GET_ALL_SUPPLIERS_FAIL = "GET_ALL_SUPPLIERS_FAIL";
export const SEARCH_SUPPILERS = "SEARCH_SUPPILERS";
export const SEARCH_PRODUCTS = "SEARCH_PRODUCTS";
export const GET_ALL_SUPPLIERS_PRODUCT_SUCCESS =
    "GET_ALL_SUPPLIERS_PRODUCT_SUCCESS";
export const GET_ALL_SUPPLIERS_PRODUCT_REQUEST =
    "GET_ALL_SUPPLIERS_PRODUCT_REQUEST";
export const GET_ALL_SUPPLIERS_PRODUCT_FAIL = "GET_ALL_SUPPLIERS_PRODUCT_FAIL";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAIL = "GET_PRODUCT_FAIL";
export const GET_PACKAGES_SUCCESS = "GET_PACKAGES_SUCCESS";
export const GET_PACKAGES_FAIL = "GET_PACKAGES_FAIL";
export const GET_CART_SUCCESS = "GET_CART_SUCCESS";
export const GET_CART_FAIL = "GET_CART_FAIL";
export const GET_PROFILE_SUCESS = "GET_PROFILE_SUCESS";
export const GET_PROFILE_FAIL = "GET_PROFILE_FAIL";
export const GET_DELIVERYCHANNELS_FAIL = "GET_DELIVERYCHANNELS_FAIL";
export const GET_DELIVERYCHANNELS_SUCCESS = "GET_DELIVERYCHANNELS_SUCCESS";

export const GET_VISITATIONSCHEDULES_SUCCESS =
    "GET_VISITATIONSCHEDULES_SUCCESS";
export const GET_VISITATIONSCHEDULES_FAIL = "GET_VISITATIONSCHEDULES_FAIL";

//
export const GET_PRODUCTCATEGORIES_SUCCESS = "GET_PRODUCTCATEGORIES_SUCCESS";
export const GET_PRODUCTCATEGORIES_FAIL = "GET_PRODUCTCATEGORIES_FAIL";

export const GET_OREDR_FAIL = "GET_OREDR_FAIL";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";

export const GET_INVOICE_SUCCESS = "GET_INVOICE_SUCCESS";
export const GET_INVOICE_FAIL = "GET_INVOICE_FAIL";

export const ADD_NEW_PRODUCT_FAIL = "ADD_NEW_PRODUCT_FAIL";
export const ADD_NEW_PRODUCT_SUCCESS = "ADD_NEW_PRODUCT_SUCCESS";

export const DELETE_PRODUCT_FAIL = "DELETE_PRODUCT_FAIL";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";

export const PRODUCT_UPLOADCV_SUCCESS = "PRODUCT_UPLOADCV_SUCCESS";
export const PRODUCT_UPLOADCV_FAIL = "PRODUCT_UPLOADCV_FAIL";

export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT_FAIL = "UPDATE_PRODUCT_FAIL";
export const GET_DASHBOARD_METRICS_SUCCESS = "GET_DASHBOARD_METRICS_SUCCESS";
export const GET_MAP_METRICS_SUCCESS = "GET_MAP_METRICS_SUCCESS";
export const GET_ALL_COMPANIES_SUCCESS = "GET_ALL_COMPANIES_SUCCESS";
export const GET_ALL_REPS_SUCCESS = "GET_ALL_REPS_SUCCESS";
export const GET_ALL_CUSTOMER_SUCCESS = "GET_ALL_CUSTOMER_SUCCESS";
export const GET_ALL_METRICS_ORDERS = "GET_ALL_METRICS_ORDERS";
export const GET_ALL_TOP_CUSTOMERS = "GET_ALL_TOP_CUSTOMERS"
export const GET_ALL_TOP_AREAS = "GET_ALL_TOP_AREAS"
export const GET_ALL_LEADS_COMPANY = "GET_ALL_LEADS_COMPANY"; 
export const GET_ORDER_INVOICE_SUCCESS = "GET_ORDER_INVOICE_SUCCESS";
export const ACCEPT_ORDER__SUCCESS = "ACCEPT_ORDER__SUCCESS";
export const GET_ORDER_INVOICE = "GET_ORDER_INVOICE";
export const DEFAULT_FAIL = "DEFAULT_FAIL";
export const GET_ALL_LEADS = "GET_ALL_LEADS";
export const GET_ALL_VISITATION = "GET_ALL_VISITATION";
export const GET_ALL_VISITATION_LOCATION = "GET_ALL_VISITATION_LOCATION";
export const GET_COMPANY_CHART = "GET_COMPANY_CHART";

const handleSort = (orders = []) => {
    //  console.log(orders, "order");
    const newdate = orders.sort((a, b) => {
        console.log(a?.order?.createdAt, "order");
        const aDate = new Date(b?.order?.createdAt);
        const bDate = new Date(a?.order?.createdAt);
        return aDate - bDate;
    });
    //console.log(newdate, "order1");
    return newdate;
};

export const authReducer = (state, action) => {
    // console.log(action.type);
    switch (action.type) {
        case AUTH_START:
            return {
                ...state,
                isLoading: true,
                isLoggingIn: true
            };

        case REGISTER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null,
                isLoading: false,
                isLoggedIn: false,
                isLoggingIn: false
            };

        case REGISTER_FAIL:
            return {
                ...state,

                error: action.payload,
                isLoading: false,
                isLoggedIn: false
            };
        case ADD_NEW_PRODUCT_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null,
                isLoading: false,
                isLoggedIn: true
            };

        case ADD_NEW_PRODUCT_FAIL:
            return {
                ...state,

                error: action.payload,
                isLoading: false
            };
        case PRODUCT_UPLOADCV_SUCCESS:
            return {
                ...state,
                uploadData: action.payload,
                error: null,
                isLoading: false,
                isLoggedIn: true
            };

        case PRODUCT_UPLOADCV_FAIL:
            return {
                ...state,

                error: action.payload,
                isLoading: false,
                isLoggedIn: false
            };
        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                updateProduct: action.payload,
                error: null,
                isLoading: false
            };

        case UPDATE_PRODUCT_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };

        case GET_PRODUCTCATEGORIES_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null,
                isLoading: false
            };

        case GET_PRODUCTCATEGORIES_FAIL:
            return {
                ...state,

                error: action.payload,
                isLoading: false,
                isLoggedIn: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null,
                isLoading: false,
                isLoggedIn: true
            };

        case LOGIN_FAIL:
            return {
                ...state,

                error: action.payload,
                isLoading: false,
                // isLoggedIn: false
            };

        case LOGOUT_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };

        
         


        case GET_PROFILE_SUCESS:
            return {
                ...state,
                user: action.payload,
                // message: action.payload,
                isLoading: false,
                isLoggedIn: false
            };
        case GET_ALL_LEADS:
            return {
                ...state,
                leads: action.payload,
                // message: action.payload,
                isLoading: false,
                isLoggedIn: false
            };

        case GET_PROFILE_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };

        case LOGOUT_SUCCESS:
            return {
                ...state,

                error: null,
                isLoading: false,
                isLoggedIn: false
            };

        case GET_ALL_PRODUCT_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };

        case GET_ALL_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload,
                // find_products:action.payload?.products,
                error: null,
                isLoading: false
            };
        case GET_ALL_MY_PRODUCT_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };

        case GET_ALL_MY_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload?.products,
                // find_products:action.payload?.products,
                error: null,
                isLoading: false
            };
        case SEARCH_PRODUCTS:
            return {
                ...state,
                error: null,
                isLoading: false,
                find_products: action.payload
            };
        case GET_ALL_SUPPLIERS_SUCCESS:
            return {
                ...state,
                error: null,
                isLoading: false,
                suppilers: action.payload
            };
        case GET_ALL_SUPPLIERS_FAIL:
            return {
                ...state,

                error: action.payload,
                isLoading: false
            };
        case GET_ALL_SUPPLIERS_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case GET_ALL_SUPPLIERS_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload.products,
                suppilersdetails: action.payload.supplier,
                error: action.payload,
                isLoading: false
            };
        case GET_ALL_SUPPLIERS_PRODUCT_FAIL:
            return {
                ...state,

                error: action.payload,
                isLoading: false
            };
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload,
                find_suppilers: action.payload,
                isLoading: false
            };
        case GET_PRODUCT_FAIL:
            return {
                ...state,

                error: action.payload,

                isLoading: false
            };
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                deletemessage: action.payload,
                isLoading: false
            };
        case DELETE_PRODUCT_FAIL:
            return {
                ...state,

                error: action.payload,

                isLoading: false
            };
        case GET_ORDER_SUCCESS:
            return {
                ...state,
                orders: handleSort(action.payload.order),
                // ordersagain: handleSort(action.payload.orders),
                isLoading: false
            };
        case GET_OREDR_FAIL:
            return {
                ...state,
                error: action.payload,

                isLoading: false
            };
        case GET_INVOICE_SUCCESS:
            return {
                ...state,
                invoice: action.payload,
                isLoading: false
            };
        case GET_INVOICE_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case SEARCH_SUPPILERS:
            return {
                ...state,
                error: null,
                isLoading: false,
                find_suppilers: action.payload
            };
        case GET_PACKAGES_SUCCESS:
            return {
                ...state,
                package: action.payload,
                isLoading: false
            };
        case GET_PACKAGES_FAIL:
            return {
                ...state,

                error: action.payload,
                isLoading: false
            };
        case GET_DELIVERYCHANNELS_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case GET_DELIVERYCHANNELS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case GET_CART_SUCCESS:
            return {
                ...state,
                cartdetails: action.payload,
                cart: action.payload?.cart?.cartItems,
                cartlength: action.payload?.cart?.cartItems?.length,
                cartid: action.payload?.cart?.id,
                isLoading: false
            };
        case GET_DASHBOARD_METRICS_SUCCESS:
            return {
                ...state,
                dashboardMertics: action.payload,

                isLoading: false
            };
        case GET_MAP_METRICS_SUCCESS:
            return {
                ...state,
                MapMertics: action.payload,
                isLoading: false
            };
        case GET_CART_FAIL:
            return {
                ...state,

                error: action.payload,
                isLoading: false
            };
        case GET_ORDER_INVOICE_SUCCESS:
            return {
                ...state,
                orderInvoice: action.payload,
                error: action.payload,
                isLoading: false
            };
        case ACCEPT_ORDER__SUCCESS:
            return {
                ...state,
                order: action.payload,
                error: action.payload,
                isLoading: false
            };
        case GET_ORDER_INVOICE:
            return {
                ...state,
                orderinvoice: action.payload,
                error: action.payload,
                isLoading: false
            };
        case GET_ALL_COMPANIES_SUCCESS:
            return {
                ...state,
                allCompanies: action.payload,
                error: action.payload,
                isLoading: false
            };
        case GET_ALL_REPS_SUCCESS:
            return {
                ...state,
                allReps: action.payload,
                error: action.payload,
                isLoading: false
            };
        case GET_ALL_CUSTOMER_SUCCESS:
            return {
                ...state,
                allCustomer: action.payload,
                error: action.payload,
                isLoading: false
            };
        case GET_COMPANY_CHART:
            return {
                ...state,
                companyChart: action.payload,
                error: action.payload,
                isLoading: false
            };


        case GET_ALL_METRICS_ORDERS:
            return {
                ...state,
                allMetricsOrder: action.payload,
                error: "",                isLoading: false
            };

              case GET_ALL_LEADS_COMPANY:
            return {
                ...state,
                allLeadsCompany: action.payload,
                error: "",
                                isLoading: false
            };
            
            case GET_ALL_VISITATION:
          return {
              ...state,
              allVisitation: action.payload,
              error: "",
              isLoading: false
          };
            case GET_ALL_VISITATION_LOCATION:
          return {
              ...state,
              allVisitationLocation: action.payload,
              error: "",
              isLoading: false
          };
            case GET_ALL_TOP_CUSTOMERS:
                 return {
                ...state,
                allTopCustomers: action.payload,
                error: action.payload,
                isLoading: false
            };
            case GET_ALL_TOP_AREAS:
                 return {
                ...state,
                allTopArea: action.payload,
                error: action.payload,
                isLoading: false
            };

      
            
        case DEFAULT_FAIL:
            return {
                ...state,
                check: action.payload,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
};
