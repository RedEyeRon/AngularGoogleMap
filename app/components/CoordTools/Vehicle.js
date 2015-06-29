function Vehicle(p1, p2, p3) {

    this.ecefVelocity = [0,0,0];
    this.ecefVelocityValid = false;

    this.llhVelocityValid = false;

    this.ecefValid = false;
    this.llhValid = false;

    var arr;

    if (p1.constructor === Array)
        arr = p1;
    else
        arr = [p1, p2, p3];

    if (CoordTools.isEcefArr(arr)) {
        this.ecefArr = arr;
        this.ecefValid = true;
    } else if (CoordTools.isLatLonAltDegreeMeterArr(arr)) {
        this.llhArr = arr;
        this.llhValid = true;
    }

    this.setEcefVelocity = function (p1, p2, p3) {

        this.ecefVelocityValid = true;
        this.llhVelocityValid = false;

        if (p1.constructor === Array)
            this.ecefVelocity = p1;
        else
            this.ecefVelocity = [p1, p2, p3];
    }

    this.getLlh = function () {
        if (this.llhValid) {
        } else if (this.ecefValid) {
            this.llhValid = true;
            this.llhArr = xyzllh(this.ecefArr);
        }
        return this.llhArr;
    }

    this.getEcef = function () {
        if (this.ecefValid) {
        } else if (this.ecefValid) {
            this.ecefValid = true;
            this.ecefArr = llhxyz(this.llhArr);
        }
        return this.ecefArrArr;
    }

    this.go = function(deltaTimeSec) {
        if (this.ecefValid) {
        } else if (this.llhValid) {
            this.ecefValid = true;
            this.ecefArr = llhxyz(this.llhArr);
        } else
            return;

        if (!this.ecefVelocityValid)
            return;

        this.ecefArr[0] += deltaTimeSec * this.ecefVelocity[0];
        this.ecefArr[1] += deltaTimeSec * this.ecefVelocity[1];
        this.ecefArr[2] += deltaTimeSec * this.ecefVelocity[2];

        this.llhValid = false;
    }
}


