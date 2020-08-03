import Axios,{
    AxiosStatic,AxiosResponse,Method,AxiosInstance,AxiosError,AxiosRequestConfig
} from "axios"
import { Message } from "element-ui"
Axios.defaults.timeout = 10000
Axios.defaults.responseType = "json"

Axios.interceptors.request.use((config:AxiosRequestConfig) => {
    return config
})

// 响应拦截
Axios.interceptors.response.use(
    (response) => {
        // removeCancelDone(response)
        return response
    },
    (error) => {
        console.log(error)
        return Promise.reject(error)
    }
)
interface options {
    method?:Method,
    url:string,
    params?:object,
    configs?:object,
    api?:string

}
const fetch = async (options:options) => {
    console.log(options)
    return new Promise((resolve, reject) => {
        let { method, url, params, api } = options
        params = params || {}
        method = method || "post"
        // @ts-ignore
        Axios[method.toLowerCase()](url, params).then(
            async (response:AxiosResponse) => {
                // 代表token过期
                resolve(response.data)
            },
            (err:AxiosError) => {
                Message.error("网络异常")
                reject(err)
            }
        )
    })
}

export default fetch
