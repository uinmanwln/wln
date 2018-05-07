var Promise = require('es6-promise').Promise;

class DhcpLeasesService {

    getLeasesData () {
        console.log("aaass");
        return new Promise((resolve, reject) => {
            this.apiClient
                .post(this.formUrl("get"))
                .end((...args) => {
                    this.processResponse(...args).then(resolve, reject);
                });
        });

    }
}

export default DhcpLeasesService;