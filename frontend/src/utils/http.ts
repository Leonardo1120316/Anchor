// //设置请求基础地址
// const jc: string = 'https://pcapi-xiaotuxian-front.itheima.net/'
// import { useMemberStore } from '@/stores/index'

// const peizhi = {
//   invoke: (args: UniApp.InterceptorOptions) => {
//     // 设置基础地址
//     if (!args.url.startsWith('http')) {
//       args.url = jc + args.url
//     }
//     // 设置响应时间
//     args.timeout = 10000
//     args.header = {
//       'source-client': 'miniapp',
//       ...args.header,
//     }
//     const user = useMemberStore()
//     // 设置token
//     const token = user.profile?.token
//     if (token) {
//       args.header.Authorization = token
//     }
//   },

// }
// uni.addInterceptor('request', peizhi)
// uni.addInterceptor('uploadFile', peizhi)


// //设置返回类型
// interface data<T> {
//   code: number
//   msg: string
//   result: T
// }

// //封装请求函数
// export const http = <T>(options: UniNamespace.RequestOptions) => {
//   return new Promise<data<T>>((resolve, reject) => {
//     uni.request({
//       ...options,
//       success(result) {
//         if (result.statusCode >= 200 && result.statusCode < 300) {
//           resolve(result.data as data<T>)
//         } else if (result.statusCode === 401) {
//           //   身份错误跳转到登录页
//           const m = useMemberStore()
//           m.clearProfile()
//           uni.navigateTo({
//             url: '/pages/login/login',
//           })
//           reject(result)
//         } else {
//           uni.showToast({
//             icon: 'none',
//             title: (result.data as data<T>).msg || '请求错误',

//           })
//           reject(result)
//         }
//       },
//       fail(result) {

//         uni.showToast({
//           icon: 'none',
//           title: '网络错误,请更换网络',

//         })
//         reject(result)
//       },
//     })
//   })

// }
