<template>
  <div class="h-100">
      <div class="container mt-6 px-3">
          <div class="logo mb-3">
              <img height="25" width="30" src="../assets/logo.png" alt="Mteja Logo">
              <!-- <h2 class="is-size-2 has-text-weight-semibold has-text-black">Report</h2> -->
          </div>
          <hr />
          <h2 class="is-family-sans-serif is-size-3 has-text-black has-text-weight-semibold">Properties report</h2>
          <br>
          <h4 class="has-text-dark">Overview</h4>
          <div class="columns mt-4 mb-4">
              <div class="column is-5">
                  <div class="flex f-column">
                    <div class="card">
                        <div class="card-content flex">
                            <div class="income-circle">
                                <trending-up-icon size="2x"></trending-up-icon>
                            </div>
                            <div class="income">
                                <h2 class="has-text-weight-bold has-text-black is-size-5 is-family-sans-serif">Income</h2>
                                <h2 class="is-size-6 has-text-dark has-text-weight-semibold is-family-sans-serif">
                                    {{ income }}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-3">
                        <div class="card-content flex">
                            <div class="expense-circle">
                                <trending-down-icon size="2x"></trending-down-icon>
                            </div>
                            <div class="expenses">
                                <h2 class="is-size-5 has-text-black has-text-weight-bold is-family-sans-serif">Expenses</h2>
                                <h2 class="is-size-6 has-text-dark has-text-weight-semibold is-family-sans-serif">
                                    {{ expenses }}
                                </h2>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
              <div class="column is-7">
                  <div class="card all">
                      <div class="card-header">
                          <div class="card-header-title">
                              Properties overview
                          </div>
                      </div>
                      <div class="card-content flex f-column">
                          <div class="flex">
                                <div class="flex f-column mr-3 w-50">
                                <div class="data flex">
                                    <div class="numbers properties flex items-center centered mr-2">
                                        <h3 class="has-text-weight-light has-text-black is-family-sans-serif">{{ noOfProperties }}</h3>
                                    </div>
                                    <h3 class="flex items-center">Properties</h3>
                                </div>
                                <div class="data flex">
                                    <div class="numbers all-units flex items-center centered mr-2">
                                        <h3 class="has-text-weight-light has-text-black">{{ noOfUnits }}</h3>
                                    </div>
                                    <h3 class="flex items-center">Units</h3>
                                </div>
                                </div>
                                <div class="flex f-column">
                                    <div class="data inline-flex row items-center">
                                    <div class="numbers tenants flex items-center centered mr-2">
                                        <h3 class="has-text-weight-light has-text-black is-family-sans-serif">{{ noOfValidTenants }}</h3>
                                    </div>
                                    <h3>Tenants</h3>
                                </div>
                                <div class="data inline-flex row items-center">
                                    <div class="numbers agents flex items-center centered mr-2">
                                        <h3 class="has-text-weight-light has-text-black is-family-sans-serif">{{ noOfAgents }}</h3>
                                    </div>
                                    <h3>Agents</h3>
                                </div>
                                </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="property-list mb-4">
            <h2 class="is-family-sans-serif has-text-weight-bold is-size-5 has-text-black">Properties</h2>
            <br>
            <b-table :data="data" :columns="columns"></b-table>
          </div>
          <div class="unit-list mb-4">
            <h2 class="is-family-sans-serif has-text-weight-bold is-size-5 has-text-black">Units</h2>
            <br>
            <b-table :data="data" :columns="columns"></b-table>
          </div>
          <div class="agent-list mb-4">
            <h2 class="is-family-sans-serif has-text-weight-bold is-size-5 has-text-black">Agents</h2>
            <br>
            <b-table :data="data" :columns="columns"></b-table>
          </div>
          <div class="tenant-list">
            <h2 class="is-family-sans-serif has-text-weight-bold is-size-5 has-text-black">Tenants</h2>
            <br>
            <b-table :data="data" :columns="columns"></b-table>
          </div>
      </div>
      <Footer/>
  </div>
</template>

<script>

import { TrendingDownIcon, TrendingUpIcon } from 'vue-feather-icons'
import Footer from "../components/footer";
export default {
    components: {
        TrendingDownIcon,
        TrendingUpIcon,
        Footer
    },
    data() {
        return {
            htmlOpts: {
                margin: 20,
                filename: "report.pdf"
            },
            data: [
                    { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
                    { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
                    { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
                    { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
                    { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
                ],
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'first_name',
                        label: 'First Name',
                    },
                    {
                        field: 'last_name',
                        label: 'Last Name',
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    },
                    {
                        field: 'gender',
                        label: 'Gender',
                    }
                ],
            properties: [], 
        }
    },
    methods: {
        generatePDF() {
            console.log("generated pdf.")
        },
    },
    computed: {
        income() {
            return 12000

        },
        expenses() {
            return 14000
        },
        noOfProperties() {
            return 12;
        },
        noOfUnits() {
            return 20;
        },
        noOfValidTenants() {
            return 19;
        },
        noOfAgents() {
            return 2;
        }
    },
    created() {

    }
}
</script>

<style scoped>
    

    .pdf {
        position: absolute;
        left: 20px ;
        bottom: 2em;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
    }

    .logo {
        display: flex;
        justify-content: flex-start;
    }

    .logo img {
        margin-right: 2em;
    }

    .expense-circle, .income-circle {
        height: 50px;
        width: 50px;
        border-radius: 25px;
        margin-right: 0.75em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .expense-circle {
        border: 3px solid #2300B0;
    }

    .income-circle {
        border: 3px solid #00CF91;
    }

    .card {
        width: 100% !important;
    }

    .data {
        margin-bottom: 1em;
    }

    .data .numbers {
        height: 50px;
        width: 50px;
        padding: 0.75em;
        border: 2px solid grey;
        border-radius: 50%;
    }

    .data .numbers.units {
        border: 2px solid orangered;
    }

    .data .numbers.units.vacant {
        border: 2px solid #00DC7D;
    }

    .data .numbers.properties {
        border: 2px solid #7EB3FF;

    }

    .data .numbers.all-units {
        border: 2px solid #380438;

    }

    .data .numbers.tenants {
        border: 2px solid #FFC11E;

    }
</style>