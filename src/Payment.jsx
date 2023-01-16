import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Stack from '@mui/material/Stack';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import './payment.css'

export default function InputWithIcon() {
    return (
        <Box className="payment-container">
            <Box className="payment-card" sx={{
                width: '32ch',
            }}>
                <p className="custom-wrapper-label">Payment card</p>
                <Stack
                    className="payment-card-container"
                    component="form"
                    // sx={{
                    //     width: '25ch',
                    // }}
                    spacing={1}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="card-number"
                        placeholder="1234 5678 1234 5678"
                        // label="TextField"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <span className="custom-label">
                                        <CreditCardIcon />
                                    </span>
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                    />
                    <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <p className='custom-label'>Exp. date</p>
                                </InputAdornment>
                            ),
                        }}
                        id="standard-basic" placeholder="mm/yy" variant="standard" />
                    <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <p className='custom-label'>CVC</p>
                                </InputAdornment>
                            ),
                        }}
                        id="standard-basic" placeholder="123" variant="standard" />
                </Stack>
            </Box>
            <Box className="cardholder-name-wrapper" sx={{
                width: '32ch',
            }}>
                <span className="custom-wrapper-label">Cardholder</span>
                <Stack
                    className="cardholder-name-container"
                    component="form"
                    spacing={1}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <p className='custom-label'>Holder name</p>
                                </InputAdornment>
                            ),
                        }}
                        id="standard-basic" placeholder="John James" variant="standard" />
                </Stack>
            </Box>
            <Box className="billing-address-wrapper" sx={{
                width: '32ch',
            }}>
                <span className="custom-wrapper-label">Billing address</span>
                <Stack
                    className="billing-address-container"
                    component="form"
                    spacing={1}
                    noValidate
                    autoComplete="off"
                >
                    {/* <TextField id="standard-basic" placeholder="Cardholder name" variant="standard" /> */}
                    <FormControl fullWidth>
                        {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Age
                    </InputLabel> */}
                        <NativeSelect
                            defaultValue={30}
                            placeholder="John James"
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={10}>Uzbekistan</option>
                            <option value={20}>Tajikistan</option>
                            <option value={30}>United Arab Emirates</option>
                        </NativeSelect>
                    </FormControl>
                    <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <p className='custom-label'>Zip code</p>
                                </InputAdornment>
                            ),
                        }}
                        id="standard-basic" placeholder="20712" variant="standard" />
                </Stack>
            </Box>
            <Box className="save-info-wrapper" sx={{
                width: '32ch',
            }}>
                <Stack
                    className="save-info-container"
                    component="form"
                    spacing={1}
                    noValidate
                    autoComplete="off"
                >

                    <Switch defaultChecked size="small"/>
                </Stack>
                <p className="save-info-desc">Saving payment details is only available with 2-Step Verification</p>
            </Box>
            <Box className="done-btn-wrapper" sx={{
                width: '32ch',
            }}>
                <Button className="done-btn" variant="contained">Done</Button>
            </Box>
        </Box>
    );
}