<template lang="">
    <div>
        <h3 class="text-bg-info-center pt-2">Users</h3>
        <table class="table">           
             <thead>
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Cell Number</th>
                <th scope="col">Email</th> 
                <th scope="col">Role</th>
                <th scope="col">Edit/Remove</th>
              </tr>
            </thead>
            <tbody v-for="user in users" :key="user">
              <tr>
                <td>{{user.userID}}</td>
                <td>{{user.firstName}}</td>
                <td>{{user.lastName}}</td>
                <td>{{user.gender}}</td>
                <td>{{user.cellphoneNumber}}</td>
                <td>{{user.emailAdd}}</td> 
                <td>{{user.userRole}}</td>
                <button class="edit">Edit</button>
                <button class="remove">Remove</button>
              </tr>
            </tbody>
          </table>
    </div>
</template>
<script>
import { useStore } from 'vuex'
import {computed} from '@vue/runtime-core';
export default {
    setup(){
        const store = useStore();
        store.dispatch("fetchUsers");
        let users = computed(() => store.state.users)
        return{
            users,
        }
    },
    name : 'user_com'
}
</script>
<style lang="">

</style>