<template>
  <div>
      <div class="container px-3 py-3">
          <div class="logo mb-3">
              <img height="25" width="30" src="../assets/logo.png" alt="Mteja Logo">
          </div>
          <hr />
          <h2 class="is-family-sans-serif is-size-3 has-text-black has-text-weight-semibold">Mahinga properties.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, aut?</p>
          <br>
          <h4 class="has-text-dark">Overview</h4>
          <br>
        <div class="columns mb-4">
            <div class="column">
                <div class="card">
                    <div class="card-content">
                        <div class="flex items-center">
                            <div class="stats tenants flex items-center centered">
                                <h2 class="is-family-sans-serif is-size-4">24</h2>
                            </div>
                            <h2 class="is-size-6 has-text-weight-semibold">Tenants</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-content">
                        <div class="flex items-center">
                            <div class="stats agents flex items-center centered">
                                <h2 class="is-family-sans-serif is-size-4">2</h2>
                            </div>
                            <h2 class="is-size-6 has-text-weight-bold">Agents</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-content">
                        <div class="flex items-center">
                            <div class="stats occupied flex items-center centered">
                                <h2 class="is-family-sans-serif is-size-4">24</h2>
                            </div>
                            <h2 class="is-size-6 has-text-weight-semibold">Occupied Units</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-content">
                        <div class="flex items-center">
                            <div class="stats vacant flex items-center centered">
                                <h2 class="is-family-sans-serif is-size-4">24</h2>
                            </div>
                            <h2 class="is-size-6 has-text-weight-semibold">Vacant Units</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="units mb-4">
            <h2 class="is-size-6  has-text-grey">Units</h2>
             <hr>
            <b-table :data="data" :columns="columns"></b-table>
        </div>
        <div class="mb-4">
            <h2 class="is-size-6 has-text-grey">Tenants</h2>
             <hr>
            <b-table :data="data" :columns="columns"></b-table>
        </div>
         <div class="mb-4">
             <h2 class="is-size-6  has-text-grey">Agents</h2>
             <hr>
            <b-table :data="data" :columns="columns"></b-table>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "SinglePropertyReport",
    data() {
        return {
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
                ]
        }
    },
    computed: {
        noOfValidTenants() {
            return 12;
        },
        noOfOccupiedUnits() {
            return 34;
        },
        noOfVacantUnits() {
            return 12;
        },
        noOfAgents() {
            return 7;
        }
    }
}
</script>

<style scoped>
    .card {
        width: 100% !important;
    }

    .stats {
        height: 60px;
        width: 60px;
        border-radius: 30px;
        margin-right: 1.2em;
        padding: 1em;
    }

    .vacant {
        border: 4px solid orangered;
    }

   

    .occupied {
        border: 4px solid #00DC7D;
    }

    .agents {
        border: 4px solid #380438;
    }

    .tenants {
        border: 4px solid #FFC11E;
    }
</style>