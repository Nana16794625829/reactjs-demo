import {bottleTypeSelection, capacitySelection, productSelection, warehouseSelection} from "./formSelections.ts";

export const stockOutInitialValues =
    {
        orderNumber: '',
        customer: '',
        batchNumber: '',
        quantity: '',
        dateOfStockOut: '',
        dateOfManufacturing: '',
        expiryDate: '',
        warehouse: '',
        productName: '',
        capacity: '',
        bottleType: '',
        productCode: '',
        note_1: '',
        note_2: '',
    };

export const textInputPairsForStockIn = {
    batchNumber: '批號',
    quantity: '數量',
    productCode: '產品編號',
    note_1: '備註1',
    note_2: '備註2'
};

export const textInputPairsForStockOut = {
    orderNumber: '訂單編號',
    customer: '客戶名稱',
    batchNumber: '批號',
    quantity: '數量',
    productCode: '產品編號',
    note_1: '備註1',
    note_2: '備註2'
};

export const dateInputForStockIn = {
    dateOfStockIn: '入庫日期',
    dateOfManufacturing: '製造日期',
    expiryDate: '有效日期',
}

export const dateInputForStockOut = {
    dateOfStockOut: '出庫日期',
    dateOfManufacturing: '製造日期',
    expiryDate: '有效日期',
}

export const selectInputPair = {
    warehouse: ['倉庫', warehouseSelection],
    productName: ['品名', productSelection],
    capacity: ['容量', capacitySelection],
    bottleType: ['瓶型', bottleTypeSelection],
}


