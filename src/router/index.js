import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/views/homes/Home.vue'
import CityType from '@/views/cityType/cityType.vue'
import Moives from '@/views/homes/movies/moives.vue'
import HotMove from '@/views/homes/movies/hotMove.vue'
import WhitMove from '@/views/homes/movies/whitMoves.vue'
import DetailsPage from '@/views/detailsPage/detailsPage.vue'

import Cinema from '@/views/homes/cinema/cinema.vue'
import IsMe from '@/views/homes/isMe/isMe.vue'



const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        redirect: '/home/moives',
        children: [
            {
                path: 'moives',
                component: Moives,
                redirect:'/home/moives/hotmove',
                children:[
                    {
                        path:'hotmove',
                        component: HotMove
                        
                    },
                    {
                        path:'whitMove',
                        component: WhitMove
                    }
                ]
            },
            {
                path:'cinema',
                component:Cinema
            },
            {
                path:'isme',
                component:IsMe
            }
        ]
    },
    {
        path:'/citytype',
        component:CityType
    },
    {
        path:'/detailspage/:listId',
        component:DetailsPage,
        props:true
    }
]

const router = new Router({
    mode: 'history',
    routes
})

export default router