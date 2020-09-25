<template>
  <div class="card">
      <div class="card-content">
        <div v-if="!success">
            <form @submit.prevent="changePassword">
                    <b-field
                        label="New Password"
                        :type="{ 'is-danger': passwordErrors.length > 0 }"
                        :message="passwordErrors"
                    >
                        <b-input 
                            v-model="$v.password.$model"
                            type="password"
                            required
                            placeholder="New password"
                            password-reveal>
                        </b-input>
                    </b-field>

                <b-field
                    label="Confirm password"
                    :type="{ 'is-danger': repeatErrors.length > 0 }"
                    :message="repeatErrors"
                >
                    <b-input 
                        v-model="$v.repeatPassword.$model"
                        type="password"
                        required
                        placeholder="Repeat password"
                        password-reveal>
                    </b-input>
                </b-field>

                <button class="button is-primary is-extended has-text-white" :class="{ 'is-loading': isSubmitting }" type="submit">Change password</button>
            </form>
        </div>
        <div v-else>
            <h2 class="has-text-success is-size-2 is-family-primary">Password Changed successfully</h2>
        </div>
    </div>
  </div>
</template>

<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate'


export default {
    name: "PasswordChangeForm",
    mixins: [validationMixin],
    data() {
        return  {
            password: "",
            repeatPassword: "",
            isSubmitting: false,
            success: false
        }
    },
    validations: {
        password: {
            required,
            minLength: minLength(6)
        },
        repeatPassword: {
            sameAsPassword: sameAs('password')
        }
    },
    methods: {
        changePassword() {
            console.log("pwd", { password: this.password, confirm: this.repeatPassword });
            console.log("token", this.$route.params.token)
            this.isSubmitting = true;
            // fetch(`http://localhost:5000/api/v1/auth/password/change-password/${this.$route.params.token}`,
            // {
            //     mode: 'cors',
            //     method: "POST",
                
            //     headers: { "Content-Type": "application/json", "origin": "http://localhost:5000" },
            //     body: JSON.stringify({
            //         newPassword: this.password,
            //         repeatPassword: this.repeatPassword
            //     })
            // })
            // .then(result => {
            //     this.isSubmitting = false
            //     console.log("res", result.json())
            // })
            // .catch(error => {
            //     this.isSubmitting = false
            //     console.log("error", error.text)
            // })
            this.axios.post(
                `https://mteja-api-v1.herokuapp.com/api/v1/auth/password/change-password/${this.$route.params.token}`,
                JSON.stringify(
                    {
                        "newPassword": this.password,
                        "repeatPassword": this.repeatPassword
                    }
                )
            )
            .then(result => {
                this.isSubmitting = false
                this.success = true
                this.$buefy.snackbar.open({ message: `Password update was successful`, type: "is-success"})
                this.password = "";
                this.repeatPassword = "";
                console.log("result", result)
            })
            .catch(error => {
                this.isSubmitting = false;
                if (error.response) {
                    this.$buefy.snackbar.open({ message: `Password update failed`, type: "is-danger"})
                // client received an error response (5xx, 4xx)
                console.log("response received", error.response.data)
                } else if (error.request) {
                    this.$buefy.snackbar.open({ message: `An error occurred while trying to update your password. Please try again`, type: "is-danger"})
                // client never received a response, or request never left
                console.log("response not received", error.request)

                } else {
                    this.$buefy.snackbar.open({ message: `Password update failed. Please send another request`, type: "is-warning"})
                // anything else
                console.log("response received never", error.message)

                }
            })
        }
    },
    computed: {
        repeatErrors() {
            const errors = [];

            if (!this.$v.repeatPassword.$dirty) {
                return errors;
            }

            if(!this.$v.repeatPassword.sameAsPassword) {
                errors.push("Your passwords do not match");
            }

            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.password.$dirty) {
                return errors;
            }

            if(!this.$v.password.required) {
                errors.push("Please enter your new password")
            }
            if(!this.$v.password.minLength) {
                errors.push("Please enter a strong password")
            }

            return errors;
        }
    }
}
</script>

<style>
    .card {
        width: 350px;
        margin: 0 auto;
    }
</style>