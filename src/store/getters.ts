import { GetterTree, Getter } from 'vuex'

const getterTree: GetterTree<any, any> = {
    isCollapse:(state)=>state.settings.collapse
}

export default getterTree
