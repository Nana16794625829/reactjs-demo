import {useRoutes} from "react-router-dom";
import StockOutForm from "./pages/stock/StockOutForm.tsx";
import ProductSettingMain from "./pages/settings/ProductSettingMain.tsx";
import Homepage from "./pages/Homepage.tsx";

export const App = () => {
    return useRoutes([
        { path:"/", element:<Homepage />},

        { path:"/stockOutForm", element:<StockOutForm /> },
        { path:"/settings/product", element:<ProductSettingMain /> },
    ]);
};
