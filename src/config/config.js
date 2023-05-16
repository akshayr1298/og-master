// export const Server = {
//     endpoint : REACT_APP_AW_END_POINT,
//     project: REACT_APP_AW_PROJECT_ID,
//     collectionID : REACT_APP_COLLECTION_ID,
//     databaseID : REACT_APP_DATABASE_ID,
// }

export const Server = {
    endpoint : process.env.REACT_APP_ENDPOINT,
    project: process.env.REACT_APP_PROJECT,
    collectionID : process.env.REACT_APP_COLLECTION_ID,
    databaseID : process.env.REACT_APP_DATABASE_ID,
}