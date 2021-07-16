<template lang="">
    
    <div class="row">
        <div class="row col-md-6 mx-auto mt-3">
            <h1 class="text-center">Singin</h1>
            <form method="POST" action="" >
                <div class="form-group has-success">
                    <label class="form-label mt-4" for="inputValid">Email</label>
                    <input type="email" value="" name="email" class="form-control is-valid" id="inputValid">
                    <div class="valid-feedback">Success! You've done it.</div>
                  </div>
                  <div class="form-group has-success">
                    <label class="form-label mt-4" for="inputValid">Password</label>
                    <input type="password" name="password" value="" class="form-control is-valid" id="inputValid">
                    <div class="valid-feedback">Success! You've done it.</div>
                  </div>
                  <button type="submit" class="btn btn-outline-primary d-block text-center">Sing In</button>
            </form>
    
        </div>

    </div>
    
</template>
<script>
    export default {
        data() {
            return {
                user: {
                    'email': '',
                    'password': ''
                }
            }
        },
        methods: {

        },
    }
</script>
<style lang="">

</style>