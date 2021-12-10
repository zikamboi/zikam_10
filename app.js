const routes =[
    {path: '/home', component:home},
    {path: '/clinicpatient', componenet:clientpatient},
    {path: '/department', component:Department}
]

const router=new VueRouter({
    routes
})

const app =new Vue({
    router
}).$mount("#app")