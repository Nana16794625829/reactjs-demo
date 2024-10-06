import {ProductSettingRecordProps} from "./productSettingRecordProps.ts";

export type ProductSettingTableProps = {
    elements: ProductSettingRecordProps[];
    heads: { [key: string]: string };
};
