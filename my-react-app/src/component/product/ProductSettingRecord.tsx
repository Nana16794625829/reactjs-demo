import {heads} from "../../utils/product/productSettingTableHead.ts";
import ProductSettingTable from "./productSettingTable.tsx";

function ProductSettingRecord() {
    const elements = [
        {
            productCode: '001',
            productName: '茶',
            capacity: '375',
            bottleType: '圓瓶',
        },
        {
            productCode: '002',
            productName: '咖啡',
            capacity: '100',
            bottleType: '方瓶',
        },

    ];

    return (
        <>
            <ProductSettingTable elements={elements} heads={heads} />
        </>
    );
}

export default ProductSettingRecord
