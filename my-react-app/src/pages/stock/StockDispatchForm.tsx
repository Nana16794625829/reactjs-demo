import {Button, Select, Group, TextInput} from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from "../../css/Form.module.css";
import {stockDispatchInitialValues, selectInputPair, textInputPairsForStockDispatch, dateInputForStockDispatch} from "../../utils/stock/formSettings.ts";
import {DateInput} from "@mantine/dates";
import {submitStockDispatchForm} from "../../service/StockDispatchService.ts";

function StockDispatchForm() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: stockDispatchInitialValues,
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
            Object.entries(textInputPairsForStockDispatch).map(([key, value]) => [
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
            Object.entries(dateInputForStockDispatch).map(([key, value]) => [
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

    // 提交表單並使用 API Service 發送數據
    const handleSubmit = async (values) => {
        try {
            const response = await submitStockDispatchForm(values);
            console.log("Response from server:", response);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div>
            <form className={classes.group} onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                {fieldOrder.map((fieldKey) => allInputs[fieldKey])}
                <Group justify="flex-start" mt="md">
                    <Button type="submit">出庫</Button>
                    <Button onClick={() => form.reset()}>清除</Button>
                </Group>
            </form>
        </div>
    );
}

export default StockDispatchForm;
