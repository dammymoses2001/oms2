/* eslint-disable sort-keys */
import { request } from "../utils";
import moment from 'moment';

export const registerUser = async (value) => {
    try {
        const res = await request.post("/auth/sales-rep/create", value);
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        // console.log(err, "error");
        throw new Error(err);
    }
};

export const loginUser = async (value) => {
    try {
        const res = await request.post("/auth/login", value);
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};

export const getAccountTypes = async () => {
    try {
        const res = await request.get("auth/account-types");
        return res?.data?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};

export const verifyUser = async (user_id) => {
    try {
        const url = `/auth/verify-account/${user_id}`;
        const res = await request.post(url);
        return res?.data?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};

export const getCurrentUser = async () => {
    try {
        const res = await request.get("/auth/me");
        // console.log(res, "product user");
        return res?.data?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};
export const getAllProduct = async () => {
    try {
        const res = await request.get("/product/all");
        // console.log(res, "product all");
        return res?.data?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};

// kkk
export const getAllUserProduct = async () => {
    try {
        const res = await request.get(`/supplier/product`);
        // console.log(res, "product all");
        return res?.data?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};





export const getAllMetricsOrders = async (startDate, endDate) => {
    try {
        const res = await request.get(`/metrics/orders-range?startDate=${moment(startDate).valueOf()/1000}&endDate=${moment(endDate).valueOf()/1000}`);
        // console.log(res, "product all");
        return res?.data?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};



// export const getAllMetricsOrdersRange = async () => {
//     try {
//         const res = await request.get(`/metrics/orders-range?startDate=${startDate}&endDate=${endDate}`);
//         // console.log(res, "product all");
//         return res?.data?.data;
//     } catch (error) {
//         const err = error?.response?.data?.message || error?.message;
//         throw new Error(err);
//     }
// };




export const getSuppliers = async () => {
    try {
        const res = await request.get("/supplier/all");
        // console.log(res, "product all");
        return res?.data?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};
export const getSupplierProducts = async (id) => {
    try {
        const res = await request.get(`/supplier/${id}/products`);
        // console.log(res, "getSupplierProducts");
        return res?.data?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};

export const getProduct = async (id) => {
    try {
        const res = await request.get(`/product/${id}`);
        // console.log(res, "product all");
        return res?.data?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};

export const getOrder = async () => {
    try {
        const res = await request.get(`/supplier/order/all`);
        return res?.data?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};

export const getInvoice = async (orderid) => {
    try {
        const res = await request.get(`/supplier/order/${orderid}/set-status`);

        return res?.data?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};

export const verifyAccount = async (token) => {
    try {
        const res = await request.post(`/auth/verify-account/${token}`);
        // console.log(res, "product all");
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};

export const addNewproductFun = async (value) => {
    try {
        const res = await request.post("/supplier/product", value);
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        console.log(err, "error");
        throw new Error(err);
    }
};

export const getCategories = async () => {
    try {
        const res = await request.get("supplier/product/categories");
        // console.log(res, "product all");
        return res?.data?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};
export const deleteProduct = async (productid) => {
    try {
        const res = await request.delete(`supplier/product/${productid}`);
        console.log(res?.data, "product all");
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};

export const uploadProductViaCv = async (productcsv) => {
    try {
        const res = await request.post(`supplier/product`, productcsv);
        //  console.log(res?.data, "product all");
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};

export const updateProduct = async (id, data) => {
    try {
        const res = await request.patch(`supplier/product/${id}`, data);
        //  console.log(res?.data, "product all");
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};

export const DashboardMetrics = async () => {
    try {
        const res = await request.get(`supplier/metrics/dashboard`);
        //  console.log(res?.data, "product all");
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};
export const MapMetrics = async () => {
    try {
        const res = await request.get(`supplier/metrics/map-metrics`);
        //  console.log(res?.data, "product all");
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};
export const OrderInvoice = async (orderId) => {
    try {
        const res = await request.get(
            `supplier/order/${orderId}/order-invoice`
        );
        //  console.log(res?.data, "product all");
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};
export const AcceptOrder = async (orderId) => {
    try {
        const res = await request.post(`supplier/order/${orderId}/approve`);
        //  console.log(res?.data, "product all");
        //upplier/order/:orderId/accept
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};
export const RejectOrder = async (orderId, reason) => {
    try {
        const res = await request.post(
            `supplier/order/${orderId}/decline`,
            reason
        );
        // supplier/order/:orderId/reject-order
        //  console.log(res?.data, "product all");
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};
export const UpdateSupplierProfile = async (data) => {
    try {
        const res = await request.patch(`supplier/profile`, data);
        // supplier/order/:orderId/reject-order
        //  console.log(res?.data, "product all");
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};
export const getOrderInvoice = async (orderId) => {
    try {
        const res = await request.get(`upplier/order/${orderId}/order-invoice`);
        // supplier/order/:orderId/reject-order
        //  console.log(res?.data, "product all");
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};
export const forgetPassword = async (value) => {
    try {
        const res = await request.post(`/auth/forgot-password`, value);
        // supplier/order/:orderId/reject-order
        //  console.log(res?.data, "product all");
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};
export const resetPassword = async (value) => {
    try {
        const res = await request.post(`/auth/reset-password`, value);
        // supplier/order/:orderId/reject-order
        //  console.log(res?.data, "product all");
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};
export const getAllCompanies = async (value) => {
    try {
        const res = await request.get(`/company/all`);
        // supplier/order/:orderId/reject-order
        //  console.log(res?.data, "product all");
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};

export const getAllRepresentatives = async (value) => {
    try {
        const res = await request.get(`/company/sales-rep`);
        // supplier/order/:orderId/reject-order
        //  console.log(res?.data, "product all");
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};

export const addRepresentatives = async (value) => {
    try {
        const res = await request.post(`/auth/sales-rep/create`, value);
        // supplier/order/:orderId/reject-order
        //  console.log(res?.data, "product all");
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};

export const getAllCustomer = async (value) => {
    try {
        const res = await request.get(`/customer/all`);
        // supplier/order/:orderId/reject-order
        //  console.log(res?.data, "product all");
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};

export const getMetricsOrders = async (value) => {
    try {
        const res = await request.get(`/metrics/orders`);
        // supplier/order/:orderId/reject-order
        //  console.log(res?.data, "product all");
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};

export const addCustomer = async (value) => {
    try {
        const res = await request.post(`/customer/create`, value);
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};

export const getVisitationSchedules = async (value) => {
    try {
        const res = await request.get(
            `/visitation?startDate=${value.startDate}&endDate=${value.endDate}`
        );
        return res?.data;
    } catch (error) {
        const err = error?.response?.data?.message || error?.message;
        throw new Error(err);
    }
};
