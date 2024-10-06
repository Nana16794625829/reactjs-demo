export const submitStockDispatchForm = async (formData) => {
    try {
        const response = await fetch("/api/stockDispatch/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        return await response.json();
    } catch (error) {
        console.error("Error submitting form:", error);
        throw error;
    }
};
