import React, { useState } from 'react';
import {
    TextField,
    Button,
    Box,
    Typography,
    Snackbar,
    Alert,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Checkbox,
    FormControlLabel,
} from '@mui/material';

const Payment = () => {
    // State hooks for form data, snackbar, and loading state
    const [formData, setFormData] = useState({
        amount: '',
        paymentMethod: 'Credit Card',
        discountCode: '',
        savePaymentMethod: false,
    });
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success', // default is success
    });
    const [loading, setLoading] = useState(false); // Loading state
    const [openConfirmation, setOpenConfirmation] = useState(false); // Modal state
    const [currency, setCurrency] = useState('USD'); // Currency state

    // Destructure for easier access
    const { amount, paymentMethod, discountCode, savePaymentMethod } = formData;

    // Mock discount codes
    const discountCodes = { 'SAVE10': 10, 'SAVE20': 20 }; // 10% and 20% discounts

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle currency selection
    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const isAmountValid = validateAmount(amount);

        // Basic validation
        if (!isAmountValid) {
            triggerSnackbar('Please enter a valid amount', 'error');
            return;
        }

        setOpenConfirmation(true); // Open confirmation modal
    };

    // Validate amount input
    const validateAmount = (amount) => {
        return !isNaN(amount) && amount > 0;
    };

    // Validate discount code
    const validateDiscountCode = (code) => {
        return discountCodes[code] || 0; // Returns discount percentage or 0 if invalid
    };

    // Calculate final amount after discount
    const calculateFinalAmount = () => {
        const discount = validateDiscountCode(discountCode);
        return discount > 0 ? (amount - (amount * (discount / 100))).toFixed(2) : amount;
    };

    // Trigger Snackbar
    const triggerSnackbar = (message, severity) => {
        setSnackbar({ open: true, message, severity });
    };

    // Close Snackbar
    const handleSnackbarClose = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    // Confirm Payment
    const handleConfirmPayment = async () => {
        setLoading(true); // Show loading spinner

        try {
            // Simulate API call delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Payment logic here (e.g., API call to process payment)
            console.log('Payment submitted:', {
                amount,
                paymentMethod,
                discountCode,
                savePaymentMethod,
                currency,
            });
            triggerSnackbar('Payment successful!', 'success');
        } catch (error) {
            triggerSnackbar('Payment failed. Please try again.', 'error');
        } finally {
            setLoading(false); // Stop loading spinner
            setOpenConfirmation(false); // Close confirmation modal
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            textAlign="center"
            sx={{ p: 3, backgroundColor: '#f7f9fc', borderRadius: 2, boxShadow: 3, maxWidth: '400px', mx: 'auto' }}
        >
            <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
                Payment
            </Typography>

            <TextField
                name="amount"
                label="Amount"
                value={amount}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                size="small"
                type="number"
                InputProps={{ inputProps: { min: 0, step: 0.01 } }} // Allowing decimal amounts
                error={amount !== '' && !validateAmount(amount)} // Inline error validation
                helperText={amount !== '' && !validateAmount(amount) ? 'Invalid amount' : ''}
            />

            <FormControl fullWidth margin="normal" size="small">
                <InputLabel id="payment-method-label">Payment Method</InputLabel>
                <Select
                    labelId="payment-method-label"
                    name="paymentMethod"
                    value={paymentMethod}
                    onChange={handleChange}
                    label="Payment Method"
                    required
                >
                    {['Credit Card', 'Debit Card', 'PayPal', 'Bank Transfer'].map((method) => (
                        <MenuItem key={method} value={method}>
                            {method}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField
                name="discountCode"
                label="Discount Code"
                value={discountCode}
                onChange={handleChange}
                fullWidth
                margin="normal"
                size="small"
            />

            <FormControl fullWidth margin="normal" size="small">
                <InputLabel id="currency-label">Currency</InputLabel>
                <Select
                    labelId="currency-label"
                    name="currency"
                    value={currency}
                    onChange={handleCurrencyChange}
                    label="Currency"
                    required
                >
                    {['USD', 'EUR', 'INR'].map((curr) => (
                        <MenuItem key={curr} value={curr}>
                            {curr}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControlLabel
                control={
                    <Checkbox
                        checked={savePaymentMethod}
                        onChange={(e) => setFormData({ ...formData, savePaymentMethod: e.target.checked })}
                    />
                }
                label="Save this payment method"
            />

            <Typography variant="h6" sx={{ mt: 2 }}>
                Final Amount: {calculateFinalAmount()} {currency}
            </Typography>

            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                disabled={loading} // Disable button when loading
            >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Pay Now'}
            </Button>

            <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackbar.severity}>
                    {snackbar.message}
                </Alert>
            </Snackbar>

            {/* Confirmation Dialog */}
            <Dialog open={openConfirmation} onClose={() => setOpenConfirmation(false)}>
                <DialogTitle>Confirm Payment</DialogTitle>
                <DialogContent>
                    <Typography>Amount: {amount}</Typography>
                    <Typography>Payment Method: {paymentMethod}</Typography>
                    <Typography>Discount Code: {discountCode}</Typography>
                    <Typography>Save Payment Method: {savePaymentMethod ? 'Yes' : 'No'}</Typography>
                    <Typography>Final Amount: {calculateFinalAmount()} {currency}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenConfirmation(false)}>Cancel</Button>
                    <Button onClick={handleConfirmPayment} color="primary">Confirm</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Payment;
