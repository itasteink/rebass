import { connection } from "./"

export const createRouter = (actionGroups) => {
  return async (request, response) => {
    await connection

    const { method, query } = request
    const actionGroup = actionGroups[method]
    const action = actionGroup[query.action]
    return action(request, response)
  }
}
