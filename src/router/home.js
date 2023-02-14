export default [
    {
        path: '/home',
        name: "home",
        component: () => import('@/views/HomeView'),
        // meta:{
        //   middleware: [guest]
        // }
      },
]