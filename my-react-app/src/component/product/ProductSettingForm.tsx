import {useForm} from "@mantine/form";
import {productSettingInitialValues, productSettingTextInputPairs} from "../../utils/product/productSettingForm.ts";
import {Button, Container, Group, TextInput} from "@mantine/core";
import classes from "../../css/Form.module.css";
import {createProduct} from "../../service/ProductSettingService.ts";

function productSettingForm() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: productSettingInitialValues,
    });

    const textInputs = Object.entries(productSettingTextInputPairs).map(([key, value]) => (
        <TextInput
            classNames={{
                input: classes.input,
            }}
            key={form.key(key)}
            label={value}
            {...form.getInputProps(key)}
        />
    ));

    const handleSubmit = async (values) => {
        try {
            const response = await createProduct(values);
            console.log("Response from server:", response);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <>
            <Container>
                <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                    <>{textInputs}</>
                    <Group justify="flex-end" mt="md">
                        <Button type="submit">儲存</Button>
                        <Button onClick={() => form.reset()}>清除</Button>
                    </Group>
                </form>
            </Container>
        </>
    );
}

export default productSettingForm;
