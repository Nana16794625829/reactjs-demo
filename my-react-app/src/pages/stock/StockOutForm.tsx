import {Button, Select, Group, TextInput} from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from "../../css/Form.module.css";
import {stockOutInitialValues, selectInputPair, textInputPairsForStockOut, dateInputForStockOut} from "../../utils/stock/formSettings.ts";
import {DateInput} from "@mantine/dates";

function StockOutForm() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: stockOutInitialValues,
        enhanceGetInputProps: (payload) => ({
            disabled: payload.field === 'productCode'
        })
    });

    const setProductCode = (value: string | null) => {
        if (value === "oolong") {
            form.setFieldValue('productCode', '001');
        } else if (value === "coffee") {
            form.setFieldValue('productCode', '002');
        } else {
            form.setFieldValue('productCode', '');
        }
    };

    // 欄位順序定義
    const fieldOrder = [
        "dateOfStockOut",
        "warehouse",
        "orderNumber",
        "customer",
        "productName",
        "quantity",
        "batchNumber",
        "bottleType",
        "dateOfManufacturing",
        "capacity",
        "expiryDate",
        "note_1",
        "productCode",
        "note_2"
    ];

    // 生成所有的 TextInput 和 SelectInput 組合
    const allInputs = {
        ...Object.fromEntries(
            Object.entries(textInputPairsForStockOut).map(([key, value]) => [
                key,
                <TextInput
                    classNames={{ input: classes.input }}
                    key={form.key(key)}
                    label={value}
                    {...form.getInputProps(key)}
                />
            ])
        ),
        ...Object.fromEntries(
            Object.entries(dateInputForStockOut).map(([key, value]) => [
                key,
                <DateInput
                    valueFormat="YYYY/MM/DD"
                    classNames={{ input: classes.input }}
                    key={form.key(key)}
                    label={value}
                    {...form.getInputProps(key)}
                />
            ])
        ),
        ...Object.fromEntries(
            Object.entries(selectInputPair).map(([key, [label, selection]]) => {
                const { onChange, ...inputProps } = form.getInputProps(key);
                const handleChange = (value: any) => {
                    onChange(value);
                    setProductCode(value);
                };

                return [
                    key,
                    <Select
                        classNames={{ input: classes.input }}
                        key={form.key(key)}
                        label={label as string}
                        data={selection as { value: string, label: string }[]}
                        onChange={handleChange}
                        {...inputProps}
                    />
                ];
            })
        )
    };

    return (
        <div>
            <form className={classes.group} onSubmit={form.onSubmit((values) => console.log(values))}>
                {fieldOrder.map((fieldKey) => allInputs[fieldKey])}
                <Group justify="flex-start" mt="md">
                    <Button type="submit">出庫</Button>
                    <Button onClick={() => form.reset()}>清除</Button>
                </Group>
            </form>
        </div>
    );
}

export default StockOutForm;
