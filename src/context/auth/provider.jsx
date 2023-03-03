/* eslint-disable sort-imports */
/* eslint-disable sort-keys */
import React, {
    createContext,
    useCallback,
    useEffect,
    useReducer,
    useState
} from "react";
import toast from "react-hot-toast";
import {
    AUTH_START,
    GET_ALL_PRODUCT_FAIL,
    GET_ALL_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,
    GET_PRODUCT_SUCCESS,
    // GET_ALL_MY_PRODUCT_FAIL,
    // GET_ALL_MY_PRODUCT_SUCCESS,
    GET_ALL_SUPPLIERS_FAIL,
    // GET_ALL_SUPPLIERS_PRODUCT_FAIL,
    // GET_ALL_SUPPLIERS_PRODUCT_SUCCESS,
    // GET_ALL_SUPPLIERS_PRODUCT_REQUEST,
    GET_ALL_SUPPLIERS_SUCCESS,
    GET_ALL_METRICS_ORDERS,
    GET_PROFILE_SUCESS,
    GET_PROFILE_FAIL,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    GET_PRODUCTCATEGORIES_SUCCESS,
    GET_PRODUCTCATEGORIES_FAIL,
    GET_ORDER_SUCCESS,
    GET_OREDR_FAIL,
    GET_INVOICE_FAIL,
    GET_INVOICE_SUCCESS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_SUCCESS,
    PRODUCT_UPLOADCV_FAIL,
    PRODUCT_UPLOADCV_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_SUCCESS,
    // SEARCH_SUPPILERS,
    // SEARCH_PRODUCTS,
    authReducer,
    GET_DASHBOARD_METRICS_SUCCESS,
    GET_MAP_METRICS_SUCCESS,
    DEFAULT_FAIL,
    // GET_ORDER_INVOICE_SUCCESS,
    GET_ORDER_INVOICE,
    GET_ALL_COMPANIES_SUCCESS,
    GET_ALL_REPS_SUCCESS,
    GET_ALL_CUSTOMER_SUCCESS,
    GET_VISITATIONSCHEDULES_SUCCESS,
    GET_VISITATIONSCHEDULES_FAIL
    // GET_PACKAGES_FAIL,
    // GET_PACKAGES_SUCCESS,
    // GET_CART_SUCCESS,
    // GET_CART_FAIL,
    // GET_DELIVERYCHANNELS_FAIL,
    // GET_DELIVERYCHANNELS_SUCCESS
} from "./reducer";
import { withRouter, MainLoading } from "../../components";
import {
    // getAccountTypes,
    getAllProduct,
    getCurrentUser,
    getSuppliers,
    loginUser,
    registerUser,
    //getSupplierProducts,
    getProduct,
    getAllUserProduct,
    verifyAccount,
    addNewproductFun,
    getCategories,
    getOrder,
    getInvoice,
    deleteProduct,
    uploadProductViaCv,
    updateProduct,
    DashboardMetrics,
    MapMetrics,
    // OrderInvoice,
    AcceptOrder,
    RejectOrder,
    UpdateSupplierProfile,
    getOrderInvoice,
    forgetPassword,
    getAllCompanies,
    restPassword,
    resetPassword,
    addRepresentatives,
    addCustomer,
    getAllRepresentatives,
    getAllCustomer,
    getVisitationSchedules,
    getAllMetricsOrders
    // getPackages,
    // subscription,
    // completeSubscription,
    // getUserCartData,
    // addToCart,
    // removeFromCart,
    // removeAllCart,
    // checkOut,
    // addDeliveryChannel,
    // getDeliveryChannel
    //
} from "../../services";
import { getAuthToken, setAuthToken } from "../../utils";

export const AuthContext = createContext();

export const AuthProvider = withRouter(({ children, navigate }) => {
    const [loadingApp, setLoadingApp] = useState(true);
    const [state, dispatch] = useReducer(authReducer, {
        data: null,
        error: null,
        isLoading: false,
        isLoggedIn: false,
        isLoggingIn: false,
        allCompanies: [],
        allCustomer: []
    });

    const [supplier, setSuppiler] = useReducer(authReducer, {
        error: null,
        isLoading: false,
        suppilers: []
    });
    // const [searchSupplier, setSearchSupplier] = useReducer(authReducer, {
    //     error: null,
    //     isLoading: false,
    //     find_suppilers: []
    // });
    // const [supplierProduct, setSupplierProduct] = useReducer(authReducer, {
    //     error: null,
    //     isLoading: true,
    //     products: [],
    //     supplier: {}
    // });

    const [getProductList, setProductList] = useReducer(authReducer, {
        error: null,
        isLoading: true,
        products: []
    });
    const [getUserProductList, setUserProductList] = useReducer(authReducer, {
        error: null,
        isLoading: true,
        userProducts: []
    });
    const [getProfileData, setGetProfileData] = useReducer(authReducer, {
        error: null,
        isLoading: true,
        user: []
    });

    const [getSelectedProduct, setSelectedGetProduct] = useReducer(
        authReducer,
        {
            error: null,
            isLoading: true,
            product: []
        }
    );

    const [getVisitSchedules, setVisitSchedules] = useReducer(authReducer, {
        error: null,
        isLoading: true,
        product: []
    });



    // const [getPackagesData, setGetPackagesData] = useReducer(authReducer, {
    //     error: null,
    //     isLoading: true,
    //     packages: []
    // });

    // const [getCart, setGetCart] = useReducer(authReducer, {
    //     error: null,
    //     isLoading: true,
    //     cart: [],
    //     cartlength: []
    // });
    // const [getDeliveryChannelData, setGetDeliveryChannelData] = useReducer(
    //     authReducer,
    //     {
    //         error: null,
    //         isLoading: true,
    //         data: []
    //     }
    // );

    const [getProductCat, setgetProductCat] = useReducer(authReducer, {
        error: null,
        isLoading: true,
        data: []
    });
    // "email": "someee66666666@gmail.com",
    // "firstName": "Olawale",
    // "lastName": "Omosekeji",
    // "password": "password",
    // "passwordConfirm": "password",
    // "supplierName": "GSK Pharmacy"

    const register = async (value) => {
        try {
            dispatch({ type: AUTH_START });

            const data = await registerUser(value);
            dispatch({
                payload: data,
                type: REGISTER_SUCCESS
            });

            // navigate("/");
            console.log(data);
            toast.success("Registration successful");
            return navigate("/verify-account");

            // setAuthToken(data?.token);
        } catch (error) {
            const errorMessage =
                error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: REGISTER_FAIL
            });
            toast.error(errorMessage);
        }
    };

    const login = async (values) => {
        try {
            dispatch({ type: AUTH_START });
            const data = await loginUser(values);
            console.log(data, values, "logindetails");

            if (data) {
                if (data?.data?.user?.userRole !== "company_admin") {
                    toast.error(
                        "You are not authorize with this account, create a new supplier's account"
                    );
                    return logout();
                }
                if (data?.data?.user?.hasSubscribed) {
                    return navigate("/verify-account");
                }

                // console.log(data?.user)
                setAuthToken(data?.data?.token);
                dispatch({
                    payload: data.data.user,
                    type: LOGIN_SUCCESS
                });

                toast.success("Login successful");
                return navigate("/");
            }
        } catch (error) {
            const errorMessage =
                error?.response?.data?.message || error.message;

            dispatch({
                payload: error,
                type: LOGIN_FAIL
            });
            if (
                errorMessage ===
                "You have to verify your account before you can login. Check your email for verification code."
            ) {
                return navigate("/verify-account");
            }

            // if (errorMessage === "Incorrect email and password combination") {
            //     toast.error(errorMessage);
            //     return navigate("/login");
            // }
            toast.error(errorMessage);
            // return navigate("/verify-account");
        }
    };

    const logout = async () => {
        try {
            dispatch({ type: AUTH_START });
            localStorage.clear();
            sessionStorage.clear();
            navigate("/login");

            dispatch({
                type: LOGOUT_SUCCESS
            });
        } catch (error) {
            dispatch({
                payload: error.message,
                type: LOGOUT_FAIL
            });
        }
    };

    const getProfile = useCallback(async () => {
        try {
            setGetProfileData({ type: AUTH_START });
            const data = await getCurrentUser();
            // console.log(data, "getProfile");
            setGetProfileData({
                payload: data?.user,
                type: GET_PROFILE_SUCESS
            });

            dispatch({
                payload: data,
                type: LOGIN_SUCCESS
            });
            // setGetProfileData(data?.user);
            //console.log(data,"getProfile");
            return data;
        } catch (error) {
            let message = "";
            if (error?.response?.data?.statusCode === 401) {
                message = "Session Expired or Invalid!";
            }
            const errorMessage =
                message || error?.response?.data?.message || error.message;
            setGetProfileData({
                payload: errorMessage,
                type: GET_PROFILE_FAIL
            });
            dispatch({
                payload: errorMessage,
                type: LOGIN_FAIL
            });
        }
    }, []);

    const getSuppliersFunc = useCallback(async () => {
        try {
            setSuppiler({ type: AUTH_START });
            const data = await getSuppliers();

            setSuppiler({
                payload: data?.suppliers,
                type: GET_ALL_SUPPLIERS_SUCCESS
            });
            // console.log(data?.suppliers, "data");
            return data;
        } catch (error) {
            let message = "";
            if (error?.response?.data?.statusCode === 401) {
                message = "Session Expired or Invalid!";
            }
            const errorMessage =
                message || error?.response?.data?.message || error.message;
            setSuppiler({
                payload: errorMessage,
                type: GET_ALL_SUPPLIERS_FAIL
            });
        }
    }, []);
    //
    const getAllUserProductFunc = useCallback(async () => {
        try {
            setProductList({ type: AUTH_START });
            const data = await getAllUserProduct();
            // setProductList(data);
            // console.log(data, "getAllProductFunc");
            setUserProductList({
                payload: data,
                type: GET_ALL_PRODUCT_SUCCESS
            });
            return data;
        } catch (error) {
            let message = "";
            if (error?.response?.data?.statusCode === 401) {
                message = "Session Expired or Invalid!";
            }
            const errorMessage =
                message || error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: DEFAULT_FAIL
            });
            dispatch({
                payload: errorMessage,
                type: GET_ALL_PRODUCT_FAIL
            });
        }
    }, []);

    const getAllUserOrderFunc = useCallback(async () => {
        try {
            dispatch({ type: AUTH_START });
            const data = await getOrder();
            // setProductList(data);
            // const newdate=data?.order.sort((a, b) => {
            //     return b?.createdAt - a?.createdAt;
            // });
            console.log(data, "getAllUserOrderFunc");
            dispatch({
                payload: data,
                type: GET_ORDER_SUCCESS
            });
            return data;
        } catch (error) {
            let message = "";
            if (error?.response?.data?.statusCode === 401) {
                message = "Session Expired or Invalid!";
            }
            const errorMessage =
                message || error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: AUTH_START
            });
            dispatch({
                payload: errorMessage,
                type: GET_OREDR_FAIL
            });
        }
    }, []);

    const getInvoiceFunc = useCallback(async (id) => {
        // console.log(id, "getInvoiceFunc2");
        try {
            dispatch({ type: AUTH_START });
            const data = await getInvoice(id);
            // setProductList(data);
            // console.log(data,id, "getInvoiceFunc");
            dispatch({
                payload: data?.order,
                type: GET_INVOICE_SUCCESS
            });
            return data;
        } catch (error) {
            let message = "";
            if (error?.response?.data?.statusCode === 401) {
                message = "Session Expired or Invalid!";
            }
            const errorMessage =
                message || error?.response?.data?.message || error.message;

            dispatch({
                payload: errorMessage,
                type: GET_INVOICE_FAIL
            });
        }
    }, []);
    //
    const getAllProductFunc = useCallback(async () => {
        try {
            setProductList({ type: AUTH_START });
            const data = await getAllProduct();
            // setProductList(data);
            // console.log(data,"getAllProductFunc");
            setProductList({
                payload: data,
                type: GET_ALL_PRODUCT_SUCCESS
            });
            return data;
        } catch (error) {
            let message = "";
            if (error?.response?.data?.statusCode === 401) {
                message = "Session Expired or Invalid!";
            }
            const errorMessage =
                message || error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: AUTH_START
            });
            dispatch({
                payload: errorMessage,
                type: GET_ALL_PRODUCT_FAIL
            });
        }
    }, []);

    const deleteProductFunc = async (productid) => {
        try {
            dispatch({ type: AUTH_START });
            const data = await deleteProduct(productid);
            // console.log(data,'getUserProductList2')
            dispatch({
                payload: data?.message,
                type: DELETE_PRODUCT_SUCCESS
            });

            toast.success(data?.message);
            setTimeout(() => {
                dispatch({
                    payload: null,
                    type: DELETE_PRODUCT_SUCCESS
                });
            }, 1000);
        } catch (error) {
            const errorMessage =
                error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: DELETE_PRODUCT_FAIL
            });
            toast.error(errorMessage);
        }
    };

    const ForgetPassword = async (value) => {
        try {
            dispatch({ type: AUTH_START });
            const data = await forgetPassword(value);
            // // console.log(data,'getUserProductList2')
            dispatch({
                payload: data?.message,
                type: DEFAULT_FAIL
            });

            toast.success(data?.message);
            navigate("/confirm-new-password");
        } catch (error) {
            const errorMessage =
                error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: DELETE_PRODUCT_FAIL
            });
            toast.error(errorMessage);
        }
    };
    const ResetPassword = async (value) => {
        try {
            dispatch({ type: AUTH_START });
            const data = await resetPassword(value);
            // // console.log(data,'getUserProductList2')
            dispatch({
                payload: data?.message,
                type: DEFAULT_FAIL
            });

            toast.success(data?.message);
            navigate("/login");
        } catch (error) {
            const errorMessage =
                error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: DELETE_PRODUCT_FAIL
            });
            toast.error(errorMessage);
        }
    };

    const UploadProductViaCVFun = async (file) => {
        try {
            dispatch({ type: AUTH_START });
            const data = await uploadProductViaCv(file);
            //console.log(data,'getUserProductList2')
            dispatch({
                payload: data?.message,
                type: PRODUCT_UPLOADCV_SUCCESS
            });

            toast.success(data?.message);
            // setTimeout(() => {
            //     window.location.reload()
            // }, 1000);
        } catch (error) {
            const errorMessage =
                error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: PRODUCT_UPLOADCV_FAIL
            });
            toast.error(errorMessage);
        }
    };

    const UpdateProductFunc = async (id, productData) => {
        try {
            dispatch({ type: AUTH_START });
            const data = await updateProduct(id, productData);
            //  console.log(data,'UpdateProductFunc')
            dispatch({
                payload: data?.message,
                type: UPDATE_PRODUCT_SUCCESS
            });

            toast.success(data?.message);
            dispatch({
                payload: null,
                type: UPDATE_PRODUCT_SUCCESS
            });
            // setTimeout(() => {
            //     window.location.reload();
            // }, 1000);
        } catch (error) {
            const errorMessage =
                error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: UPDATE_PRODUCT_FAIL
            });
            toast.error(errorMessage);
        }
    };

    //
    const getCategoriesFunc = useCallback(async () => {
        try {
            setgetProductCat({ type: AUTH_START });
            const data = await getCategories();
            // setProductList(data);
            // console.log(data, "getCategoriesFunc");
            setgetProductCat({
                payload: data?.categories,
                type: GET_PRODUCTCATEGORIES_SUCCESS
            });
            return data;
        } catch (error) {
            let message = "";
            if (error?.response?.data?.statusCode === 401) {
                message = "Session Expired or Invalid!";
            }
            const errorMessage =
                message || error?.response?.data?.message || error.message;
            setgetProductCat({
                payload: errorMessage,
                type: GET_PRODUCTCATEGORIES_FAIL
            });
        }
    }, []);

    const addNewProoduct = async (value) => {
        try {
            dispatch({ type: AUTH_START });

            const data = await addNewproductFun(value);

            // setAuthToken(data?.token);
            toast.success("Product added successful");
            dispatch({
                payload: true,
                type: DEFAULT_FAIL
            });
            setTimeout(() => {
                dispatch({
                    payload: false,
                    type: DEFAULT_FAIL
                });
            }, 3000);

            navigate(`product/all`);
            return data;
        } catch (error) {
            const errorMessage =
                error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: DEFAULT_FAIL
            });
            toast.error(errorMessage);
        }
    };

    const getProductFunc = useCallback(
        async (id) => {
            // console.log(id,"igettheid");

            try {
                setSelectedGetProduct({ type: AUTH_START });
                const data = await getProduct(id);
                setSelectedGetProduct({
                    payload: data?.product,
                    type: GET_PRODUCT_SUCCESS
                });
                //toast.success("Login successful");
                // navigate("/");
            } catch (error) {
                navigate("/");
                const errorMessage =
                    error?.response?.data?.message || error.message;
                setSelectedGetProduct({
                    payload: errorMessage,
                    type: GET_PRODUCT_FAIL
                });

                //toast.error("Page not found");
            }
        },
        [navigate]
    );

    const DashboardMetricsFunc = useCallback(async (id) => {
        // console.log(id,"igettheid");

        try {
            dispatch({ type: AUTH_START });
            const data = await DashboardMetrics();
            dispatch({
                payload: data?.data,
                type: GET_DASHBOARD_METRICS_SUCCESS
            });
            //toast.success("Login successful");
            // navigate("/");
        } catch (error) {
            // navigate("/");
            const errorMessage =
                error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: LOGIN_FAIL
            });

            //toast.error("Page not found");
        }
    }, []);
    const MapMetricsFunc = useCallback(async (id) => {
        // console.log(id,"igettheid");

        try {
            dispatch({ type: AUTH_START });
            const data = await MapMetrics();
            dispatch({
                payload: data?.data,
                type: GET_MAP_METRICS_SUCCESS
            });
            //toast.success("Login successful");
            // navigate("/");
        } catch (error) {
            // navigate("/");
            const errorMessage =
                error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: DEFAULT_FAIL
            });

            //toast.error("Page not found");
        }
    }, []);
    const GetAllCompanies = useCallback(async (id) => {
        // console.log(id,"igettheid");

        try {
            dispatch({ type: AUTH_START });
            const data = await getAllCompanies();
            dispatch({
                payload: data?.data,
                type: GET_ALL_COMPANIES_SUCCESS
            });
            //toast.success("Login successful");
            // navigate("/");
        } catch (error) {
            // navigate("/");
            const errorMessage =
                error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: DEFAULT_FAIL
            });

            //toast.error("Page not found");
        }
    }, []);

    const AcceptOrderFunc = async (orderId) => {
        // console.log(orderId,'orderId')
        try {
            dispatch({ type: AUTH_START });
            if (orderId) {
                const data = await AcceptOrder(orderId);

                toast.success(data.message);
                // console.log(data,'order')
                dispatch({
                    payload: data,
                    type: DEFAULT_FAIL
                });

                // navigate(`/invoice/${data?.data?.order?._id}`)
            }
        } catch (error) {
            const errorMessage =
                error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: DEFAULT_FAIL
            });
            toast.error(errorMessage);
        }
    };

    const RejectOrderFunc = async (orderId, reason) => {
        try {
            dispatch({ type: AUTH_START });
            const data = await RejectOrder(orderId, reason);

            toast.success(data.message);
            dispatch({
                payload: true,
                type: DEFAULT_FAIL
            });
            setTimeout(() => {
                dispatch({
                    payload: false,
                    type: DEFAULT_FAIL
                });
            }, 3000);
        } catch (error) {
            const errorMessage =
                error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: DEFAULT_FAIL
            });
            toast.error(errorMessage);
        }
    };
    const UpdateSupplierProfileFunc = async (value) => {
        try {
            dispatch({ type: AUTH_START });
            const data = await UpdateSupplierProfile(value);

            toast.success(data.message);
            // dispatch({
            //     payload: data.user,
            //     type: LOGIN_SUCCESS
            // });
        } catch (error) {
            const errorMessage =
                error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: DEFAULT_FAIL
            });
            toast.error(errorMessage);
        }
    };
    const getOrderInvoiceFunc = async (orderId) => {
        try {
            dispatch({ type: AUTH_START });
            const data = await getOrderInvoice(orderId);
            // console.log(data);
            // toast.success(data.message);
            dispatch({
                payload: data,
                type: GET_ORDER_INVOICE
            });
        } catch (error) {
            const errorMessage =
                error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: DEFAULT_FAIL
            });
            toast.error(errorMessage);
        }
    };

    const GetAllRepresentatives = useCallback(async (id) => {
        // console.log(id,"igettheid");

        try {
            dispatch({ type: AUTH_START });
            const data = await getAllRepresentatives();
            dispatch({
                payload: data?.data,
                type: GET_ALL_REPS_SUCCESS
            });
            //toast.success("Login successful");
            // navigate("/");
        } catch (error) {
            // navigate("/");
            const errorMessage =
                error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: DEFAULT_FAIL
            });
        }
    }, []);
    const GetAllCustomer = useCallback(async (id) => {
        // console.log(id,"igettheid");

        try {
            dispatch({ type: AUTH_START });
            const data = await getAllCustomer();
            dispatch({
                payload: data?.data,
                type: GET_ALL_CUSTOMER_SUCCESS
            });
            //toast.success("Login successful");
            // navigate("/");
        } catch (error) {
            // navigate("/");
            const errorMessage =
                error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: DEFAULT_FAIL
            });
        }
    }, []);

     const GetAllMetricsOrders = useCallback(async (id) => {
        // console.log(id,"igettheid");

        try {
            dispatch({ type: AUTH_START });
            const data = await getAllMetricsOrders();
            console.log(data,'GetAllMetricsOrders2')
            dispatch({
                payload: data,
                type: GET_ALL_METRICS_ORDERS
            });
            //toast.success("Login successful");
            // navigate("/");
        } catch (error) {
            // navigate("/");
            const errorMessage =
                error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: DEFAULT_FAIL
            });
        }
    }, []);

    const AddRepresentatives = async (values) => {
        try {
            dispatch({ type: AUTH_START });
            const data = await addRepresentatives(values);
            // console.log(data);
            toast.success(data.message, {
                duration: 6000
            });
            GetAllRepresentatives();
            dispatch({
                payload: true,
                type: DEFAULT_FAIL
            });
            setTimeout(() => {
                dispatch({
                    payload: false,
                    type: DEFAULT_FAIL
                });
            }, 3000);
        } catch (error) {
            const errorMessage =
                error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: DEFAULT_FAIL
            });
            toast.error(errorMessage);
        }
    };

    const AddCustomer = async (values) => {
        try {
            dispatch({ type: AUTH_START });
            const data = await addCustomer(values);
            // console.log(data);
            toast.success(data.message, {
                duration: 6000
            });
            GetAllCustomer();
            dispatch({
                payload: true,
                type: DEFAULT_FAIL
            });
            setTimeout(() => {
                dispatch({
                    payload: false,
                    type: DEFAULT_FAIL
                });
            }, 3000);
        } catch (error) {
            const errorMessage =
                error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: DEFAULT_FAIL
            });
            toast.error(errorMessage);
        }
    };

    //
    const VerifyAccountFunc = async (token) => {
        try {
            dispatch({ type: AUTH_START });
            const data = await verifyAccount(token);
            // console.log(data,"VerifyAccountFunc");
            // setAuthToken(data.token);
            dispatch({
                payload: "",
                type: DEFAULT_FAIL
            });
            toast.success("Account Verify, Login...");
            setTimeout(() => {
                return navigate("/login");
            }, 1000);

            // if(data?.data?.user?.isVerified === false) return navigate("/verify-account");
            // if(data?.data?.user?.hasSubscribed  === false)return navigate("/choose-account");
            //data?.user?.hasSubscribed ?navigate("/"):navigate("/choose-account");

            // if(data?.user?.hasSubscribed){
            //     navigate("/");
            // }
        } catch (error) {
            const errorMessage =
                error?.response?.data?.message || error.message;
            dispatch({
                payload: errorMessage,
                type: LOGIN_FAIL
            });
            toast.error(errorMessage);
        }
    };

    const getVisitationSchedulesFunc = useCallback(
        async (dates) => {
            // console.log(id,"igettheid");

            try {
                setVisitSchedules({ type: AUTH_START });
                const data = await getVisitationSchedules(dates);
                console.log(data);
                setVisitSchedules({
                    payload: data?.data,
                    type: GET_VISITATIONSCHEDULES_SUCCESS
                });
                //toast.success("Login successful");
                // navigate("/");
            } catch (error) {
                navigate("/");
                const errorMessage =
                    error?.response?.data?.message || error.message;
                setVisitSchedules({
                    payload: errorMessage,
                    type: GET_VISITATIONSCHEDULES_FAIL
                });

                //toast.error("Page not found");
            }
        },
        [navigate]
    );

    useEffect(() => {
        const loadApp = async () => {
            setLoadingApp(true);

            if (getAuthToken()) {
                // await getAllProductFunc();
                await getProfile();
                // await getSuppliersFunc();
                // await getAllUserProductFunc();
                await getCategoriesFunc();
                // await DashboardMetricsFunc();
                // await getAllUserOrderFunc();

                await MapMetricsFunc();
            }
            setLoadingApp(false);
        };
        loadApp();
    }, [
        // getAllProductFunc,
        // getSuppliersFunc,
        getProfile,
        // DashboardMetricsFunc,
        getCategoriesFunc,
        MapMetricsFunc
        // getAllUserProductFunc,
    ]);

    if (loadingApp) {
        return <MainLoading fullscreen />;
    }

    return (
        <AuthContext.Provider
            value={{
                getAllUserProductFunc,
                getAllProductFunc,
                getProfile,
                getSuppliersFunc,
                getProductFunc,
                getAllUserOrderFunc,
                getInvoiceFunc,
                // supplierProductFunc,
                // handleSearchSupplier,
                // handleSearchProduct,

                getSelectedProduct,
                VerifyAccountFunc,

                login,
                logout,
                register,
                addNewProoduct,
                deleteProductFunc,
                UploadProductViaCVFun,
                UpdateProductFunc,
                DashboardMetricsFunc,
                AcceptOrderFunc,
                RejectOrderFunc,
                UpdateSupplierProfileFunc,
                getOrderInvoiceFunc,
                getUserProductList,
                getProfileData,
                supplier,
                // searchSupplier,
                getProductList,
                state,
                // supplierProduct,

                // getPackagesData,
                // getCart,

                // getDeliveryChannelData,
                getProductCat,
                getCategoriesFunc,
                ForgetPassword,
                ResetPassword,
                GetAllCompanies,
                AddRepresentatives,
                GetAllRepresentatives,
                GetAllCustomer,
                AddCustomer,
                getVisitationSchedulesFunc,
                GetAllMetricsOrders
            }}
        >
            {children}
        </AuthContext.Provider>
    );
});
