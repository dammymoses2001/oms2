import AOS from "aos";
import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { Providers } from "./context/providers";
import { QueryClient, QueryClientProvider } from "react-query";

import { AppRouter } from "./routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "animate.css"; // You can also use <link> for styles

const App = () => {
    const queryClient = new QueryClient();
    AOS.init();
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Providers>
                    <AppRouter />
                    <Toaster />
                </Providers>
            </QueryClientProvider>
        </BrowserRouter>
    );
};

export default App;
