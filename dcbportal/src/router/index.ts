import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { getComponent } from "@/apps/common/funs"
import MenuList from "@/apps/common/menuList"

const routes: Array<RouteRecordRaw> = [
    {
        path: MenuList.uicomponents.path,
        name: MenuList.uicomponents.name,
        component: getComponent("ThreeD")
    },
    {
        path: MenuList.ThreeD.path,
        name: MenuList.ThreeD.name,
        component: getComponent("ThreeD")
    },
    {
        path: MenuList.Complete.path,
        name: MenuList.Complete.name,
        component: getComponent("Complete")
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
