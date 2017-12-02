// API Users static class
export default class ApiUsers {
  // get a list of users
  static getList() {
    return new Promise(resolve => {
      setTimeout(() => {
        // build some dummy users list
        let users = [];
        users.push({id:"1",submitted:'23-12-2011',applicantName:'Banni'});
        users.push({id:"1",submitted:'23-12-2011',applicantName:'Banni'});
        users.push({id:"1",submitted:'23-12-2011',applicantName:'Banni'});
        users.push({id:"1",submitted:'23-12-2011',applicantName:'Banni'});
        users.push({id:"1",submitted:'23-12-2011',applicantName:'Banni'});

        users.push({id:"1",submitted:'23-12-2011',applicantName:'Banni'});
        users.push({id:"1",submitted:'23-12-2011',applicantName:'Banni'});
        users.push({id:"1",submitted:'23-12-2011',applicantName:'Banni'});
        users.push({id:"1",submitted:'23-12-2011',applicantName:'Banni'});
        users.push({id:"1",submitted:'23-12-2011',applicantName:'Banni'});
        users.push({id:"1",submitted:'23-12-2011',applicantName:'Banni'});
        users.push({id:"1",submitted:'23-12-2011',applicantName:'Banni'});

        users.push({id:"1",submitted:'23-12-2011',applicantName:'Banni'});
        users.push({id:"1",submitted:'23-12-2011',applicantName:'Banni'});
        users.push({id:"1",submitted:'23-12-2011',applicantName:'Banni'});
        resolve(users);
      }, 1000);
    });
  }

  // add/edit a user
  static addEdit() {
    return new Promise(resolve => {
      setTimeout(() => {
        // do something here
        resolve();
      }, 1000);
    });
  }

  // delete a user
  static delete() {
    return new Promise(resolve => {
      setTimeout(() => {
        // do something here
        resolve();
      }, 500);
    });
  }

    // verify a user
    static verify() {
      return new Promise(resolve => {
        setTimeout(() => {
          // do something here
          resolve();
        }, 500);
      });
    }

     // verify a user
     static submit() {
      return new Promise(resolve => {
        setTimeout(() => {
          // do something here
          resolve();
        }, 500);
      });
    }
}
