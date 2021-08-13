function HttpRequest() {

    this.method = null;
    this.headers = {};
    this.queryUrl = null;
    this.formData = null;
    this.form = null;
    this.username = null;
    this.password = null;
    this.body = null;
}

module.exports = HttpRequest;