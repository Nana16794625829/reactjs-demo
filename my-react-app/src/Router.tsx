import {useRoutes} from "react-router-dom";
import StockDispatchForm from "./pages/stock/StockDispatchForm.tsx";
import ProductSettingMain from "./pages/settings/ProductSettingMain.tsx";
import Homepage from "./pages/Homepage.tsx";

export const App = () => {
    return useRoutes([
        { path:"/", element:<Homepage />},

        { path:"/stockDispatchForm", element:<StockDispatchForm /> },
        { path:"/settings/product", element:<ProductSettingMain /> },
    ]);
};
