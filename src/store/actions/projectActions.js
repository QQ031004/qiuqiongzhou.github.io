export const createProject = (project) => {

     return (dispatch, getState, { getFirebase, getFirestore }) => {
         // Att göra async till database/make async call to database
         const firestore = getFirestore();
         firestore.collection('projects').add({
             ...project,
             authorFirstName: 'Net',
             authorLastName: 'QQ',
             authorId: 11008,
             createdAt: new Date()
         }).then(() => {
             dispatch({ type: 'CREATE_PROJECT', project }); 
         }).catch((err) => {
             dispatch({ type: 'CREATE_PROJECT_ERROR', err });
         
         })       
      }
  };
