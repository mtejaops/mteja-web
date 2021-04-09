<template>
    <div>
        <div v-if="loadingData" class="loading h-100 flex items-center centered f-column">
            <img src="../assets/logo-large.png" class="logo" height="100">
            <p>Please wait...</p>
        </div>
        <div v-else-if="errored.length > 1" class="flex items-center centered f-column">
            <alert-triangle-icon size="1.5x" class="has-text-warning"></alert-triangle-icon>
            <p>{{ errored }}</p>
        </div>
        <div v-else class="container flex j-center f-column my-5 receipt">
            <div class="intro">
                <div class="details">
                    <h2 class="is-size-3 has-text-weight-bold has-text-black-bis is-family-sans-serif">Receipt</h2>
                    <p class="has-text-weight-semibold">{{ property }}</p>
                    <p>{{ house_name }}</p>
                    <p>Kenya.</p>
                </div>
                <div class="logo">
                    <img src="../assets/logo-large.png" alt="MtejaOps Logo">
                </div>
            </div>
            <ul class="bill-details">
                <li>
                    <h4 class="is-size-6 has-text-weight-bold">Bill to</h4>
                    <p class="is-size-6">{{ name | capitalize }}</p>
                    <p><span class="has-text-weight-light">Tel:</span> {{ phoneNumber }}</p>
                    <p><span class="has-text-weight-light">Email:</span> {{ email }}</p>
                </li>
                
                <li>
                    <p><span class="has-text-weight-bold">Receipt #:</span> RE-{{ property }}-{{ receipt_id }}</p>
                    <p><span class="has-text-weight-bold">Date:</span> {{ date | moment("dddd, MMMM Do YYYY ") }}</p>
                    <p><span class="has-text-weight-bold">Due Date:</span> {{ due_date | moment("dddd, MMMM Do YYYY ") }}</p>
                </li>
            </ul>
            
            <div class="flex j-between mt-6">
                <h4 class="is-size-4">Receipt Total</h4>
                <h4 class="is-size-3 has-text-weight-bold has-text-black total">KSH {{ amount }}</h4>
            </div>
      
            <b-table class="mt-4 table" :data="data" :columns="columns"></b-table>

            <div class="bottom">
                <p>MtejaOps</p>
                <small class="is-family-sans-serif has-text-black-bis">mtejaops.com &copy; 2020</small>
            </div>
    
        </div>
</div>
  
</template>

<script>
import { AlertTriangleIcon } from 'vue-feather-icons'
export default {
    name: "TenantReceipt",
    components: {
        AlertTriangleIcon
    },
    data() {
        return {
            data: [
                {
                    'name': 'Brian Mwangi',
                    'house_name': 'Mulingo-34',
                    'invoice_amount': 34500,
                    'amount_paid': 35000,
                    'balance': 4500
                }
            ],
            phoneNumber: "",
            property: "",
            receipt_id: "",
            house_name: "",
            invoiceNumber: "",
            date: "",
            name: "",
            due_date: "",
            email: "",
            amount: "",
            columns: [
                {
                        field: 'name',
                        label: 'Name',
                },
                {
                        field: 'house_name',
                        label: 'House No./Name',
                },
                {
                        field: 'invoice_amount',
                        label: 'Invoice Amount',
                        numeric: true,
                },
                {
                        field: 'amount_paid',
                        label: 'Amount Paid',
                        numeric: true
                },
                {
                        field: 'balance',
                        label: 'Balance',
                        numeric: true
                }
            ],
            loadingData: true,
            errored: ""
        }
        
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    created() {
        console.log("created")
        this.loadingData = true
        
        this.axios.get(`https://mteja-api-v1.herokuapp.com/api/v1/properties/${this.$route.params.property_id}/receipt/${this.$route.params.receipt_id}?access=${this.$route.query.access}`)
        .then(result => {
            this.loadingData = false
            console.log("result", result);
            this.data = [
                {
                    name: result.data.data.name,
                    invoice_amount: result.data.data.invoiceAmount,
                    pay_type: result.data.data.invoice.type,
                    amount_paid: result.data.data.amount_paid,
                    balance: result.data.data.balance,
                    house_name: result.data.data.house_name
                }
            ]
            this.amount = result.data.data.invoiceAmount
            this.name = result.data.data.name
            this.phoneNumber = result.data.data.phone
            this.due_date = result.data.data.due_date
            this.date = result.data.data.date
            this.property = result.data.data.property_name
            this.email =  result.data.data.email
            this.receipt_id = result.data.data.invoice.receipt
            this.house_name = result.data.data.house_name
        })
        .catch(error => {
            this.loadingData = false
            console.log("error", error);
            this.errored = "We could not load the receipt"
        })
    }
}
</script>

<style scoped>
    .receipt {
        position: relative;
        min-height: 100vh;
    }

    .logo img {
        height: 140px;
        width: 100px;
        object-fit:fill;
    }

    .receipt.container {
        max-width: 70%;
    }
    .intro {
        display: flex;
        justify-content: space-between;

    
    }

    .loading img {
            position: absolute;
            top: 35%;
            width: 100px !important;
            height: 100px !important;
            object-fit: contain;
            animation: spin 4s cubic-bezier(0.02, 0.32, 0.8, 0.32) infinite;
        }

    @keyframes spin {
            100% {
                transform: rotate(360deg);
            }
        }

    @media screen and (max-width: 520px) {
        .intro {
            display: flex;
            flex-direction: column-reverse;
        }

        .total {
            font-size: 1.2rem !important;
        }

        .logo img {
            height: 80px;
            width: 50px;
            object-fit: contain;
        }

        .bill-details {
            display: flex;
            flex-direction: column;
        }

        .bill-details li:not(:first-of-type) {
            margin-top: 1em;
        }

        .table {
            margin-bottom: 4em;
        }
    }

    .intro .details h2 {
        
            margin-bottom: 1em;
        
    }

    .bill-details {
        margin-top: 2em;
        display: flex;
        justify-content: space-between;
    }

    .j-between {
        justify-content: space-between;
    }

    .divider {
        height: 2px;
        width: 100%;
        background-color: grey;
    }

    .bottom{ 
        position: absolute;
        bottom: 5px;
        left: 10px;
    }
</style>