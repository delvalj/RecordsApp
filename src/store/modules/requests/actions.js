export default {
    contactStore(context, payload) {
        const newRequest = {
          id: new Date().toISOString(),
          recordId:  payload.recordId,
          userEmail: payload.email ,
          message: payload.message ,
        }
        context.commit('addRequest', newRequest)
    }
}