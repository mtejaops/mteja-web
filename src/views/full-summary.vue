<template>
  <div class="summary_view">
      <div class="container pt-5">
          <h2 class="is-size-3 has-text-weight-semibold has-text-black-ter mt-5">Mteja Summary</h2>
          <hr class="has-background-ter">
          <div class="properties has-background-primary px-4 py-5 mb-6">
              <div class="flex between">
              <h2 class="is-size-5 has-text-white has-text-weight-normal">Property(s)</h2>
              <h2 class="is-size-3 has-text-white has-text-weight-semibold">{{properties}}</h2>
              </div>
          </div>
          <h4 class="is-size-5 has-text-weight-semibold">Users</h4>
          <br>
          <b-table
            :data="users"
            :columns="columns"
            :row-class="(row, index) => row.id === 1 && 'is-info'"
          >
          </b-table>
          <br>
          <br>
          <h4 class="is-size-5 has-text-weight-semibold">Agents</h4>
          <br>
          <b-table
            :data="agents"
            :columns="columns"
            :row-class="(row, index) => row.id === 1 && 'is-info'"
          >
          </b-table>
          <br>
          <br>
          <h4 class="is-size-5 has-text-weight-semibold">Units</h4>
          <br>
          <b-table
            :data="units"
            :columns="columns"
            :row-class="(row, index) => row.id === 1 && 'is-info'"
          >
          </b-table>
          <br>
          <br>
          <h4 class="is-size-5 has-text-weight-semibold">Tenants</h4>
          <br>
          <b-table
            :data="tenants"
            :columns="columns"
            :row-class="(row, index) => row.id === 1 && 'is-info'"
          >
          </b-table>
          <br>
          <br>
          <br>
          
           <b-loading is-full-page v-model="loading" :can-cancel="false"></b-loading>
      </div>
  </div>
</template>

<script>
export default {
    name: "FullSummary",
    data() {
        return {
            loading: false,
            properties: 0,
            users: [],
            tenants: [],
            agents: [],
            units: [],
                columns: [
                    {
                        field: '01',
                        label: 'Jan',
                        centered: true,
                    },
                    {
                        field: '02',
                        label: 'Feb',
                        centered: true,
                    },
                    {
                        field: '03',
                        label: 'Mar',
                        centered: true,
                    },
                    {
                        field: '04',
                        label: 'Apr',
                        centered: true
                    },
                    {
                        field: '05',
                        label: 'May',
                        centered: true,
                    },
                    {
                        field: '06',
                        label: 'Jun',
                        centered: true,
                    },
                    {
                        field: '07',
                        label: 'Jul',
                        centered: true,
                    },
                    {
                        field: '08',
                        label: 'Aug',
                        centered: true,
                    },
                    {
                        field: '09',
                        label: 'Sept',
                        centered: true,
                    },
                    {
                        field: '10',
                        label: 'Oct',
                        centered: true,
                    },
                    {
                        field: '11',
                        label: 'Nov',
                        centered: true,
                    },
                    {
                        field: '12',
                        label: 'Dec',
                        centered: true,
                    },
                ]
        }
    },
    methods: {
        getCalcData(result, name) {
            return [Object.fromEntries(result["data"]["data"][name].map(v => [v["created_at"], v["count"]]))];
        },
        fetchSummary() {
            this.loading = true;
            this.axios.get("https://mteja-api-v1.herokuapp.com/api/v1/admin/full-summary")
            .then(result => {
                this.loading = false;
                this.users = this.getCalcData(result, "users")
                this.agents = this.getCalcData(result, "members")
                this.units = this.getCalcData(result, "units")
                this.tenants = this.getCalcData(result, "tenants")
                this.properties = result["data"]["data"]["properties"]
            })
            .catch((error) => {
                this.loading = false;
                console.log("Error when fetching data from the backend ", error)
            })
        }
    },
    created() {
        this.fetchSummary();
    }
}
</script>

<style lang="scss">
    .summary_view {
        height: 100vh;
        width: 100vw;
    }

    .properties {
        border-radius: 5px;
    }

    .summary_view {
        padding: 2em;
    }
</style>