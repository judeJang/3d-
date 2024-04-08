// for router
interface Menu {
    name: string
    title: string
    path: string
}

class MenuList {
    static readonly uicomponents: Menu = { name: "UI Components", title: "UI Components", path: "/" }
    static readonly ThreeD: Menu = { name: "3d", title: "3d", path: "/3d" }
    static readonly Complete: Menu = { name: "comp", title: "comp", path: "/comp" }
}

export default MenuList
