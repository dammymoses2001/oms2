import { PageNotFound } from "../components";
import {
    ForgotPassword,
    Home,
    Login,
    OrderShowAll,
    SalesReport,
    ProductDetails,
    ProductLayout,
    Invoice,
    AddProduct,
    Register,
    SelectAccountType,
    VerifyAccount,
    VerifyPayment,
    ProductShowAll,
    Customer,
    Myprofile,
    Companyprofile,
    HelpCenter,
    ConfirmNewPassword,
    AdminConsole,
    ScheduleReports,
    VisitTargets,
    Terms
    
} from "../pages";
import IndividualActivityReport from "../pages/Schedule/ScheduleReports/IndividualActivityReport";

export const routeList = [
    {
        children: [
            {
                component: Home,
                exact: true,
                name: "Home",
                path: "/",
                protected: true
            }
        ],
        component: Home,
        exact: true,
        name: "Home",
        // path: "/",
        protected: true
    },
    {
        component: Login,
        exact: true,
        name: "Login",
        path: "/login",
        protected: false
    },
    {
        children: [],
        component: VerifyAccount,
        exact: true,
        name: "Forgot Password",
        path: "/verify-account",
        protected: false
    },
    {
        component: Register,
        exact: true,
        name: "Register",
        path: "/register",
        protected: false
    },
    {
        component: ForgotPassword,
        exact: true,
        name: "Forgot Password",
        path: "/forgot-password",
        protected: false
    },
    {
        children: [
            {
                component: Customer,
                exact: true,
                name: "Customer",
                path: "customer",
                protected: true
            }
        ],
        component: Customer,
        exact: true,
        name: "Customer",
        path: "/",
        protected: true
    },

    {
        children: [
            {
                component: Terms,
                exact: true,
                name: "Terms",
                path: "terms",
                protected: true
            }
        ],
        component: Terms,
        exact: true,
        name: "Terms",
        path: "/",
        protected: true
    },

    {
        children: [
            {
                component: VerifyPayment,
                exact: true,
                name: "Forgot Password",
                path: "/verifypayment",
                protected: true
            }
        ],
        component: VerifyPayment,
        exact: true,
        name: "Forgot Password",
        path: "/verifypayment",
        protected: true
    },
    {
        children: [
            {
                component: ConfirmNewPassword,
                exact: true,
                name: "Forgot Password",
                path: "/confirm-new-password",
                protected: false
            }
        ],
        component: ConfirmNewPassword,
        exact: true,
        name: "Confirm New Password",
        path: "/confirm-new-password",
        protected: false
    },
    {
        children: [
            {
                component: HelpCenter,
                exact: true,
                name: "Help Center",
                path: "/help-center",
                protected: true
            }
        ],

        exact: true,
        name: "Help Center",
        path: "/",
        protected: true
    },
    {
        children: [
            {
                component: SelectAccountType,
                exact: true,
                name: "Choose Account type",
                path: "/choose-account",
                protected: true
            }
        ],
        component: SelectAccountType,
        exact: true,
        name: "Choose Account type",
        // path: "/choose-account",
        protected: true
    },
    {
        children: [
            {
                component: ProductShowAll,
                name: "Add Product ",
                path: "/product/all"
            },
            {
                component: AddProduct,
                name: "Add Product ",
                path: "/product/addproduct"
            },
            {
                component: ProductDetails,
                name: "Product Details",
                path: "product"
            }
        ],
        component: ProductLayout,
        name: "Products",
        path: "/",
        protected: true
    },
    {
        children: [
            {
                component: Companyprofile,
                name: "Company Profile ",
                path: "/settings/supplier"
            },
            {
                component: Myprofile,
                name: "Add Product ",
                path: "/settings/myprofile"
            }
        ],
        component: Myprofile,
        name: "Setting",
        // path: "/",
        protected: true
    },
    {
        children: [
            {
                component: AdminConsole,
                name: "Add User ",
                path: "/admin/setting"
            }
        ],
        component: AdminConsole,
        name: "Setting",
        // path: "/",
        protected: true
    },

    {
        children: [
            {
                component: IndividualActivityReport,
                exact: true,
                name: "ScheduleReports",
                path: "/individual/:id",
                protected: true
            },
            {
                component: ScheduleReports,
                exact: true,
                name: "ScheduleReports",
                path: "/reports",
                protected: true
            }
        ],
        component: ScheduleReports,
        exact: true,
        name: "ScheduleReports",
        path: "/",
        protected: true
    },

    {
        children: [
            {
                component: VisitTargets,
                exact: true,
                name: "VisitTargets",
                path: "/Visit-Targets",
                protected: true
            }
        ],
        component: VisitTargets,
        exact: true,
        name: "VisitTargets",
        path: "/",
        protected: true
    },

    {
        children: [
            {
                component: SalesReport,
                exact: true,
                name: "Sales Report",
                path: "/sales-report",
                protected: true
            }
        ],

        exact: true,
        name: "Sales Report",
        // path: "/summary",
        protected: true
    },
    {
        children: [
            {
                component: OrderShowAll,
                exact: true,
                name: "Order Summary",
                path: "/order/all",
                protected: true
            }
        ],

        exact: true,
        name: "Order Summary",
        // path: "/summary",
        protected: true
    },
    {
        children: [
            {
                component: Invoice,
                exact: true,
                name: "Invoice",
                path: "/invoice/:id",
                protected: true
            }
        ],

        exact: true,
        name: "Invoice",
        // path: "/summary",
        protected: true
    },

    {
        component: PageNotFound,
        exact: true,
        name: "Page Not Found",
        path: "*",
        protected: false
    }
];
