import { Table } from '@mantine/core';
import {ProductSettingTableProps} from "../../model/product/productSettingTableProps.ts";

function ProductSettingTable({ elements, heads }: ProductSettingTableProps) {
    const rows = elements.map((element, index) => (
        <Table.Tr key={index}>
            <Table.Td>{element.productCode}</Table.Td>
            <Table.Td>{element.productName}</Table.Td>
            <Table.Td>{element.capacity}</Table.Td>
            <Table.Td>{element.bottleType}</Table.Td>
        </Table.Tr>
    ));

    const tableHeads = Object.values(heads).map((value, index) => (
        <Table.Th key={index}>{value}</Table.Th>
    ));

    return (
        <Table striped highlightOnHover verticalSpacing="md">
            <Table.Thead>
                <Table.Tr>
                    {tableHeads}
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
}

export default ProductSettingTable;
